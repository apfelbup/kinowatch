import { filmData, person } from "./data";


export type filters = {
    year:string | null, 
    rating:string | null, 
    genre:string | null,
    filmsType: number
}

export interface QueryArgs {
    filters: filters,
    page: number | undefined
}

export interface IData {
	total: number;
	limit: number;
	page: number;
	pages: number;
}

export interface IFilms extends IData {
    docs: filmData[],
}

export interface IPersons extends IData {
    docs: person[],
}