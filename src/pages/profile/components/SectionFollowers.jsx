import React from 'react'
import { Table, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionFollowers = ({ user }) => {
    const navigate = useNavigate()
    return (
        <>
            <section className="my-3">
                <h5>Seguidores</h5>
                {user?.followers?.length > 0 ? (
                    <div className="section-tables bg-light rounded p-1 my-3">
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
                                        <td>{follower?.username}</td>
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
