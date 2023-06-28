export interface Work {
  title: string;
  term: string;
  presentation?: string;
  language: Language[];
  link?: string;
}

export interface Language {
  program: string;
  library: Library[];
}

export interface Library {
  name: string;
  description?: string;
  action: Action[];
}

interface Action {
  summary: string;
  explanation: string;
  source: string;
}

// type Work = {
//  title: string,
//  term: string,
// 	presentation?: string,
// 	language: Language[],
// 	link?: string,
// }

// type Language = Work & {
// 	program: string,
// 	library: Library[],
// }

// type Library = Language & {
//   name: string,
//   description?: string,
//   action: Action[]
// }

// type Action = {
// 	summary: string,
// 	explanation: string,
// 	source: string,
// }
