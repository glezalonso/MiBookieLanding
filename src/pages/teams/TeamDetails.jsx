import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import Loading from '../../ui/Loading'
import { useGetTeam } from '../../features/teams.features'
import NavBar from '../../ui/Navbar'
import CardTeam from './components/CardTeam'
import SectionStandings from './components/SectionStandings'
import SectionMatches from './components/SectionMatches'
import SectionRoster from './components/SectionRoster'

const TeamDetails = () => {
    const { id } = useParams()

    const [key, setKey] = useState('plantilla')
    const { data: team, isLoading, isError } = useGetTeam(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los equipos!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col xs={12} md={10} className=" mx-auto rounded-top  ">
                        <CardTeam team={team} setKey={setKey} />
                    </Col>

                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto shadow-lg"
                    >
                        {key === 'posiciones' ? (
                            <SectionStandings team={team} />
                        ) : null}
                        {key === 'plantilla' ? (
                            <SectionRoster team={team} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                team={team}
                                open={true}
                                title={'Próximos Partidos'}
                            />
                        ) : null}
                        {key === 'pasados' ? (
                            <SectionMatches
                                team={team}
                                open={false}
                                title={'Últimos Partidos'}
                            />
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default TeamDetails
