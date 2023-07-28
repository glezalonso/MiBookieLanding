import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetLeague } from '../../features/leagues.features'
import { toast } from 'react-hot-toast'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Container, Row, Col } from 'react-bootstrap'
import SectionLeague from './components/SectionLeague'
import SectionSeasons from './components/SectionSeasons'
import SectionMatches from './components/SectionMatches'
import {
    useGetMatchesOpenByLeague,
    useGetMatchesClosedByLeague,
} from '../../features/matches.features'

const Leagues = () => {
    const { id } = useParams()
    const [key, setKey] = useState('temporadas')
    const { data: league, isLoading, isError } = useGetLeague(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar la liga!')
    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 mx-auto ">
                    <Col xs={12} md={10} className=" mx-auto rounded-top  ">
                        <SectionLeague league={league} setKey={setKey} />
                    </Col>
                    <Col
                        xs={12}
                        md={10}
                        className=" bg-light text-dark my-3 rounded  mx-auto shadow-lg"
                    >
                        {key === 'temporadas' ? (
                            <SectionSeasons league={league} />
                        ) : null}
                        {key === 'proximos' ? (
                            <SectionMatches
                                league={league}
                                query={useGetMatchesOpenByLeague}
                            />
                        ) : null}
                        {key === 'ultimos' ? (
                            <SectionMatches
                                league={league}
                                query={useGetMatchesClosedByLeague}
                            />
                        ) : null}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Leagues
