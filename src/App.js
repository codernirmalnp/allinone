import React from 'react'
import Navbar from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
import Home from './components/views/home'
import Signin from './components/views/signin'
import Signup from './components/views/signup'
import Cart from './components/Cart'
import {Layout} from 'antd'
import {CategoryProvider} from './context/CategoryContext'
import ListItem from './components/Available'

const {Content} =Layout
const App=()=>{
  
  
  return (
 
    <CategoryProvider>  
   <Navbar/>
   <Layout>
     <Content style={{marginTop:'4rem',padding:'2rem',height:'100vh'}}>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/cart/:id?' component={Cart}/>
        <Route path='/signin'  component={Signin}/>
        <Route path='/signup'  component={Signup}/>
        <Route path='/available' component={ListItem}/>
      </Switch>
     </Content>
  
   </Layout>
   </CategoryProvider>
  )
}
export default App;