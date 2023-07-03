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
  if (isError) return toast.error('Failed to load players!')
  return (
        <>
         <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
            <Row className='m-2 p-2 mx-auto'>
                <Col md={10} className='border rounded mx-auto p-2'>
                    <CardPlayer player={player} />
                </Col>
            </Row>
            <Row className='m-2 p-2 mx-auto'>
                <Col md={12} className='border rounded mx-auto p-2'>
                <h5 className="h7">Stats</h5>
                    <SectionStats />
                </Col>
            </Row>
            <Row className='m-2 p-2 mx-auto'>
                <Col md={6} className='border rounded mx-auto p-2'>
                <h5 className="h7">Matches</h5>
                <SectionMatches player={player} />
                </Col>
                <Col md={6} className='border rounded mx-auto p-2'>
                <h5 className="h7">Standings</h5>
                <SectionStandings player={player} />
                </Col>
            </Row>
        </Container>
        </>
  )
}

export default PlayerDetails
