//goosht

import goosht_charkh_icon1 from "./assets/pics/goosht/icon/goosht charkh karde.png";
import goosht_charkh_icon2 from "./assets/pics/goosht/middle/goosht charkh karde.png";

import goosht_jambon_icon1 from "./assets/pics/goosht/icon/jambon goosht.png";
import goosht_jambon_icon2 from "./assets/pics/goosht/middle/jambon goosht.png";

import morgh_jambon_icon1 from "./assets/pics/goosht/icon/jambon morgh.png";
import morgh_jambon_icon2 from "./assets/pics/goosht/middle/jambon morgh.png";

import sosis_icon1 from "./assets/pics/goosht/icon/sosis.png";
import sosis_icon2 from "./assets/pics/goosht/middle/sosis.png";

import steak_icon1 from "./assets/pics/goosht/icon/steak goosht.png";
import steak_icon2 from "./assets/pics/goosht/middle/steak goosht.png";

// khamir

import italian_icon1 from "./assets/pics/khakmir/icon/italian.png";
import italian_icon2 from "./assets/pics/khakmir/middle/italian.png";

import pan_icon1 from "./assets/pics/khakmir/icon/pan.png";
import pan_icon2 from "./assets/pics/khakmir/middle/pan.png";

import stuffed_icon1 from "./assets/pics/khakmir/icon/stuff crust.png";
import stuffed_icon2 from "./assets/pics/khakmir/middle/stuff crust.png";

//sabzi

import felfel_icon1 from "./assets/pics/sabzi/icon/felfel dolme.png";
import felfel_icon2 from "./assets/pics/sabzi/middle/felfel dolme.png";

import gharch_icon1 from "./assets/pics/sabzi/icon/gharch.png";
import gharch_icon2 from "./assets/pics/sabzi/middle/gharch.png";

import zorrat_icon1 from "./assets/pics/sabzi/icon/zorrat.png";
import zorrat_icon2 from "./assets/pics/sabzi/middle/zorrat.png";

import piaz_icon1 from "./assets/pics/sabzi/icon/piaz.png";
import piaz_icon2 from "./assets/pics/sabzi/middle/piaz.png";

//sos

import spicy_icon1 from "./assets/pics/sos/icon/spicy.png";
import spicy_icon2 from "./assets/pics/sos/middle/spicy sauce.png";

import sir_icon1 from "./assets/pics/sos/icon/sir.png";
import sir_icon2 from "./assets/pics/sos/middle/sir.png";

import napoli_icon1 from "./assets/pics/sos/icon/napoli.png";
import napoli_icon2 from "./assets/pics/sos/middle/napoli sauce.png";

//panir

import mozarella_icon1 from "./assets/pics/panir/icon/mozarella.png";
import mozarella_icon2 from "./assets/pics/panir/middle/mozarella.png";

import fresh_icon1 from "./assets/pics/panir/icon/fresh mozarella.png";
import fresh_icon2 from "./assets/pics/panir/middle/fresh mozarella.png";

import parmesan_icon1 from "./assets/pics/panir/icon/parmesan.png";
import parmesan_icon2 from "./assets/pics/panir/middle/parmesan.png";

export const non_data = [
  {
    name: "خمیر ایتالیایی",
    parentName: "نون",
    id: "001",
    parentId: "0",
    image: "",
    icon1: italian_icon1,
    icon2: italian_icon2,
    zindex: 100,
    price: 100
  },
  {
    name: "خمیر ‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍‍پر شده",
    parentName: "نون",
    id: "003",
    parentId: "0",
    image: "",
    icon1: stuffed_icon1,
    icon2: stuffed_icon2,
    zindex: 100,
    price: 200
  },
  {
    name: "ماهیتابه ای",
    parentName: "نون",
    id: "002",
    parentId: "0",
    image: "",
    icon1: pan_icon1,
    icon2: pan_icon2,
    zindex: 100,
    price: 240
  }
];

export const sos_data = [
  {
    name: "سس تند",
    parentName: "سس",
    id: "101",
    parentId: "1",
    image: "",
    icon1: spicy_icon1,
    icon2: spicy_icon2,
    zindex: 110,
    price: 200
  },
  {
    name: "سس ناپلی",
    parentName: "سس",
    id: "102",
    parentId: "1",
    image: "",
    icon1: napoli_icon1,
    icon2: napoli_icon2,
    zindex: 110,
    price: 150
  },
  {
    name: "سس سیر",
    parentName: "سس",
    id: "103",
    parentId: "1",
    image: "",
    icon1: sir_icon1,
    icon2: sir_icon2,
    zindex: 110,
    price: 100
  }
];

export const sabzi_data = [
  {
    name: "قارچ",
    parentName: "سبزیجات",
    id: "401",
    parentId: "4",
    image: "",
    icon1: gharch_icon1,
    icon2: gharch_icon2,
    zindex: 140,
    price: 230
  },
  {
    name: "فلفل دلمه ای",
    parentName: "سبزیجات",
    id: "402",
    parentId: "4",
    image: "",
    icon1: felfel_icon1,
    icon2: felfel_icon2,
    zindex: 140,
    price: 50
  },
  {
    name: "ذرت",
    parentName: "سبزیجات",
    id: "403",
    parentId: "4",
    image: "",
    icon1: zorrat_icon1,
    icon2: zorrat_icon2,
    zindex: 140,
    price: 100
  },
  {
    name: "پیاز",
    parentName: "سبزیجات",
    id: "404",
    parentId: "4",
    image: "",
    icon1: piaz_icon1,
    icon2: piaz_icon2,
    zindex: 140,
    price: 130
  }
];

export const gosht_data = [
  {
    name: "گوشت چرخ کرده",
    parentName: "گوشت",
    id: "301",
    parentId: "3",
    image: "",
    icon1: goosht_charkh_icon1,
    icon2: goosht_charkh_icon2,
    zindex: 130,
    price: 2000
  },
  {
    name: "گوشت استیک",
    parentName: "گوشت",
    id: "302",
    parentId: "3",
    image: "",
    icon1: steak_icon1,
    icon2: steak_icon2,
    zindex: 130,
    price: 500
  },
  {
    name: "سوسیس",
    parentName: "گوشت",
    id: "303",
    parentId: "3",
    image: "",
    icon1: sosis_icon1,
    icon2: sosis_icon2,
    zindex: 130,
    price: 600
  },
  {
    name: "ژامبون",
    parentName: "گوشت",
    id: "304",
    parentId: "3",
    image: "",
    icon1: goosht_jambon_icon1,
    icon2: goosht_jambon_icon2,
    zindex: 130,
    price: 900
  },
  {
    name: "خی گوشت",
    parentName: "گوشت",
    id: "305",
    parentId: "3",
    image: "",
    icon1: morgh_jambon_icon1,
    icon2: morgh_jambon_icon2,
    zindex: 130,
    price: 200
  }
];

export const panir_data = [
  {
    name: "پنیر موزارلا",
    parentName: "پنیر",
    id: "201",
    parentId: "2",
    image: "",
    icon1: mozarella_icon1,
    icon2: mozarella_icon2,
    zindex: 120,
    price: 450
  },
  {
    name: "پنیر موزارلا تازه",
    parentName: "پنیر",
    id: "202",
    parentId: "2",
    image: "",
    icon1: fresh_icon1,
    icon2: fresh_icon2,
    zindex: 120,
    price: 500
  },
  {
    name: "پنیر پارمژان",
    parentName: "پنیر",
    id: "203",
    parentId: "2",
    image: "",
    icon1: parmesan_icon1,
    icon2: parmesan_icon2,
    zindex: 120,
    price: 400
  }
];

// export const data = [
//   {
//     name: "نون جو",
//     parentName: "نون",
//     id: "301",
//     parentId: "3",
//     image: "",
//     icon1: non_icon1,
//     icon2: non_icon2,
//     zindex: 100
//   },
//   {
//     name: "نون گو",
//     parentName: "نون",
//     id: "303",
//     parentId: "3",
//     image: "",
//     icon1: non_icon1,
//     icon2: non_icon2,
//     zindex: 100
//   },
//   {
//     name: "نون سیر",
//     parentName: "نون",
//     id: "302",
//     parentId: "3",
//     image: "",
//     icon1: non_icon1,
//     icon2: non_icon2,
//     zindex: 100
//   },
//   {
//     name: "ریحون",
//     parentName: "سبزیجات",
//     id: "101",
//     parentId: "1",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 130
//   },
//   {
//     name: "تره",
//     parentName: "سبزیجات",
//     id: "102",
//     parentId: "1",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 130
//   },
//   {
//     name: "پیاز",
//     parentName: "سبزیجات",
//     id: "103",
//     parentId: "1",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 130
//   },
//   {
//     name: "کاهو",
//     parentName: "سبزیجات",
//     id: "104",
//     parentId: "1",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 130
//   },
//   {
//     name: "گوشت خر",
//     parentName: "گوشت",
//     id: "001",
//     parentId: "0",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 120
//   },
//   {
//     name: "گوشت گاو",
//     parentName: "گوشت",
//     id: "002",
//     parentId: "0",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 120
//   },
//   {
//     name: "گوشت گراز",
//     parentName: "گوشت",
//     id: "003",
//     parentId: "0",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 120
//   },
//   {
//     name: "گوشت گوسفند",
//     parentName: "گوشت",
//     id: "004",
//     parentId: "0",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 120
//   },
//   {
//     name: "خی گوشت",
//     parentName: "گوشت",
//     id: "005",
//     parentId: "0",
//     image: "",
//     icon1: sabzi_icon1,
//     icon2: sabzi_icon2,
//     zindex: 120
//   },
//   {
//     name: "پنیر گودا",
//     parentName: "پنیر",
//     id: "201",
//     parentId: "3",
//     image: "",
//     icon1: panir_icon1,
//     icon2: panir_icon2,
//     zindex: 140
//   },
//   {
//     name: "پنیر پارمیسان",
//     parentName: "پنیر",
//     id: "202",
//     parentId: "3",
//     image: "",
//     icon1: panir_icon1,
//     icon2: panir_icon2,
//     zindex: 140
//   },
//   {
//     name: "پنیر پیتزا",
//     parentName: "پنیر",
//     id: "203",
//     parentId: "3",
//     image: "",
//     icon1: panir_icon1,
//     icon2: panir_icon2,
//     zindex: 140
//   },
//   {
//     name: "سس قرمز",
//     parentName: "سس",
//     id: "401",
//     parentId: "4",
//     image: "",
//     icon1: sos_icon1,
//     icon2: sos_icon2,
//     zindex: 110
//   },
//   {
//     name: "سس نارنجی",
//     parentName: "سس",
//     id: "402",
//     parentId: "4",
//     image: "",
//     icon1: sos_icon1,
//     icon2: sos_icon2,
//     zindex: 110
//   },
//   {
//     name: "سس زرد",
//     parentName: "سس",
//     id: "403",
//     parentId: "4",
//     image: "",
//     icon1: sos_icon1,
//     icon2: sos_icon2,
//     zindex: 110
//   }
// ];
