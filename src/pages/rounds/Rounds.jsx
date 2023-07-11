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
  if (isError) return toast.error('Hubo un error al cargar las rondas')

  return (
        <>
        <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='my-2  mx-auto'>
          <Col md={10} className='rounded mx-auto  fs-4' >
            <CardRound round={round} />
          </Col>
        </Row>
          <Row className='my-2 mx-auto'>
          <Col md={11} className='bg-dark text-light rounded mx-auto  fs-4' >
             <SectionMatches round={round} />
          </Col>
        </Row>

       </Container>
        </>
  )
}
export default Rounds
