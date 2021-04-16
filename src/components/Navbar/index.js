import React,{useState} from 'react';
import {useSelector} from 'react-redux'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElement';
import {Link} from 'react-router-dom'
import logo from './../../images/food.png'
import {Drawer,Menu,Button,Badge} from 'antd'


const Navbar = () => {
    const [visible,setVisible]=useState(false)
    const cart=useSelector(state=>state.cart)
    const {cartItems}=cart
    const showDrawer=()=>{
        setVisible(true)
    }
    const onClose=()=>{
        setVisible(false)
    }
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt='logo' />
        </NavLink>
        <Bars  onClick={showDrawer}/>
        <NavMenu>
          <NavLink to='/cart' activeStyle={{activeStyle:true}}>
          <Badge count={cartItems.length} style={{marginRight:'10px',border:'black'}}/>
             Cart
          </NavLink>
          <NavLink to='/available' activeStyle={{activeStyle:true}}>
           Available
          </NavLink>
        
         
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
        </NavBtn>
      </Nav>

      <Drawer title="Khaja.com" placement="right" closable={true} onClose={onClose} visible={visible}>
         <Menu defaultSelectedKeys={['1']} mode="vertical">
         <Menu.Item key="1">
                    <span>Home</span>
                     <Link to="/" />
          </Menu.Item>   
         <Menu.Item key="2">
                    <span>Cart</span>
                     <Link to="/cart" />
          </Menu.Item>                   
         <Menu.Item key="3">
            <span>Available</span>
            <Link to="/available" />
         </Menu.Item>
         <Menu.Item key="4">
            <span>Contact</span>
            <Link to="/contact" />
         </Menu.Item>
         </Menu>
         
         <Button type="primary"   style={{marginTop:'1rem'}} block ><Link to='/signin'>SignIn</Link></Button>
         <Button type="primary"  block style={{marginTop:'1rem'}}><Link to='/signup'>SignUp</Link></Button>
         
      </Drawer>
    </>
  );
};

export default Navbar;