
export type backdrop = {
        previewUrl?: string,
        url?:string
}

export type countries = {
        name:string
};

export type genres = {
        name:string
}

export type logo = {
        url:string
}

export type person = {
        id:number,
        name:string,
        photo:string,
        enName:string,
        sex:string,
        age:string,
        profession:any[],
        movies:any[],
        facts:any[]

}

export type persons = {
        name?:string,
        photo?: string,
        id?:number
}

export type rating = {
        filmCritics?: number,
        imdb: number,
        kp : number,
        russianFilmCritics?: number
}

export type videos = {
        trailers: any[]
}

export interface filmData { 
        id: number,
        description: string,
        year:number,
        name:string,
        enName?:string | null,
        type:string,
        rating: rating,
        genres: any,
        movieLength: number,
        logo?: logo,
        backdrop: backdrop,
        countries?: countries[],
        persons?:persons[],
        videos?: videos[]
};

