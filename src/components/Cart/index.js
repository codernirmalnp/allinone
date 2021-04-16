import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Typography,Card,Row,Col,Select,Button} from 'antd'
import {addToCart,removeFromCart} from './../../_actions/cartActions'
const {Title}=Typography

const Cart=(props)=>{
    const productId=props.match.params.id
    const qty=props.location.search ? Number(props.location.search.split('=')[1]) : 1
    const cart=useSelector((state)=>state.cart)
    const {cartItems,error}=cart
    const dispatch=useDispatch()
    useEffect(()=>{
        if(productId){
            dispatch(addToCart(productId,qty))
        }
    },[])

    const removeFromCartHandeler=(id)=>{
        dispatch(removeFromCart(id))

    }
    
    return(
        <>
        {
            cartItems.length === 0 ?
            <Title level={2} style={{textAlign:'center'}}>
                Cart Item is Empty
            </Title>:
            (
            <Row span={24}>
                {
                    cartItems.map((items)=>(
                        <Col span={24} style={{marginTop:'1rem'}}  key={items.id}>
                     <Title level={2} style={{textAlign:'center'}}>
                           {items.name}
                     </Title>
                        <Card 
                        hoverable
                        cover={<img alt="" src={items.url} style={{height:200,width:200}}/>}
                        >
                     
                        <Select value={items.qty} onChange={value=> dispatch(addToCart(productId,value))} style={{marginTop:'1.5rem'}}>
                                      {[...Array(items.countInStock).keys()].map(
                                        (x) => (
                                          <Select.Option key={x + 1} value={x + 1}>
                                            {x + 1}
                                          </Select.Option>
                                        )
                                      )}
                                    </Select>
                        <Title level={3}>{`Rs ${items.price}/`}</Title>
                        <Button type="primary"  danger onClick={()=>removeFromCartHandeler(items.id)} block>Remove Cart</Button>
                        </Card>
                        </Col>))
                }
                <Title level={2}>

                Subtotal ( {cartItems.reduce((a, c) => a + c.qty, 0)} items)
                 :
                 RS. {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
                </Title>

            </Row>
            )
               

        
        }
        </>
    )

}
export default Cart;