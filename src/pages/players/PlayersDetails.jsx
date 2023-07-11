import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import CardPlayer from './components/CardPlayer'
import { useGetPlayer } from '../../features/players.features'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionStandings from './components/SectionStandings'

const PlayerDetails = () => {
  const { id } = useParams()
  const { data: player, isLoading, isError } = useGetPlayer(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar los jugadores!')
  return (
        <>
         <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
            <Row className='my-2 mx-auto'>
                <Col md={10} className=' rounded mx-auto fs-4'>
                    <CardPlayer player={player} />
                </Col>
            </Row>
            <Row className='m-2 mx-auto'>
                <Col md={11} className='bg-dark text-white rounded mx-auto fs-6'>
                    <SectionStats />
                </Col>
            </Row>
            <Row className='m-2 mx-auto'>
                <Col md={5} className='bg-dark text-white rounded mx-auto fs-6'>
                <SectionMatches player={player} />
                </Col>
                <Col md={6} className='bg-dark text-white rounded mx-auto fs-4'>
                <SectionStandings player={player} />
                </Col>
            </Row>
        </Container>
        </>
  )
}

export default PlayerDetails
