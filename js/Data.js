const ARCANAS_DATA = {
  0: {
    name: "The Fool",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759343551/Fool-0_vfvgvx.png"
  },
  1: {
    name: "The Magician",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759344820/Magician-0_pobyez.png"
  },
  2: {
    name: "The High Priestess",
    image_url:
      "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345696/Priestess-0_sy2zjb.png"
  },
  3: {
    name: "The Empress",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345648/Empress-0_wzgoks.png"
  },
  4: {
    name: "The Emperor",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345647/Emperor-0_ukzupp.png"
  },
  5: {
    name: "The Hierophant",
    image_url:
      "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345646/Hierophant-0_yp8gpy.png"
  },
  6: {
    name: "The Lovers",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345646/Lovers-0_t3ozk9.png"
  },
  7: {
    name: "The Chariot",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345642/Chariot-0_l5b0b2.png"
  },
  8: {
    name: "Justice",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345640/Justice-0_xv6z3s.png"
  },
  9: {
    name: "The Hermit",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345639/Hermit-0_wf5k2p.png"
  },
  10: {
    name: "Wheel of Fortune",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345640/Fortune-0_pyyplw.png"
  },
  11: {
    name: "Strength",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345635/Strength-0_bjvvde.png"
  },
  12: {
    name: "The Hanged Man",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345633/Hanged_Man_yyeur4.png"
  },
  13: {
    name: "Death",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345631/Death-0_mgdfxe.png"
  },
  14: {
    name: "Temperance",
    image_url:
      "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345630/Temperance-0_otxm0l.png"
  },
  15: {
    name: "The Devil",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759346552/Devil-0_qrkfxa.png"
  },
  16: {
    name: "The Tower",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345630/Tower-0_hljbnv.png"
  },
  17: {
    name: "The Star",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345626/Star-0_y5nqu7.png"
  },
  18: {
    name: "The Moon",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759346272/Moon-0_olozdx.png"
  },
  19: {
    name: "The Sun",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345626/Sun-0_ozjk8h.png"
  },
  20: {
    name: "Judgement/Aeon",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345625/Judgement_e0eoag.png"
  },
  21: {
    name: "The World",
    image_url: "https://res.cloudinary.com/dhbrdf1p8/image/upload/v1759345625/World-0_wknbcy.png"
  },
  99: {
    name: "Unknown/Unnumbered",
    image_url: "https://placehold.co/80x80/3b82f6/FFFFFF?text=?"
  }
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
  {
    name: "Junpei Iori",
    game: "Persona 3",
    arcana: [1],
    char_image: "images/junpei.png"
  },
  {
    name: "Chidori Yoshino",
    game: "Persona 3",
    arcana: [12],
    char_image: "images/chidori.png"
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
  {
    name: "Sadayo Kawakami",
    game: "Persona 5",
    arcana: [14],
    char_image: "images/sadayo.png"
  },

  // And Igor
  { name: "Igor", game: "All", arcana: [0], char_image: "images/igor.png" }
  ];