import React from 'react'
import {Crausal} from './../Carausal'
import {slider,category} from './../data'
import Category from '../Category'
import Food from '../Food'


const Home=()=>{

 


    return(
        <>
          <Category category={category} />
          <Crausal  items={slider}/>
          <Food/>
        </>
    )
}
export default Home;