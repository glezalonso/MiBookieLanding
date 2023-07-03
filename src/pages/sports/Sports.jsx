import React from 'react'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { useGetSport } from '../../features/sports.features'
import CardSport from './components/CardSport'
import SectionLeaguesBySport from './components/SectionLeaguesBySport'
import SectionNextMatches from './components/SectionNextMatches'
import SectionPlayersBySport from './components/SectionPlayersBySport'
import SectionSeasonsBySport from './components/SectionSeasonsBySport'

const Sports = () => {
  const { id } = useParams()
  const { data: sport, isLoading, isError } = useGetSport(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load sports')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
          <Col md={10} className='border rounded mx-auto p-2' >
            <CardSport sport={sport} />
          </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
          <Col md={4} className='border rounded mx-auto p-2' >
          <h5 className="h7">{sport?.sport} Leagues</h5>
         <SectionLeaguesBySport sport={sport} />
          </Col>
          <Col md={8} className='border rounded mx-auto p-2'>
          <h5 className="h7">{sport?.sport} Matches</h5>
          <SectionNextMatches sport={sport} />
          </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
        <Col md={4} className='border rounded mx-auto p-2'>
        <h5 className="h7">{sport?.sport} Seasons</h5>
        <SectionSeasonsBySport sport={sport} />
        </Col >
        <Col md={8} className='border rounded mx-auto p-2'>
        <h5 className="h7">{sport?.sport} Players</h5>
        <SectionPlayersBySport sport={sport} />
        </Col>
        </Row>
       </Container>
        </>
  )
}

export default Sports
