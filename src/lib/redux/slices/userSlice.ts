import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        error: false,
        isFetching: false
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        }
    }
})

export default userSlice.reducer;
export const { login } = userSlice.actions