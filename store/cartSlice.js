import { createSlice } from '@reduxjs/toolkit';



const cartSlice = createSlice({
    name: 'carts',
    initialState: {
        carts : [{
            id: 150,
            title: 'Product Title',
            price: 520,
            quantity: 3,
    },
    {
            id: 110,
            title: 'Product Title',
            price: 230,
            quantity: 1,
    }],
    isOpen: false,
    },

    reducers: {
        
        addToCart: (state, action) => {
            const item = action.payload;
            const itemIndex = state.carts.findIndex(product => product.id === item.id);

            if(itemIndex < 0){
                state.carts.push({...item, quantity: 1});
                return
            }

            state.carts[itemIndex].quantity += 1
            return
        },
        removeFromCart: (state, action) => {
            const itemId = action.payload;
            state.carts.map(item => { 
                if(itemId === item.id){
                    item.quantity--
                }
            })
        },
        deleteFromCart: (state, action) => {
            const itemId = action.payload;
            const itemIndex = state.carts.findIndex(item => item.id === itemId);
            state.carts.splice(itemIndex, 1);
            
        },
        cartOpenHandler: state => {
            if(state.isOpen === true){
                state.isOpen = false;
                return
            } 
            state.isOpen = true;
        },
    }
});


export const  { addToCart, removeFromCart, deleteFromCart, cartOpenHandler } = cartSlice.actions;

export default cartSlice.reducer;