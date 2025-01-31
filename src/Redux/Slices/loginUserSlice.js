import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiURL = process.env.REACT_APP_API_URL_BASE

const initialState = {
    loading: false,
    userData: null,
    error: null
}

export const fetchUser = createAsyncThunk('users/fetchUser', async (data) => {
    try {
        const response = await axios.post(
            `http://localhost:5000/v1/api/login/login-user`, // Use the `apiURL` variable
            data,
            { withCredentials: true }
        )
        
        // Only return the data from the response, not the headers
        return response.data
    } catch (error) {
        return error.response || { message: "Something went wrong" }
    }
})

export const LoginUserSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        removeError: (state) => {
            state.error = null
        },
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true
                state.error = null
            })
            .addCase(fetchUser.fulfilled, (state, action) => {
                state.userData = action.payload
                state.loading = false
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload || "Invalid Credentials!"
            })
    }
})

export const { removeError } = LoginUserSlice.actions

export default LoginUserSlice.reducer
