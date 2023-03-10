import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
}
const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers:{
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
})

const { setLoading } = uiSlice.actions;
const uiReducer = uiSlice.reducer;

export {
    uiSlice,
    setLoading,
    uiReducer
}