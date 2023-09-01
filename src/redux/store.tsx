import { configureStore } from "@reduxjs/toolkit";
import { streamberryAPI } from "../services/streamberryAPI";
import { movieReducer } from "./slices/movieSlice";



export const store = configureStore({
    reducer:{
        [streamberryAPI.reducerPath]: streamberryAPI.reducer,
        movieReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(streamberryAPI.middleware),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch