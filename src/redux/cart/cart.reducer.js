import { CartActionTypes } from '../../redux/cart/cart.types';
import { addItemsToCart, removeItemFromCart } from './cart.utils';

const INITIATL_STATE={
    hidden:true,
    cartItems:[]
}

const CartReducer= (state=INITIATL_STATE,action) => {
    switch (action.type){
        case CartActionTypes.TOGGLE_CART_VIEW:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemsToCart(state.cartItems,action.payload)
            }    
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
            }    
        case CartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItemFromCart(state.cartItems,action.payload)
            }    
        default:
            return state;    
    }     
}

export default CartReducer;