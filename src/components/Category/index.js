import {useContext} from 'react'
import {Card,Col,Row} from 'antd'
import {CategoryContext} from '../../context/CategoryContext'
const Category=({category})=>{
    const {setCategory}=useContext(CategoryContext)
    const handelClick=(value)=>{
        setCategory(value)
        window.scrollTo(0,600)
    }
    return(
        <div>
            <Row gutter={16} style={{marginBottom:'1rem'}}>

                {
                    category.map((items,index)=>(
                        <Col span={8} xs={24}  md={8} key={index} >
                        <Card title={items.name} bordered={false} style={{height:'200'}}>
                              <span style={{fontSize:'4rem',cursor:'pointer'}} onClick={()=>handelClick(items.find)} >{items.icon}</span> 
                             
                        </Card>
                    </Col>
                    ))
                }
              
            </Row>
        </div>
    )

}

export default Category;