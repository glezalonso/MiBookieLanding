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
        <Row className='my-2 mx-auto'>
        <Col md={8} className=' rounded mx-auto fs-4' >
        <SectionMatches />
        </Col>
        <Col md={3} className='bg-dark text-light rounded my-1 mx-auto fs-4' >
        <SectionLeagues />
        </Col>
        </Row>
       </Container>
        </>
  )
}

export default Home
