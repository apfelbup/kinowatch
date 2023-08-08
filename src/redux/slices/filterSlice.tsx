import { createSlice } from "@reduxjs/toolkit";
import { getCurrentYear } from "../../utils/helpers/getCurrentYear/getCurrentYear";




const initialState = {
    year: `1960-${getCurrentYear()}`
}

export const filterSlice = createSlice({
    name:'filters',
    initialState,
    reducers: {
        setFilterYear: (state, action) => {
            state.year = action.payload;
        }
    }
})

export const { setFilterYear } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;