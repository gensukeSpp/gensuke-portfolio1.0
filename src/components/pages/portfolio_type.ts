export interface Product {
  title: string;
  term: string;
  description?: string;
  language: Language[];
}

interface Language {
  language: string;
  // framework?: Framework[],
  // library?: Library[]
}

export interface Framework extends Language {
  name: string;
  description: string;
  action: Action[];
}

export interface Library extends Language {
  name: string;
  action: Action[];
}

interface Action {
  summary: string;
  description: string;
  source: string;
}
