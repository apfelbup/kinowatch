

export const convertMovieType = (type:string) => {
    switch (type) {
        case 'film':
            return 'фильм';
        case 'tv-series':
                return 'сериал';
        case 'cartoon':
                return 'мультик';
        case 'anime':
                return 'аниме';
        default:
                return 'фильм';
    }
}