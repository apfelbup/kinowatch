
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

export type persons = {
        name:string,
        photo: string
}

export type rating = {
        filmCritics: number,
        imdb: number,
        kp : number,
        russianFilmCritics: number
}

export interface filmData { 
        id: number,
        description: string,
        year:number,
        name:string,
        enName?:string | null,
        type:string,
        rating: rating,
        genres: genres[],
        movieLength: number | null,
        logo?: logo,
        backdrop?: backdrop,
        countries: countries[],
        persons:persons[]


}