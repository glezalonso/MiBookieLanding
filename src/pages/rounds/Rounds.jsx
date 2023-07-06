import React from 'react'
import { useParams } from 'react-router-dom'
import { Toaster, toast } from 'react-hot-toast'
import Loading from '../../ui/Loading'
import NavBar from '../../ui/Navbar'
import { Container, Row, Col } from 'react-bootstrap'
import { useGetRound } from '../../features/rounds.features'
import CardRound from './components/CardRound'
import SectionMatches from './components/SectionMatches'

const Rounds = () => {
  const { id } = useParams()
  const { data: round, isLoading, isError } = useGetRound(id)

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load rounds')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='m-2 p-2 mx-auto'>
          <Col md={10} className='border rounded mx-auto p-2 fs-4' >
            <CardRound round={round} />
          </Col>
        </Row>
          <Row className='m-2 p-2 fs-4 mx-auto'>
          <Col md={12} className='border rounded mx-auto p-2 fs-4' >
             <SectionMatches round={round} />
          </Col>
        </Row>

       </Container>
        </>
  )
}
export default Rounds
