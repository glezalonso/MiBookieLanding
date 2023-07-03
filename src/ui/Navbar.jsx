import React, { useState } from 'react'
import { Container, Navbar, NavDropdown, Nav, Button } from 'react-bootstrap'
import Login from '../pages/home/components/Login'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
import Register from '../pages/home/components/Register'

function NavBar () {
  const username = useAuthStore(state => state.profile)
  const logOut = useAuthStore(state => state.logOut)
  const { data: sports } = useGetSports()
  const navigate = useNavigate()

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const [showRegister, setShowRegister] = useState(false)

  const handleCloseRegister = () => setShowRegister(false)

  const handleRegister = () => {
    setShowRegister(true)
    handleClose()
  }

  const handleLogOut = () => {
    logOut()
    navigate('/')
  }
  return (
    <>
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container >
      <Navbar.Brand >Mi Bookie</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link to={'../'} className='nav-link'>Home</Link>
          <Link to={'../teams'} className='nav-link'>Teams</Link>
          <Link to={'../players'} className='nav-link'>Players</Link>
          <Link to={'../news'} className='nav-link'>News</Link>
          <NavDropdown title="Sport" id="basic-nav-dropdown">
            {sports?.map(sport => (
              <Link to={`../sports/${sport?._id}`} key={sport?._id} className='dropdown-item'>{sport?.sport}</Link>

            ))}

          </NavDropdown>

        </Nav>
        {(username)
          ? <Navbar.Text>
            Signed in as: <Link>{username}</Link>
           <Button className='btn btn-warning mx-1' onClick={() => handleLogOut()}>Log out</Button>
          </Navbar.Text>
          : <Button className='btn btn-warning mx-1' onClick={() => handleShow()} >Log in</Button>}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Register show={showRegister} handleClose={handleCloseRegister}/>
  <Login show={show} handleClose={handleClose} handleRegister={handleRegister}/>

  </>
  )
}

export default NavBar
