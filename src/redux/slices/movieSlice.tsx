import { createSlice } from "@reduxjs/toolkit";
import { filmData } from "../../utils/interfaces/data";



interface IMovie {
    isPopup: boolean,
    filters: string,
    activeFilmboard: {
        isActive: boolean,
        activeMovie: null | number,
        movie: filmData | null
    },
}


const initialState:IMovie = {
    isPopup: false,
    filters:'',
    activeFilmboard: {
        isActive: false,
        activeMovie: null,
        movie: null
    },
}

export const movieSlice = createSlice({
    name:'movie',
    initialState,
    reducers: {
        setMovieAccordeon:(state, action) => {
            state.activeFilmboard.movie = action.payload;
            state.activeFilmboard.isActive = true;
            state.activeFilmboard.activeMovie = action.payload.id;
        },
        closeMovieAccordeon:(state) => {
            state.activeFilmboard.isActive = false;
        },
        togglePopup:(state) => {
            state.isPopup = !state.isPopup;
        },
        setGenre:(state, action) => {
            state.filters = action.payload;
        }
    }
})

export const { setMovieAccordeon, closeMovieAccordeon, togglePopup, setGenre } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;