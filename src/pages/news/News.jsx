import React from 'react'
import NavBar from '../../ui/Navbar'
import Loading from '../../ui/Loading'
import { Container, Row, Col, Card, Alert } from 'react-bootstrap'
import { Toaster, toast } from 'react-hot-toast'
import { useGetNews } from '../../features/news.features'

const News = () => {
  const { data: news, isLoading, isError } = useGetNews()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches!')
  return (
        <>
         <NavBar />
        <Toaster position="top-center" reverseOrder={false} />
        <Container fluid >
        <Row className='my-2 p-2 mx-auto'>
        <Col md={9} className='border rounded mx-auto p-1 fs-4' >
        <section>
            {news?.length > 0
              ? news?.map(content => (
                <Card key={content?._id} className='my-2'>
                    <Card.Header>
                        <Card.Title>{content?.title}</Card.Title>
                        <Card.Subtitle>{content?.sport?.sport}</Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>{content?.date?.split('T', 3).reverse().join(' ')}</Card.Text>
                        <Card.Text>{content?.content}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Text>Posted by: {content?.author}</Card.Text>
                    </Card.Footer>

                </Card>
              ))
              : <Alert variant='warning'>There are no news to show!</Alert>}
        </section>
        </Col>
        </Row>
        </Container>
        </>
  )
}
export default News
