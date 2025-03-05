import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'flover',
    initialState: {
        cartItem: []
    },
    reducers: {
        addCart: ( state, action ) => {
            const findFlover = state.cartItem.find( (el) => el.id == action.payload.id )
            if( !findFlover ){
                state.cartItem.push( action.payload)
            }
        }
    }
})

export const { addCart} = cartSlice.actions
export default cartSlice.reducer

