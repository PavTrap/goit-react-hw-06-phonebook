import { createSlice } from "@reduxjs/toolkit";

export const sliceFilter = createSlice({
	name: 'filter',
	initialState: '',
	reducers: {
		setFilter(state, action){
			return (state = action.payload)
		}
	}
}) 

export const { setFilter } = sliceFilter.actions;

