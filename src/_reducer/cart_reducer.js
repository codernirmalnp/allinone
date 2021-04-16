import {CART_ADD_ITEM,CART_ADD_ITEM_FAIL,CART_EMPTY,CART_REMOVE_ITEM} from './../_constants/cartConstants'
const items=JSON.parse(localStorage.getItem('items'))

 const cartReducer=(state={cartItems:[...items],error:''},action)=>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item=action.payload
            const existItem=state.cartItems.find((x)=>x.id===item.id)
            if(existItem){
                return {
                    ...state,
                    error:'',
                    cartItems:state.cartItems.map((x)=>x.id===existItem.id ? item:x)
                }
            }
            else{
                return {...state,error:'',cartItems:[...state.cartItems,item]}
            }

        case CART_REMOVE_ITEM:
            return {...state,error:'',cartItems:state.cartItems.filter((x)=>x.id !== action.payload )}

        case CART_ADD_ITEM_FAIL:
            return { ...state, error: action.payload };

        case CART_EMPTY:
            return {...state,error:'',cartItems:[]}

        default:
            return state;
    }
}
export default cartReducer;