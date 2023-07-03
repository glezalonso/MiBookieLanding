import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import CardTeam from './components/CardTeam'
import SectionStats from './components/SectionStats'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
  const { id } = useParams()
  const { data: team, isLoading, isError } = useGetTeam(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load teams!')
  return (
        <>
         <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
            <Col md={10} className='border rounded mx-auto p-2 fs-4'>
                <CardTeam team={team} />
            </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
            <Col md={12} className='border rounded mx-auto p-2 fs-4'>
                <h5 className="h7">Stats</h5>
                <SectionStats />

            </Col>
        </Row>
        <Row className='m-2 p-2 mx-auto'>
            <Col md={6} className='border rounded mx-auto p-2 fs-4'>
                <h5 className="h7">Matches</h5>
                <SectionMatches team={team} />
            </Col>
            <Col md={6} className='border rounded mx-auto p-2 fs-4'>
                <h5 className="h7">Roster</h5>
                <SectionRoster team={team} />
            </Col>
        </Row>

        </Container>
        </>
  )
}
export default TeamDetails
