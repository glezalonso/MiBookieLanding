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
import SectionPlayersTennis from './components/SectionPlayersTennis'
import SectionTeams from './components/SectionTeams'

const Sports = () => {
  const { id } = useParams()
  const { data: sport, isLoading, isError } = useGetSport(id)
  const ID_TENNIS = '648f71eea4ba8860dfe38314'

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar los deportes!')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='my-2 mx-auto'>
          <Col md={10} className='rounded my-1 mx-auto' >
            <CardSport sport={sport} />
          </Col>
        </Row>
        <Row className='my-2 mx-auto'>
          <Col md={4} className='bg-dark text-white rounded mx-auto my-1 fs-6' >
         <SectionLeaguesBySport sport={sport} />
          </Col>
          <Col md={7} className='bg-dark text-white rounded mx-auto my-1 fs-6'>
          <SectionNextMatches sport={sport} />
          </Col>
        </Row>
        <Row className='my-2 mx-auto'>
        <Col md={4} className='bg-dark text-white rounded mx-auto my-1 fs-6'>
        <SectionSeasonsBySport sport={sport} />
        </Col >
         <Col style={sport?._id === ID_TENNIS ? { display: 'none' } : null } md={3} className='bg-dark text-white rounded mx-auto my-1 fs-6'>
          <SectionTeams style={sport?._id === ID_TENNIS ? { display: 'none' } : null } sport={sport} />
          </Col>
        <Col md={3} className='bg-dark text-white rounded mx-auto my-1 fs-6'>
          {sport?._id === ID_TENNIS
            ? <SectionPlayersTennis sport={sport} />
            : <SectionPlayersBySport sport={sport} />
           }
        </Col>
        </Row>
       </Container>
        </>
  )
}

export default Sports
