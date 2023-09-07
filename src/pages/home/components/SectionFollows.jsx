import React from 'react'
import { useAuthStore } from '../../../store/authorization'
import { useGetBookie } from '../../../features/users.features'
import { Alert, Table } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import { PersonCircle } from 'react-bootstrap-icons'

const SectionFollows = () => {
    const { id } = useAuthStore((state) => state.profile)
    const { data: user } = useGetBookie(id)
    const navigate = useNavigate()

    return (
        <>
            <section>
                <h5 className="mx-1">Contáctos</h5>
                {user?.follow?.length > 0 ? (
                    <div className="bg-white p-1 rounded mt-2">
                        <Table hoverable className="table-auto text-sm">
                            <Table.Body>
                                {user?.follow?.map((follow) => (
                                    <Table.Row
                                        key={follow?._id}
                                        className="hover:cursor-pointer"
                                        onClick={() =>
                                            navigate(
                                                `../profile/${follow?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className=" flex items-center gap-1 p-1">
                                            <PersonCircle color="dark" />
                                            {follow?.username}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning">No sigues a nadie aún!</Alert>
                )}
            </section>
        </>
    )
}

export default SectionFollows
