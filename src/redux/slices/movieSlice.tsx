import { createSlice } from "@reduxjs/toolkit";




const initialState = {
    activeAccordion: {
        isActive: false,
        activeMovie:123,
        movie: {
            persons:[{name:'', photo:''}],
            countries:[{name:''},{name:''}],
            id:13,
            year:123,
            name:'',
            enName:'',
            type:'',
            rating:{
                imdb:1,
                kp:1
            },
            movieLength:123,
            logo:{url:''},
            description:'',
            backdrop:{url:''},
            genres:['','']
        }
    },
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setMovieAccordeon:(state, action) => {
            state.activeAccordion.movie = action.payload;
            state.activeAccordion.isActive = true;
            state.activeAccordion.activeMovie = action.payload.id;
        },
        closeMovieAccordeon:(state) => {
            state.activeAccordion.isActive = false;
        },
    }
})

export const { setMovieAccordeon, closeMovieAccordeon } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;