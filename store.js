import { configureStore } from '@reduxjs/toolkit';
import loginUserReducer from './src/Redux/Slices/loginUserSlice'
import registerUserReducer from './src/Redux/Slices/registerUserSlice'

export const store = configureStore({
  reducer: {
    loginUser:loginUserReducer,
    register:registerUserReducer
  },
});
