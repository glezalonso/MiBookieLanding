import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
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
            <Container fluid>
                <Row className="my-2  mx-auto">
                    <Col xs={12} md={10} className="mx-auto my-1 ">
                        <CardRound round={round} />
                    </Col>
                </Row>
                <Row className="my-2 mx-auto">
                    <Col
                        xs={12}
                        md={10}
                        className=" text-dark my-3 rounded  mx-auto "
                    >
                        <SectionMatches round={round} />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Rounds
