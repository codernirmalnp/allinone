import {useContext,useState} from 'react'
import {CategoryContext} from './../../context/CategoryContext'
import {Card,Col,Row,Typography,Select,Button} from 'antd'
import {useHistory} from 'react-router-dom'
import {food} from './../data'
const {Meta}=Card
const {Title}=Typography


 const Food=()=>{
     const history=useHistory()
    const [qty,setQty]=useState(1)
    const {cat}=useContext(CategoryContext)
    const handelChange=(value)=>{
        setQty(value)
     
    }
    const AddToCartHandeler=(value)=>{
           
            history.push(`/cart/${value.id}?qty=${qty}`)
    }

    return(
        <>
      <Title level={2} >{cat === 'N' ? "Nepali Foods":''}</Title>
      <Title level={2}>{cat === 'I' ? "Indain Foods ":''}</Title>
      <Title level={2}>{cat === 'C' ? "Chinease Foods ":''}</Title>
        <Row gutter={16} style={{marginTop:'2rem'}}>
        
    
        {
            food.filter(items=>items.category===cat).map((items)=>(
                <Col  md={6}  sm={12}  xs={24} key={items.id}>
                <Card 
                hoverable
                style={{width:300,marginTop:'1rem'}}
                cover={<img alt="" src={items.url} style={{height:200}}/>}
                >
                <Meta title={items.title} description={items.description.substring(0,100)}/>
                <Select value={qty} onChange={handelChange} style={{marginTop:'1.5rem'}}>
                              {[...Array(items.qty).keys()].map(
                                (x) => (
                                  <Select.Option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </Select.Option>
                                )
                              )}
                            </Select>
                <Title level={3}>{`Rs ${items.price}/`}</Title>
                <Button type="primary" onClick={()=>AddToCartHandeler(items)} block>AddTo Cart</Button>
                </Card>
                </Col>
            ))
        }
       
        </Row>
        </>
    )
}
export default Food;