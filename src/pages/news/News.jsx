import React, { useState } from 'react'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Alert, Form } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useGetNews } from '../../features/news.features'
import { useGetSports } from '../../features/sports.features'
import CardNew from './components/CardNew'
import NavBar from '../../ui/Navbar'

const News = () => {
    const { data: news, isLoading, isError } = useGetNews()
    const { data: sports } = useGetSports()
    const [filter, setFilter] = useState('')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las notcias!')

    const filterNews = news?.filter((content) => {
        if (!filter) return content
        return content?.league?.sport
            ?.toLowerCase()
            .includes(filter.toLowerCase())
    })

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2">
                    <Col xs={12} md={8} className=" mx-auto ">
                        <div className="d-flex my-1 justify-content-between ">
                            <h5 className="my-2 mx-1">Noticias</h5>

                            <Form.Select
                                style={{ fontSize: '15px' }}
                                className="rounded w-50"
                                onChange={(e) => setFilter(e.target.value)}
                            >
                                <option value="6">Todos</option>

                                {sports?.map((sport) => (
                                    <option key={sport?._id} value={sport?._id}>
                                        {sport?.sport}
                                    </option>
                                ))}
                            </Form.Select>
                        </div>
                        {filterNews?.length > 0 ? (
                            filterNews?.map((content) => (
                                <CardNew key={content?._id} content={content} />
                            ))
                        ) : (
                            <Alert variant="warning">
                                No hay noticias para mostrar!
                            </Alert>
                        )}
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default News
