
import {CART_ADD_ITEM,CART_REMOVE_ITEM} from '../_constants/cartConstants'
import {food} from './../components/data'
export const addToCart=(productId,qty)=> (dispatch,getState)=>{
    const data=food.find(x=>x.id==productId)
    const {cart:{cartItems}}=getState()
    dispatch({type:CART_ADD_ITEM,payload:{
        id:data.id,
        name:data.title,
        image:data.image,
        price:data.price,
        url:data.url,
        countInStock:data.qty,
        qty
      
        
    }})
    localStorage.setItem('items',JSON.stringify(getState().cart.cartItems))

}

export const removeFromCart=(id)=>(dispatch,getState)=>{
   
    dispatch({type:CART_REMOVE_ITEM,payload:id})
    localStorage.setItem('items',JSON.stringify(getState().cart.cartItems))
}