import React from 'react'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { useGetSeason } from '../../features/seasons.features'
import CardSeason from './components/CardSeason'
import SectionRounds from './components/SectionRounds'
import SectionStandings from './components/SectionStandings'

const Seasons = () => {
  const { id } = useParams()
  const { data: season, isLoading, isError } = useGetSeason(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar las temporadas')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
          <Col md={10} className='border rounded mx-auto p-2 ' >
           <CardSeason season={season} />
          </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
          <Col md={6} className='border rounded mx-auto p-2 fs-4' >
          <SectionRounds season={season} />
          </Col>
          <Col md={6} className='border rounded mx-auto p-2 fs-4' >
          <SectionStandings season={season} />
          </Col>
        </Row>

       </Container>
        </>
  )
}
export default Seasons
