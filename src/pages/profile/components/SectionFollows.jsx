import React from 'react'
import { Table, Alert } from 'flowbite-react'
import { useNavigate, Link } from 'react-router-dom'
import { useRemoveFollow } from '../../../features/users.features'
import { useAuthStore } from '../../../store/authorization'
import { PersonDash, PersonCircle } from 'react-bootstrap-icons'
import follow from '../../../icons/follow.svg'

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
        setKey('partidos')
        navigate(`../profile/${follower?._id}`)
    }

    return (
        <>
            <section className=" bg-white rounded-md p-2 my-3 shadow-lg border">
                <div className="flex  items-center gap-1 ml-2">
                    <img src={follow} alt="follow" className="h-5 w-5" />
                    <span className="">Contáctos</span>
                </div>
                {user?.follow?.length > 0 ? (
                    <div className=" bg-white rounded py-1 mb-3">
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
                                                className="mx-1 h-4 w-4"
                                            />
                                            {follower?.username}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            <div className="flex justify-end">
                                                <PersonDash
                                                    color="red"
                                                    className="hover:cursor-pointer h-6 w-6 mx-3"
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
