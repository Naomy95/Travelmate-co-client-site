import React from 'react'
import { Button, ButtonGroup, Container,Dropdown,DropdownButton,Nav, Navbar } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import useAuth from '../../../hooks/useAuth'
import './Header.css'


export const Header = () => {
  const {user, logOut} = useAuth();
  // console.log(user.email)
    return (
        <>
            <Navbar sticky='top'collapseOnSelect expand="lg">
  <Container>
    <Navbar.Brand style={{color:'white'}} href="#home">Best Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end navbar">
      <Nav.Link className='navbar-link' as={HashLink} to='/home#home'>Home</Nav.Link>
      <Nav.Link className='navbar-link' as={HashLink} to='/home#offers'>Offers</Nav.Link>
      <Nav.Link className='navbar-link' as={HashLink} to='/details/1'>About Trips</Nav.Link>
      <Nav.Link className='navbar-link' as={HashLink} to='/contact'>Contact</Nav.Link>
      <Nav.Link className='navbar-link' as={HashLink} to='/managemyorders'>My Orders</Nav.Link>


      { user?.displayName && <div style={{backgroundColor:'#2f6f7c'}}>

<Dropdown>
  <Dropdown.Toggle style={{backgroundColor:'#2f6f7c' }} >
    Admin
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item><Nav.Link className="dropdown-item" as={HashLink}  to="/manageallorders">Manage All Orders</Nav.Link></Dropdown.Item>
    <Dropdown.Item><Nav.Link className="dropdown-item"  as={HashLink} to='/addNewService'>Add New Services</Nav.Link></Dropdown.Item>

  </Dropdown.Menu>
</Dropdown>
                            </div>
                        }
      
        {user?.email?
    <Button style={{backgroundColor:'black'}}  onClick={logOut} >Logout  </Button>:
    <Nav.Link className='navbar-link' as={HashLink} to ='/login'>Login</Nav.Link>
    }
      <Navbar.Text style={{color:'white'}}>
          Signed in as :{user?.displayName}
      </Navbar.Text>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </>
    )
}

export default Header;
