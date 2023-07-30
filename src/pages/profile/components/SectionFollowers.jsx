import React from 'react'
import { Table, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionFollowers = ({ user }) => {
    return (
        <>
            <section>
                {user?.followers?.length > 0 ? (
                    <div className="section-tables bg-light rounded p-1 my-3">
                        <Table
                            responsive
                            borderless
                            size="sm"
                            variant="light my-1"
                        >
                            <tbody>
                                {user?.followers?.map((follower) => (
                                    <tr key={follower?._id}>
                                        <td>{follower?.username?.username}</td>
                                        <td>
                                            <Link
                                                className="btn btn-dark btn-sm"
                                                to={`../profile/${follower?.username?._id}`}
                                            >
                                                Ir al perfil
                                            </Link>
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
