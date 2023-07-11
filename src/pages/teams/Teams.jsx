import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Toaster } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import SectionTeams from './components/SectionTeams'

const Teams = () => {
  return (
        <>
         <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='my-2 mx-auto'>
            <Col md={12} className='bg-dark text-white  rounded mx-auto fs-4'>
            <SectionTeams />
            </Col>
        </Row>
        </Container>
        </>
  )
}
export default Teams
