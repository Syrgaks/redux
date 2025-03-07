import { configureStore } from "@reduxjs/toolkit"
import cartSlice from './cartSlice'


const myStore = configureStore({
    reducer: {
        flover: cartSlice
    }
})

export default myStore