/* ====================================================================
   GNK PROJESİ - FULL KURULUM (ANTIGRAVITY FINAL SÜRÜM)
   ====================================================================
*/

-- 1. TEMİZLİK
DROP FUNCTION IF EXISTS get_hotels_by_filters CASCADE;
DROP FUNCTION IF EXISTS get_similar_hotels CASCADE;
DROP FUNCTION IF EXISTS update_updated_at_column CASCADE;
DROP FUNCTION IF EXISTS hotels_search_vector_update CASCADE;
DROP TABLE IF EXISTS audit_logs CASCADE;
DROP TABLE IF EXISTS search_terms CASCADE;
DROP TABLE IF EXISTS price_tags CASCADE;
DROP TABLE IF EXISTS group_hotels CASCADE;
DROP TABLE IF EXISTS groups CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS articles CASCADE;
DROP TABLE IF EXISTS hotels CASCADE;

-- 2. TABLOLAR

-- OTELLER TABLOSU
CREATE TABLE public.hotels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  location text NOT NULL,
  description text DEFAULT '',
  price integer NOT NULL DEFAULT 0,
  rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  image_url text DEFAULT '',
  
  -- Özellikler
  video_url text, 
  video_thumbnail_url text,
  website_url text,
  instagram_url text,
  google_maps_url text,
  
  amenities text[] DEFAULT '{}',
  tags text[] DEFAULT '{}', 
  gallery_images text[] DEFAULT '{}',
  
  about text DEFAULT '',
  about_facility text DEFAULT '',
  rules text DEFAULT '',
  latitude numeric(10, 8),
  longitude numeric(11, 8),
  
  -- Arama ve Sistem
  search_vector tsvector, 
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz 
);

-- ETİKETLER
CREATE TABLE public.tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text DEFAULT 'Tag',
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  deleted_at timestamptz
);

-- GRUPLAR
CREATE TABLE public.groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  is_published boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz
);

-- GRUP İLİŞKİLERİ
CREATE TABLE public.group_hotels (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid REFERENCES public.groups(id) ON DELETE CASCADE,
  hotel_id uuid REFERENCES public.hotels(id) ON DELETE CASCADE,
  order_index integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  UNIQUE(group_id, hotel_id)
);

-- FİYAT FİLTRELERİ
CREATE TABLE public.price_tags (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  slug text UNIQUE NOT NULL,
  min_price integer NOT NULL DEFAULT 0,
  max_price integer NOT NULL DEFAULT 999999,
  created_at timestamptz DEFAULT now(),
  deleted_at timestamptz
);

-- ARAMA TERİMLERİ
CREATE TABLE public.search_terms (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  term text NOT NULL,
  slug text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  deleted_at timestamptz
);

-- MAKALELER
CREATE TABLE public.articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  title text NOT NULL,
  slug text NOT NULL UNIQUE,
  content text,
  cover_image_url text,
  meta_description text,
  location text,
  is_published boolean DEFAULT true,
  published_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  deleted_at timestamptz
);

-- 3. STORAGE
INSERT INTO storage.buckets (id, name, public) 
VALUES ('images', 'images', true)
ON CONFLICT (id) DO NOTHING;

-- 4. FONKSİYONLAR VE TRIGGERLAR

-- Updated_at güncelleme fonksiyonu
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_hotels_updated_at
  BEFORE UPDATE ON public.hotels
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_groups_updated_at
  BEFORE UPDATE ON public.groups
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Search Vector güncelleme fonksiyonu (Kod tarafındaki arama için KRİTİK)
CREATE OR REPLACE FUNCTION hotels_search_vector_update()
RETURNS TRIGGER AS $$
BEGIN
  NEW.search_vector :=
    setweight(to_tsvector('simple', coalesce(NEW.name, '')), 'A') ||
    setweight(to_tsvector('simple', coalesce(NEW.location, '')), 'B') ||
    setweight(to_tsvector('simple', coalesce(NEW.about, '')), 'C');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER hotels_search_vector_trigger
  BEFORE INSERT OR UPDATE OF name, location, about
  ON hotels
  FOR EACH ROW
  EXECUTE FUNCTION hotels_search_vector_update();

-- 5. GÜVENLİK (RLS)
ALTER TABLE hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_hotels ENABLE ROW LEVEL SECURITY;
ALTER TABLE price_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE search_terms ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Okuma Politikaları
CREATE POLICY "Public read hotels" ON hotels FOR SELECT USING (deleted_at IS NULL);
CREATE POLICY "Public read tags" ON tags FOR SELECT USING (deleted_at IS NULL);
CREATE POLICY "Public read groups" ON groups FOR SELECT USING (deleted_at IS NULL);
CREATE POLICY "Public read group_hotels" ON group_hotels FOR SELECT USING (true);
CREATE POLICY "Public read price_tags" ON price_tags FOR SELECT USING (deleted_at IS NULL);
CREATE POLICY "Public read search_terms" ON search_terms FOR SELECT USING (deleted_at IS NULL);
CREATE POLICY "Public read articles" ON articles FOR SELECT USING (deleted_at IS NULL AND is_published = true);

-- Yazma Politikaları (Geliştirme)
CREATE POLICY "Public write hotels" ON hotels FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update hotels" ON hotels FOR UPDATE USING (true);
CREATE POLICY "Public delete hotels" ON hotels FOR DELETE USING (true);

CREATE POLICY "Public write tags" ON tags FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update tags" ON tags FOR UPDATE USING (true);

CREATE POLICY "Public write groups" ON groups FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update groups" ON groups FOR UPDATE USING (true);

CREATE POLICY "Public write group_hotels" ON group_hotels FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update group_hotels" ON group_hotels FOR UPDATE USING (true);

CREATE POLICY "Public write articles" ON articles FOR INSERT WITH CHECK (true);
CREATE POLICY "Public update articles" ON articles FOR UPDATE USING (true);

-- Storage
DROP POLICY IF EXISTS "Public storage access" ON storage.objects;
CREATE POLICY "Public storage access" ON storage.objects FOR SELECT USING (bucket_id = 'images');

DROP POLICY IF EXISTS "Public storage insert" ON storage.objects;
CREATE POLICY "Public storage insert" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images');

DROP POLICY IF EXISTS "Public storage update" ON storage.objects;
CREATE POLICY "Public storage update" ON storage.objects FOR UPDATE USING (bucket_id = 'images');

-- 6. VERİLER
INSERT INTO tags (name, slug, icon, is_featured) VALUES
  ('Denize Sıfır', 'denize-sifir', 'Waves', true),
  ('Jakuzili', 'jakuzili', 'Bath', true),
  ('Romantik', 'romantik', 'Heart', false),
  ('Alkolsüz', 'alkolsuz', 'GlassWater', true),
  ('Aile Oteli', 'aile-oteli', 'Users', true),
  ('Havuzlu', 'havuzlu', 'Droplets', true)
ON CONFLICT (slug) DO NOTHING;

INSERT INTO price_tags (label, slug, min_price, max_price) VALUES
  ('2000 TL Altı', '2000-alti', 0, 1999),
  ('2000-4000 TL', '2000-4000', 2000, 3999),
  ('4000-6000 TL', '4000-6000', 4000, 5999),
  ('6000-8000 TL', '6000-8000', 6000, 7999),
  ('8000 TL Üzeri', '8000-uzeri', 8000, 999999)
ON CONFLICT (slug) DO NOTHING;

-- İndeksler
CREATE INDEX IF NOT EXISTS idx_hotels_search_vector ON hotels USING GIN (search_vector);
CREATE INDEX IF NOT EXISTS idx_hotels_tags ON hotels USING GIN (tags);
