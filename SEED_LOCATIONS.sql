/*
  SEED_LOCATIONS.sql
  Kullanıcının verdiği tatil bölgelerini search_terms tablosuna ekler.
*/

INSERT INTO search_terms (term, slug) VALUES
  -- MUĞLA
  ('Muğla', 'mugla'),
  ('Bodrum', 'bodrum-mugla'),
  ('Yalıkavak', 'yalikavak-bodrum'),
  ('Gümbet', 'gumbet-bodrum'),
  ('Bitez', 'bitez-bodrum'),
  ('Türkbükü', 'turkbuku-bodrum'),
  ('Gümüşlük', 'gumusluk-bodrum'),
  ('Turgutreis', 'turgutreis-bodrum'),
  ('Torba', 'torba-bodrum'),
  ('Gündoğan', 'gundogan-bodrum'),
  ('Ortakent', 'ortakent-bodrum'),
  ('Akyarlar', 'akyarlar-bodrum'),
  ('Fethiye', 'fethiye-mugla'),
  ('Ölüdeniz', 'oludeniz-fethiye'),
  ('Göcek', 'gocek-fethiye'),
  ('Kabak Koyu', 'kabak-koyu-fethiye'),
  ('Marmaris', 'marmaris-mugla'),
  ('İçmeler', 'icmeler-marmaris'),
  ('Selimiye', 'selimiye-marmaris'),
  ('Bozburun', 'bozburun-marmaris'),
  ('Söğüt', 'sogut-marmaris'),
  ('Datça', 'datca-mugla'),
  ('Palamutbükü', 'palamutbuku-datca'),
  ('Hayıtbükü', 'hayitbuku-datca'),
  ('Ovabükü', 'ovabuku-datca'),
  ('Dalyan', 'dalyan-ortaca'),
  ('Sarıgerme', 'sarigerme-ortaca'),
  ('Akyaka', 'akyaka-ula'),

  -- İZMİR
  ('İzmir', 'izmir'),
  ('Çeşme', 'cesme-izmir'),
  ('Alaçatı', 'alacati-cesme'),
  ('Ilıca', 'ilica-cesme'),
  ('Urla', 'urla-izmir'),
  ('Seferihisar', 'seferihisar-izmir'),
  ('Sığacık', 'sigacik-seferihisar'),
  ('Foça', 'foca-izmir'),
  ('Şirince', 'sirince-selcuk'),

  -- AYDIN
  ('Kuşadası', 'kusadasi-aydin'),
  ('Didim', 'didim-aydin'),

  -- ANTALYA
  ('Antalya', 'antalya'),
  ('Kaş', 'kas-antalya'),
  ('Kalkan', 'kalkan-kas'),
  ('Patara', 'patara-kas'),
  ('Kemer', 'kemer-antalya'),
  ('Göynük', 'goynuk-kemer'),
  ('Çıralı', 'cirali-kumluca'),
  ('Olympos', 'olympos-kumluca'),
  ('Adrasan', 'adrasan-kumluca'),
  ('Manavgat', 'manavgat-antalya'),
  ('Side', 'side-manavgat'),
  ('Alanya', 'alanya-antalya'),
  ('Belek', 'belek-serik'),
  ('Lara', 'lara-muratpasa'),
  ('Kekova', 'kekova-demre'),

  -- MERSİN
  ('Mersin', 'mersin'),
  ('Silifke', 'silifke-mersin'),
  ('Susanoğlu', 'susanoglu-silifke'),
  ('Kızkalesi', 'kizkalesi-erdemli'),

  -- MARMARA
  ('Ayvalık', 'ayvalik-balikesir'),
  ('Cunda', 'cunda-ayvalik'),
  ('Sarımsaklı', 'sarimsakli-ayvalik'),
  ('Assos', 'assos-canakkale'),
  ('Bozcaada', 'bozcaada-canakkale'),
  ('Gökçeada', 'gokceada-canakkale'),
  ('Sapanca', 'sapanca-sakarya'),
  ('Maşukiye', 'masukiye-kocaeli'),
  ('Ağva', 'agva-istanbul'),
  ('Şile', 'sile-istanbul'),
  ('Uludağ', 'uludag-bursa'),
  ('İznik', 'iznik-bursa'),

  -- KAPADOKYA & KARADENİZ
  ('Kapadokya', 'kapadokya'),
  ('Göreme', 'goreme-nevsehir'),
  ('Ürgüp', 'urgup-nevsehir'),
  ('Avanos', 'avanos-nevsehir'),
  ('Abant', 'abant-bolu'),
  ('Yedigöller', 'yedigoller-bolu'),
  ('Amasra', 'amasra-bartin'),
  ('Ayder', 'ayder-rize'),
  ('Uzungöl', 'uzungol-trabzon')
ON CONFLICT (slug) DO NOTHING;
