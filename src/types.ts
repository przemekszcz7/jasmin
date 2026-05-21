export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number; // in PLN
  unit: string; // e.g. "szt.", "porcja (10 szt.)", "300g"
  featured?: boolean;
  category: "pierogi" | "obiady" | "dodatki";
  image?: string;
  tag?: string; // e.g. "Przedwojenny przepis", "Wyrabiane ręcznie"
}

export interface OpeningHour {
  day: string;
  hours: string;
  closed?: boolean;
}

export interface Review {
  id: string;
  author: string;
  source: "facebook" | "google";
  text: string;
  date?: string;
  avatar?: string;
}
