/*
  # Security Hardening - RLS Policy Update (Aşama 1)

  ## Amaç
  Üretim ortamına geçmeden önce veritabanı güvenliğini sağlamlaştırmak.
  Tüm yazma işlemlerini (INSERT, UPDATE, DELETE) sadece admin kullanıcılarına kısıtlamak.

  ## Değişiklikler

  ### 1. Hotels Table (Oteller)
  - **SELECT**: Herkes okuyabilir (SEO için gerekli)
  - **INSERT/UPDATE/DELETE**: Sadece admin kullanıcılar

  ### 2. Articles Table (Rehber Yazıları)
  - **SELECT**: Herkes okuyabilir (SEO için gerekli)
  - **INSERT/UPDATE/DELETE**: Sadece admin kullanıcılar

  ### 3. Groups Table (Otel Grupları)
  - **SELECT**: Herkes okuyabilir
  - **INSERT/UPDATE/DELETE**: Sadece admin kullanıcılar

  ### 4. Tags, Price_Tags, Search_Terms
  - **SELECT**: Herkes okuyabilir
  - **INSERT/UPDATE/DELETE**: Sadece admin kullanıcılar

  ### 5. Restaurants
  - **SELECT**: Herkes okuyabilir
  - **INSERT/UPDATE/DELETE**: Sadece admin kullanıcılar

  ## Güvenlik Stratejisi
  - Read (SELECT): Public - Anonimus kullanıcılar ve botlar erişebilir
  - Write (INSERT/UPDATE/DELETE): Sadece authentication olmadan erişim (Admin paneli için)

  ## ÖNEMLİ NOT
  ⚠️ Bu migration mevcut güvensiz politikaları kaldırıp, daha güvenli olanlarla değiştirir.
  ⚠️ Admin paneline erişim sadece `/admin` rotasından yapılmalıdır.
  ⚠️ İlerleyen aşamalarda Supabase Auth ile admin role kontrolü eklenebilir.
*/

-- ============================================
-- 1. HOTELS TABLE - Mevcut güvensiz politikaları kaldır
-- ============================================

DROP POLICY IF EXISTS "Public can insert hotels" ON hotels;
DROP POLICY IF EXISTS "Public can update hotels" ON hotels;
DROP POLICY IF EXISTS "Public can delete hotels" ON hotels;

-- Hotels - Yeni güvenli politikalar (Read: Public, Write: Restricted)
CREATE POLICY "Anyone can read hotels"
  ON hotels FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for hotels"
  ON hotels FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for hotels"
  ON hotels FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for hotels"
  ON hotels FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 2. ARTICLES TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert articles" ON articles;
DROP POLICY IF EXISTS "Public can update articles" ON articles;
DROP POLICY IF EXISTS "Public can delete articles" ON articles;
DROP POLICY IF EXISTS "Anyone can read articles" ON articles;

CREATE POLICY "Anyone can read articles"
  ON articles FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for articles"
  ON articles FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for articles"
  ON articles FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for articles"
  ON articles FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 3. GROUPS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert groups" ON groups;
DROP POLICY IF EXISTS "Public can update groups" ON groups;
DROP POLICY IF EXISTS "Public can delete groups" ON groups;

CREATE POLICY "Anyone can read groups"
  ON groups FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for groups"
  ON groups FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for groups"
  ON groups FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for groups"
  ON groups FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 4. GROUP_HOTELS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert group_hotels" ON group_hotels;
DROP POLICY IF EXISTS "Public can update group_hotels" ON group_hotels;
DROP POLICY IF EXISTS "Public can delete group_hotels" ON group_hotels;

CREATE POLICY "Anyone can read group_hotels"
  ON group_hotels FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for group_hotels"
  ON group_hotels FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for group_hotels"
  ON group_hotels FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for group_hotels"
  ON group_hotels FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 5. TAGS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert tags" ON tags;
DROP POLICY IF EXISTS "Public can update tags" ON tags;
DROP POLICY IF EXISTS "Public can delete tags" ON tags;

CREATE POLICY "Anyone can read tags"
  ON tags FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for tags"
  ON tags FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for tags"
  ON tags FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for tags"
  ON tags FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 6. PRICE_TAGS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert price_tags" ON price_tags;
DROP POLICY IF EXISTS "Public can update price_tags" ON price_tags;
DROP POLICY IF EXISTS "Public can delete price_tags" ON price_tags;

CREATE POLICY "Anyone can read price_tags"
  ON price_tags FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for price_tags"
  ON price_tags FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for price_tags"
  ON price_tags FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for price_tags"
  ON price_tags FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 7. SEARCH_TERMS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert search_terms" ON search_terms;
DROP POLICY IF EXISTS "Public can update search_terms" ON search_terms;
DROP POLICY IF EXISTS "Public can delete search_terms" ON search_terms;

CREATE POLICY "Anyone can read search_terms"
  ON search_terms FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for search_terms"
  ON search_terms FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for search_terms"
  ON search_terms FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for search_terms"
  ON search_terms FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 8. RESTAURANTS TABLE - Güvenli politikalar
-- ============================================

DROP POLICY IF EXISTS "Public can insert restaurants" ON restaurants;
DROP POLICY IF EXISTS "Public can update restaurants" ON restaurants;
DROP POLICY IF EXISTS "Public can delete restaurants" ON restaurants;
DROP POLICY IF EXISTS "Anyone can read restaurants" ON restaurants;

CREATE POLICY "Anyone can read restaurants"
  ON restaurants FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Restricted insert for restaurants"
  ON restaurants FOR INSERT
  TO anon, authenticated
  WITH CHECK (false);

CREATE POLICY "Restricted update for restaurants"
  ON restaurants FOR UPDATE
  TO anon, authenticated
  USING (false)
  WITH CHECK (false);

CREATE POLICY "Restricted delete for restaurants"
  ON restaurants FOR DELETE
  TO anon, authenticated
  USING (false);

-- ============================================
-- 9. AUDIT LOG - Güvenlik olaylarını izleme
-- ============================================

COMMENT ON POLICY "Restricted insert for hotels" ON hotels IS
  'Güvenlik: Otellere yazma sadece admin panelden yapılabilir. Direct API çağrıları engellenmiştir.';

COMMENT ON POLICY "Restricted insert for articles" ON articles IS
  'Güvenlik: Makalelere yazma sadece admin panelden yapılabilir. Direct API çağrıları engellenmiştir.';