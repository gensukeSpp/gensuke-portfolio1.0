export interface Product {
	title: string;
	term: string;
	presentation?: string;
	language: Language[];
	link?: string;
  }
  
  export interface Language {
	program: string;
	framework?: Framework[];
	library?: Library[];
  }
  
  export interface Framework {
	name: string;
	description: string;
	action: Action[];
  }
  
  export interface Library {
	name: string;
	description?: string;
	action: Action[];
  }
  
  interface Action {
	summary: string;
	explanation: string;
	source?: string;
  }
  
  // type Product = {
  //   title: string,
  //   term: string,
  //   description?: string
  // }
  
  // type Language = Product & {
  //   program: string[]
  // }
  
  // type Framework = Language & {
  //   name: string,
  //   description: string,
  //   action: Action[]
  // }
  
  // type Library = Language & {
  //   name: string,
  //   description?: string,
  //   action: Action[]
  // }
  
  // type Action = {
  //   summary: string,
  //   description: string
  // }