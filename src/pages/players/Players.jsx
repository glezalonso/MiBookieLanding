import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import SectionPlayers from './components/SectionPlayers'

const Players = () => {
  return (
        <>
          <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
            <Col md={12} className='border rounded mx-auto p-4'>
            <h5 className="h7">All Players</h5>
            <SectionPlayers />
            </Col>
        </Row>
        </Container>
        </>
  )
}

export default Players
