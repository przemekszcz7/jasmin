import { MenuItem, OpeningHour, Review } from "./types";

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "p1",
    name: "Pierogi Ruskie",
    description: "Cienkie, aksamitne ciasto skrywające tradycyjny farsz z białego sera, tłuczonych ziemniaków i złocistej cebulki. Podawane z okrasą.",
    price: 24.0,
    unit: "porcja (10 szt.)",
    featured: true,
    category: "pierogi",
    tag: "Tradycyjna receptura"
  },
  {
    id: "p2",
    name: "Pierogi z Mięsem",
    description: "Nadziewane powoli gotowaną łopatką wieprzową i wołowiną, doprawionymi majerankiem, solą i pieprzem. Królewska propozycja z chrupiącymi skwarkami.",
    price: 26.0,
    unit: "porcja (10 szt.)",
    featured: true,
    category: "pierogi",
    tag: "Domowy klasyk"
  },
  {
    id: "p3",
    name: "Pierogi z Kapustą i Grzybami",
    description: "Kwaskowata kapusta kiszona duszona z leśnymi grzybami z zachodniopomorskich lasów, skomponowana ze świeżo mielonym czarnym pieprzem.",
    price: 25.0,
    unit: "porcja (10 szt.)",
    featured: false,
    category: "pierogi",
    tag: "Sekret cioci"
  },
  {
    id: "p4",
    name: "Pierogi z Jagodami Leśnymi",
    description: "Słodkie wspomnienie polskiego lata. Pękate pierogi wypełnione po brzegi leśnymi jagodami, podawane z gęstą, wiejską śmietaną i odrobiną cukru.",
    price: 28.0,
    unit: "porcja (10 szt.)",
    category: "pierogi"
  },
  {
    id: "o1",
    name: "Tradycyjny Kotlet Schabowy",
    description: "Smażony na smalcu, panierowany kotlet schabowy. Podawany z puszystym purée ziemniaczanym ze świeżym koperkiem oraz tradycyjną kapustą zasmażaną lub mizerią.",
    price: 34.0,
    unit: "zestaw",
    featured: true,
    category: "obiady",
    tag: "Bestseller obiadowy"
  },
  {
    id: "o2",
    name: "Domowy Rosół z Lubczykiem",
    description: "Esencjonalny, wolno gotowany bulion na trzech rodzajach mięs, podawany z naszym domowym, ręcznie krojonym cienkim makaronem i świeżą natką pietruszki.",
    price: 18.0,
    unit: "talerz",
    featured: false,
    category: "obiady"
  },
  {
    id: "o3",
    name: "Gołąbki w Sosie Pomidorowym",
    description: "Dwa duże gołąbki z mięsem mielonym i ryżem, zawinięte w liście sparzonej kapusty włoskiej. Polane aksamitnym, tradycyjnym sosem pomidorowym.",
    price: 32.0,
    unit: "porcja",
    featured: true,
    category: "obiady",
    tag: "Jak u mamy"
  },
  {
    id: "d1",
    name: "Zupa Pomidorowa z Makaronem",
    description: "Przygotowywana na bazie naszego rosołu, pełna przecieranych pomidorów i śmietanki. Podawana ze świeżym makaronem.",
    price: 16.0,
    unit: "talerz",
    category: "obiady"
  },
  {
    id: "d2",
    name: "Kompot Domowy ze Śliwek",
    description: "Tradycyjny, niezbyt słodki kompot owocowy podawany na zimno. Prawdziwie orzeźwiający dodatek do domowego obiadu.",
    price: 6.0,
    unit: "szklanka",
    category: "dodatki"
  }
];

export const OPENING_HOURS: OpeningHour[] = [
  { day: "poniedziałek", hours: "09:00 - 18:00" },
  { day: "wtorek", hours: "09:00 - 18:00" },
  { day: "środa", hours: "09:00 - 18:00" },
  { day: "czwartek", hours: "09:00 - 18:00" },
  { day: "piątek", hours: "09:00 - 18:00" },
  { day: "sobota", hours: "09:00 - 18:00" },
  { day: "niedziela", hours: "ZAMKNIĘTE", closed: true }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    author: "Karolina Nowak",
    source: "facebook",
    text: "Bardzo smaczne jedzenie👍👍",
    date: "10 maja 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120"
  }
];

export const IMAGES = {
  mainPierogi: "https://i.ibb.co/B5V3p8qx/628145830-122096334003251036-7843729647172987082-n.jpg",
  packaging: "https://i.ibb.co/jPfmL36t/638335664-122105415891251036-6424143076108066598-n.jpg",
  kitchenCloseUp: "https://i.ibb.co/8nZZDjW7/657384242-122110506855251036-6350934578836404593-n.jpg"
};
