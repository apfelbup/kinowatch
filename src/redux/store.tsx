import { configureStore } from "@reduxjs/toolkit";
import { streamberryAPI } from "../services/streamberryAPI";
import { filtersReducer } from "./slices/filterSlice";
import { movieReducer } from "./slices/movieSlice";
import storage from "redux-persist/lib/storage";
import {
    persistStore,
    persistReducer
} from 'redux-persist';

const persistConfig = {
    key:'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, movieReducer);

export const store = configureStore({
    reducer:{
        [streamberryAPI.reducerPath]: streamberryAPI.reducer,
        filtersReducer,
        movieReducer:persistedReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(streamberryAPI.middleware),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch