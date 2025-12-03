const japanPrefectures = {
  Chubu: [
    'Aichi',
    'Fukui',
    'Gifu',
    'Ishikawa',
    'Nagano',
    'Niigata',
    'Shizuoka',
    'Toyama',
    'Yamanashi',
  ],
  Chugoku: ['Hiroshima', 'Okayama', 'Shimane', 'Tottori', 'Yamaguchi'],
  Hokkaido: ['Hokkaido'],
  Kansai: ['Hyōgo', 'Kyoto', 'Mie', 'Nara', 'Osaka', 'Shiga', 'Wakayama'],
  Kanto: [
    'Chiba',
    'Gunma',
    'Ibaraki',
    'Kanagawa',
    'Saitama',
    'Tochigi',
    'Tokyo',
  ],
  Kyushu: [
    'Fukuoka',
    'Kumamoto',
    'Miyazaki',
    'Nagasaki',
    'Ōita',
    'Saga',
    'Kagoshima',
    'Okinawa',
  ],
  Shikoku: ['Ehime', 'Kagawa', 'Kōchi', 'Tokushima'],
  Tohoku: ['Akita', 'Aomori', 'Fukushima', 'Iwate', 'Miyagi', 'Yamagata'],
};

export const allPrefectures = Object.values(japanPrefectures)
  .flat()
  .sort((a, b) => a.localeCompare(b));

export const japanRegions = Object.keys(japanPrefectures);
