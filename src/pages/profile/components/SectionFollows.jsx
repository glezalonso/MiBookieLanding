import React from 'react'
import { Table, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useRemoveFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'
import { PersonDash } from 'react-bootstrap-icons'

const SectionFollows = ({ user }) => {
    const userId = useAuthStore((state) => state.profile.id)
    const removeFollow = useRemoveFollow()
    const navigate = useNavigate()

    const handleRemove = (follow, follower) => {
        const sure = confirm('Esta seguro que quiere dejar de seguir?')
        if (sure) {
            return removeFollow.mutate({ id: follow, body: { follower } })
        }
    }
    return (
        <>
            <section className="my-3">
                <h5>Contáctos</h5>
                {user?.follow?.length > 0 ? (
                    <div className="section-tables bg-light rounded p-1 my-3">
                        <Table
                            responsive
                            borderless
                            size="sm"
                            variant="light my-1"
                            hover
                        >
                            <tbody>
                                {user?.follow?.map((follower) => (
                                    <tr
                                        onClick={() =>
                                            navigate(
                                                `../profile/${follower?._id}`
                                            )
                                        }
                                        key={follower?._id}
                                    >
                                        <td>{follower?.username}</td>
                                        <td>
                                            <div className="d-flex justify-content-end">
                                                <PersonDash
                                                    size={'20px'}
                                                    color="red"
                                                    onClick={() =>
                                                        handleRemove(
                                                            follower?._id,
                                                            userId
                                                        )
                                                    }
                                                />
                                            </div>
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

export default SectionFollows
