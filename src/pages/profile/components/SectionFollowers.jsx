import React from 'react'
import { Table, Alert } from 'flowbite-react'
import { Person } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import followers from '../../../icons/followers.svg'

const SectionFollowers = ({ user, setKey }) => {
    const navigate = useNavigate()

    const handleNavigate = (follower) => {
        setKey('partidos')
        navigate(`../profile/${follower?._id}`)
    }
    return (
        <>
            <section className=" bg-white rounded-md p-2 my-3 shadow-lg border">
                <div className="flex ml-2 gap-1 items-center">
                    <img src={followers} className="w-5 h-5" />
                    <span>Seguidores</span>
                </div>
                {user?.followers?.length > 0 ? (
                    <div className=" bg-white rounded p-1 mb-3">
                        <Table
                            hoverable
                            className="table-auto mt-1 mx-1 text-sm"
                        >
                            <Table.Body>
                                {user?.followers?.map((follower) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        onClick={() => handleNavigate(follower)}
                                        key={follower?._id}
                                    >
                                        <Table.Cell className="flex items-center p-1">
                                            <Person
                                                color="dark"
                                                className="mx-1 h-4 w-4"
                                            />
                                            {follower?.username}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning" className="my-2">
                        No cuentas con seguidores
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionFollowers
