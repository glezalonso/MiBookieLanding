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
        <Container fluid className='' >
        <Row className='my-2 mx-auto'>
        <Col md={8} className='bg-dark rounded mx-auto m-1 fs-4' >
        <SectionMatches />
        </Col>
        <Col md={3} className='bg-dark rounded mx-auto m-1 fs-4' >
        <SectionLeagues />
        </Col>
        </Row>
       </Container>
        </>
  )
}

export default Home
