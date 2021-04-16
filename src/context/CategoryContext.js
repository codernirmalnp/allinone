import {createContext,useState} from 'react'
const CategoryContext=createContext();
const {Provider}=CategoryContext
const CategoryProvider=({children})=>{
    const [category,setCategory]=useState("N")
   
    const putCategory=(name)=>{
        setCategory(name)
    }
    return(
        <Provider value={{cat:category,setCategory:name=>putCategory(name)}}>
            {children}
        </Provider>
    )
    
}
export  {CategoryContext,CategoryProvider}
