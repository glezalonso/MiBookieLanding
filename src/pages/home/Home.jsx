import React from 'react'
import NavBar from '../../ui/Navbar'
import SectionMatches from './components/SectionMatches'
import SectionLeagues from './components/SectionLeagues'
import { Container, Row, Col } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast'

const Home = () => {
  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
        <Col md={9} className='border rounded mx-auto p-2' >
        <h5 className="h7">Today Matches</h5>
        <SectionMatches />
        </Col>
        <Col md={3} className='border rounded mx-auto p-2'>
        <h5 className="h7">All Leagues</h5>
          <SectionLeagues />
        </Col>
        </Row>
       </Container>
        </>
  )
}

export default Home
