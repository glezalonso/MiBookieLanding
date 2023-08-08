import React from 'react'
import { Table, Alert } from 'flowbite-react'
import { PersonFillCheck, Person } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const SectionFollowers = ({ user, setKey }) => {
    const navigate = useNavigate()

    const handleNavigate = (follower) => {
        setKey('proximos')
        navigate(`../profile/${follower?._id}`)
    }
    return (
        <>
            <section className=" bg-white rounded p-2 my-3">
                <div className="flex mx-2">
                    <PersonFillCheck size={'20px'} color="dark" />
                    <span className="mx-1">Seguidores</span>
                </div>
                {user?.followers?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Body className="divide-y">
                                {user?.follow?.map((follower) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        onClick={() => handleNavigate(follower)}
                                        key={follower?._id}
                                    >
                                        <Table.Cell className=" flex p-1">
                                            <Person
                                                color="dark"
                                                className="mx-1"
                                            />
                                            {follower?.username}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning my-2">
                        No cuentas con seguidores
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionFollowers
