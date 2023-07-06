import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { Toaster, toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'

const Leagues = () => {
  const { id } = useParams()
  const { data: league, isLoading, isError } = useGetLeague(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load Leagues')
  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid>
          <Row className='m-2 p-2 mx-auto '>
            <Col className='border rounded mx-auto p-2 fs-4'>
              <SectionLeague league={league} />
            </Col>
          </Row>
          <Row className='m-2 p-2 mx-auto'>
            <Col md={4} className='border rounded mx-auto p-3 fs-4'>
            <SectionSeasons league={league} />
            </Col>
            <Col md={8} className='border rounded mx-auto p-3 fs-4' >
            <SectionMatches league={league} />
            </Col>
          </Row>
        </Container>

        </>
  )
}

export default Leagues
