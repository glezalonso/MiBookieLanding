import React, { useState } from 'react'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Alert, FormControl } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useGetNews } from '../../features/news.features'
import CardNew from './components/CardNew'
const News = () => {
    const { data: news, isLoading, isError } = useGetNews()
    const [filter, setFilter] = useState('')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Failed to load matches!')

    const filterNews = news?.filter((content) => {
        if (!filter) return content
        return (
            content?.sport?.sport
                ?.toLowerCase()
                .includes(filter.toLowerCase()) ||
            content?.title?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <Container fluid>
                <Row className="my-2 mx-auto">
                    <Col xs={12} md={10} className=" rounded mx-auto my-1 fs-4">
                        <h5 className="h7">Noticias</h5>
                        <div className="m-2 p-2">
                            <FormControl
                                name="new"
                                placeholder="Deporte, equipo..."
                                onChange={(e) => setFilter(e.target.value)}
                            />
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
