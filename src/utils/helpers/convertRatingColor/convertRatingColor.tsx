


export const convertRatingColor = (value:number) => {
    if(value < 4) {
        return '#BA1010'
    } else if(value >= 4 && value < 6){
        return '#F0AA23'
    } else if(value >= 6) {
        return '#288818'
    }
}