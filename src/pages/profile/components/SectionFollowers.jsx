import React from 'react'
import { Table, Alert } from 'react-bootstrap'
import { PersonFillCheck, Person } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'

const SectionFollowers = ({ user }) => {
    const navigate = useNavigate()
    return (
        <>
            <section className=" bg-light rounded p-2 my-3">
                <div className="mx-2">
                    <PersonFillCheck size={'20px'} color="dark" />
                    <span className="mx-1">Seguidores</span>
                </div>
                {user?.followers?.length > 0 ? (
                    <div className="section-tables bg-light border-top rounded p-1 my-3">
                        <Table
                            responsive
                            borderless
                            size="sm"
                            variant="light my-1"
                            hover
                        >
                            <tbody>
                                {user?.followers?.map((follower) => (
                                    <tr
                                        onClick={() =>
                                            navigate(
                                                `../profile/${follower?._id}`
                                            )
                                        }
                                        key={follower?._id}
                                    >
                                        <td>
                                            <Person
                                                color="dark"
                                                className="mx-1"
                                            />
                                            {follower?.username}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
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
