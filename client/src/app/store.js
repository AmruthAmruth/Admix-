import { configureStore } from "@reduxjs/toolkit";
import themeReducer from '../features/themeSlice.js'
import userReducer from '../features/userSlice.js'
const store = configureStore({
    reducer:{
        theme:themeReducer,
        user:userReducer
    }
})

export default store;