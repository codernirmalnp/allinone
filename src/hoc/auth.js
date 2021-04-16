import React,{useEffect} from 'react'
import {auth} from './../_actions/user_actions'
import {useDispatch, useSelector} from 'react-redux'
const Auth=(SpecificComponent,option,adminRoute=null)=>{
    const  AuthenticationCheck=(props)=>{
        let user=useSelector(state=>state.user)
        const dispatch=useDispatch()
        useEffect(()=>{
            dispatch(auth()).then((response)=>{
                if(!response.payload.isAuth){
                    if(option)
                    props.history.push('/')

                }   
                else{
                    console.log(adminRoute && response.payload.isAdmin)
                 if(adminRoute && response.payload.isAdmin)
                   props.history.push('/admin')
                 
                       
                    
                 else
                    if(option===false)
                        props.history.push('/')
                        
                    
                }
            })
        },[props.history,dispatch])
       return (
           <SpecificComponent {...props} user={user}/>
       )
    }
    return AuthenticationCheck;
}
export default Auth;