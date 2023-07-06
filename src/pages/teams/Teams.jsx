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
        <Row className='m-2 p-2 mx-auto'>
            <Col md={12} className='border rounded mx-auto p-4 fs-4'>
            <SectionTeams />
            </Col>
        </Row>
        </Container>
        </>
  )
}
export default Teams
