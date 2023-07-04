import React from 'react'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import CardMatch from '../home/components/CardMatch'
import SectionLineUps from './components/SectionLineUps'
import { useGetMatch } from '../../features/matches.features'

const Matches = () => {
  const { id } = useParams()
  const { data: match, isLoading, isError } = useGetMatch(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
          <Col className='border rounded mx-auto p-2 fs-4' >
            <CardMatch match={match} />
          </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
            <SectionLineUps match={match} />
        </Row>
       </Container>
        </>
  )
}

export default Matches
