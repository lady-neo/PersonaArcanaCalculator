const ARCANAS_DATA = {
  0: { name: "The Fool", image_url: "images/tarot/0.png" },
  1: { name: "The Magician", image_url: "/imagestarot/1.png" },
  2: { name: "The High Priestess", image_url: "images/tarot/2.png" },
  3: { name: "The Empress", image_url: "images/tarot/3.png" },
  4: { name: "The Emperor", image_url: "images/tarot/4.png" },
  5: { name: "The Hierophant", image_url: "images/tarot/5.png" },
  6: { name: "The Lovers", image_url: "images/tarot/6.png" },
  7: { name: "The Chariot", image_url: "images/tarot/7.png" },
  8: { name: "Justice", image_url: "images/tarot/8.png" },
  9: { name: "The Hermit", image_url: "images/tarot/9.png" },
  10: { name: "Wheel of Fortune", image_url: "/images/tarot/10.png" },
  11: { name: "Strength", image_url: "images/tarot/11.png" },
  12: { name: "The Hanged Man", image_url: "images/tarot/12.png" },
  13: { name: "Death", image_url: "images/tarot/13.png" },
  14: { name: "Temperance", image_url: "images/tarot/14.png" },
  15: { name: "The Devil", image_url: "images/tarot/15.png" },
  16: { name: "The Tower", image_url: "images/tarot/16.png" },
  17: { name: "The Star", image_url: "images/tarot/17.png" },
  18: { name: "The Moon", image_url: "images/tarot/18.png" },
  19: { name: "The Sun", image_url: "images/tarot/19.png" },
  20: { name: "Judgement/Aeon", image_url: "images/tarot/20.png" },
  21: { name: "The World", image_url: "images/tarot/21.png" },
  99: { name: "Unknown/Unnumbered", image_url: "https://placehold.co/80x80/3b82f6/FFFFFF?text=" }
};

const CHARACTERS_DATA = [
  // Protagonists
  {
    name: "Naoya Toudou",
    game: "Persona 1",
    arcana: [4],
    char_image: "images/naoya.png"
  },
  {
    name: "Tatsuya Suou",
    game: "Persona 2",
    arcana: [19],
    char_image: "images/tatsuya.png"
  },
  {
    name: "Maya Amano",
    game: "Persona 2",
    arcana: [18],
    char_image: "images/maya.png"
  },
  {
    name: "Makoto Yuki",
    game: "Persona 3",
    arcana: [0, 13, 20, 21],
    char_image: "images/minato.png"
  },
  {
    name: "Kotone Shiomi",
    game: "Persona 3 Portable",
    arcana: [0, 13, 20, 21],
    char_image: "images/kotone.png"
  },
  {
    name: "Aigis",
    game: "Persona 3",
    arcana: [7, 20, 0],
    char_image: "images/aigis.png"
  },
  {
    name: "Yu Narukami",
    game: "Persona 4",
    arcana: [0, 20, 21],
    char_image: "images/yu.png"
  },
  {
    name: "Ren Amamiya",
    game: "Persona 5",
    arcana: [0, 21],
    char_image: "images/ren.png"
  },

  // Persona 1
  {
    name: "Maki Sonomura",
    game: "Persona 1",
    arcana: [2],
    char_image: "images/maki.png"
  },
  {
    name: "Masao Inaba",
    game: "Persona 1",
    arcana: [7],
    char_image: "images/masao.png"
  },
  {
    name: "Yuka Ayase",
    game: "Persona 1",
    arcana: [1],
    char_image: "images/yuka.png"
  },
  {
    name: "Yukino Mayuzumi",
    game: "Persona 1",
    arcana: [3],
    char_image: "images/yukino.png"
  },
  {
    name: "Hidehiko Uesugi",
    game: "Persona 1",
    arcana: [8],
    char_image: "images/brown.png"
  },
  {
    name: "Kei Nanjo",
    game: "Persona 1",
    arcana: [5],
    char_image: "images/kei.png"
  },
  {
    name: "Reiji Kido",
    game: "Persona 1",
    arcana: [15, 13],
    char_image: "images/reiji.png"
  },
  {
    name: "Eriko Kirishima",
    game: "Persona 1",
    arcana: [20],
    char_image: "images/eriko.png"
  },
  {
    name: "Takahisa Kandori",
    game: "Persona 1",
    arcana: [16],
    char_image: "images/kandori.png"
  },
  {
    name: "Takeda",
    game: "Persona 1",
    arcana: [99],
    char_image: "images/takeda.png"
  },

  // SQQ Route
  {
    name: "Kenta Yokouchi",
    game: "Persona 1",
    arcana: [99],
    char_image: "images/kenta.png"
  },
  {
    name: "Kumi Hirose",
    game: "Persona 1",
    arcana: [18],
    char_image: "images/kumi.png"
  },
  {
    name: "Michiko Matsudaira",
    game: "Persona 1",
    arcana: [3],
    char_image: "images/michiko.png"
  },
  {
    name: "Yuriko Yamamoto",
    game: "Persona 1",
    arcana: [13],
    char_image: "images/yuriko.png"
  },
  {
    name: "Tomomi Fujimori",
    game: "Persona 1",
    arcana: [15],
    char_image: "images/tomomi.png"
  },

  // Persona 1 Manga
  {
    name: "Kazuya Toudou",
    game: "Persona 1 Manga",
    arcana: [4],
    char_image: "images/kazuya.png"
  },

  // Persona 1 Drama
  {
    name: "Bernie",
    game: "Persona 1 Drama",
    arcana: [99],
    char_image: "https://placehold.co/80x80/f3dbff/FFFFFF?text=Bernie"
  },

  // Persona 3
  {
    name: "Akihiko Sanada",
    game: "Persona 3",
    arcana: [4, 17],
    char_image: "images/akihiko.png"
  },

  // Persona 3 Shadow Cry
  {
    name: "Izumi",
    game: "Persona 3 Shadow Cry",
    arcana: [99],
    char_image: "https://placehold.co/80x80/71B8FF/FFFFFF?text=Izumi"
  },

  // Persona Mobile Online
  {
    name: "Tarou",
    game: "Persona Mobile Online",
    arcana: [0],
    char_image: "images/tarou.png"
  },

  // Persona 4
  {
    name: "Yosuke Hanamura",
    game: "Persona 4",
    arcana: [1],
    char_image: "images/yosuke.png"
  },
  {
    name: "Chie Satonaka",
    game: "Persona 4",
    arcana: [7],
    char_image: "images/chie.png"
  },
  {
    name: "Yukiko Amagi",
    game: "Persona 4",
    arcana: [2],
    char_image: "images/yukiko.png"
  },
  {
    name: "Kanji Tatsumi",
    game: "Persona 4",
    arcana: [4],
    char_image: "images/kanji.png"
  },
  {
    name: "Rise Kujikawa",
    game: "Persona 4",
    arcana: [6],
    char_image: "images/rise.png"
  },
  {
    name: "Teddie",
    game: "Persona 4",
    arcana: [17],
    char_image: "images/teddie.png"
  },
  {
    name: "Naoto Shirogane",
    game: "Persona 4",
    arcana: [10],
    char_image: "images/naoto.png"
  },
  {
    name: "Margaret",
    game: "Persona 4",
    arcana: [3],
    char_image: "images/margaret.png"
  },
  {
    name: "Tohru Adachi",
    game: "Persona 4",
    arcana: [0],
    char_image: "images/adachi.png"
  },
  {
    name: "Kou Ichijo",
    game: "Persona 4",
    arcana: [11],
    char_image: "images/kou.png"
  },
  {
    name: "Daisuke Nagase",
    game: "Persona 4",
    arcana: [11],
    char_image: "images/daisuke.png"
  },

  // Persona 4 Arena
  {
    name: "Labrys",
    game: "Persona 4 Arena",
    arcana: [10],
    char_image: "images/labrys.png"
  },

  // Persona 4 Arena Ultimax
  {
    name: "Sho Minazuki",
    game: "Persona 4 Arena Ultimax",
    arcana: [19, 18],
    char_image: "images/sho_minazuki.png"
  },

  // Persona x Detective Naoto
  {
    name: "Touko Aoi",
    game: "Persona x Detective Naoto",
    arcana: [20],
    char_image: "images/touko.png"
  },
  {
    name: "Sousei Kurogami",
    game: "Persona x Detective Naoto",
    arcana: [18],
    char_image: "images/sousei.png"
  },

  // Persona 5
  {
    name: "Ryuji Sakamoto",
    game: "Persona 5",
    arcana: [7],
    char_image: "images/ryuji.png"
  },
  {
    name: "Makoto Niijima",
    game: "Persona 5",
    arcana: [2],
    char_image: "images/makoto.png"
  },

  // And Igor
  { name: "Igor", game: "All", arcana: [0], char_image: "images/igor.png" }