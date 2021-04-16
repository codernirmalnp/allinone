import {Carousel} from 'antd'

export const Crausal=({items})=>(
    <Carousel autoplay={true} speed={500} infinite={true}>
        {
           items.map((item,index)=>(
               <div key={index} >
                   <img src={item.url} style={{height:'450px',width:'100%'}} alt=""/>
               </div>

           ))
        }
    </Carousel>

);