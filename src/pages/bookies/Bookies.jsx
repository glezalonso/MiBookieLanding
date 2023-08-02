import React from 'react'
import { Badge, Col, Container, Row } from 'react-bootstrap'
import NavBar from '../../ui/Navbar'
import { useGetBookies } from '../../features/users.features'
import Loading from '../../ui/Loading'
import { toast } from 'react-hot-toast'
import SectionBookies from './SectionBookies'
import { useAuthStore } from '../../store/authorization'

const Bookies = () => {
    const { id } = useAuthStore((state) => state.profile)
    const { data, isLoading, isError } = useGetBookies()

    const users = data?.filter((user) => user?._id !== id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los Bookies!')

    return (
        <>
            <NavBar />
            <Container fluid>
                <Row className="my-2 ">
                    <Col xs={12} md={8} xl={7} className="mx-auto my-1">
                        <h5>
                            Bookies
                            <Badge bg="dark" className="mx-1">
                                {users?.length}
                            </Badge>
                        </h5>
                        {users?.map((user) => (
                            <SectionBookies key={user?._id} user={user} />
                        ))}
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Bookies
