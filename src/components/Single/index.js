 import {useState} from 'react'
 import {useHistory} from 'react-router-dom'
 import {food} from './../data'
 import {Col,Select,Button,Card,Typography,Row} from 'antd'
 
 const {Title}=Typography
 const {Meta}=Card
 const Single=(props)=>{
    const history=useHistory();
    const [qty,setQty]=useState(1)
     const id=Number(props.match.params.id);
     const items=food.find(x=>x.id===id)  
     const handelChange=(value)=>{
        setQty(value)
     
    }
    const AddToCartHandeler=(value)=>{
           
            history.push(`/cart/${value.id}?qty=${qty}`)
    }
    return(
          <Row  span={24}>
          <Col  span={24} key={items.id}>
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
                </Row>
    
    )

}
export default Single;