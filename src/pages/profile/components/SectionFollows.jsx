import React from 'react'
import { Table, Alert } from 'flowbite-react'
import { useNavigate, Link } from 'react-router-dom'
import { useRemoveFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'
import { PersonDash, PeopleFill, PersonCircle } from 'react-bootstrap-icons'

const SectionFollows = ({ user, setKey }) => {
    const userId = useAuthStore((state) => state.profile.id)
    const removeFollow = useRemoveFollow()
    const navigate = useNavigate()

    const handleRemove = (follow, follower) => {
        const sure = confirm('Esta seguro que quiere dejar de seguir?')
        if (sure) {
            return removeFollow.mutate({ id: follow, body: { follower } })
        }
    }

    const handleNavigate = (follower) => {
        setKey('proximos')
        navigate(`../profile/${follower?._id}`)
    }

    return (
        <>
            <section className=" bg-white rounded p-2 my-3">
                <div className="flex mx-2">
                    <PeopleFill size={'20px'} color="dark" />
                    <span className="mx-1">Contáctos</span>
                </div>
                {user?.follow?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Body>
                                {user?.follow?.map((follower) => (
                                    <Table.Row key={follower?._id}>
                                        <Table.Cell
                                            className="flex p-1 hover:cursor-pointer"
                                            onClick={() =>
                                                handleNavigate(follower)
                                            }
                                        >
                                            <PersonCircle
                                                color="dark"
                                                className="mx-1"
                                            />
                                            {follower?.username}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            <div className="flex justify-end">
                                                <PersonDash
                                                    color="red"
                                                    className="hover:cursor-pointer h-5 w-5"
                                                    onClick={() =>
                                                        handleRemove(
                                                            follower?._id,
                                                            userId
                                                        )
                                                    }
                                                />
                                            </div>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning" className="my-2">
                        No estas siguiendo a ningun bookie. Busca bookie y sigue
                        sus pronósticos{' '}
                        <Link className="font-bold underline" to={'../bookies'}>
                            Buscar
                        </Link>
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionFollows
