import React from 'react'
import { Table } from 'flowbite-react'
import { PersonCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const SectionBookies = ({ user }) => {
    return (
        <>
            <section className="bg-white rounded p-1 my-1">
                <Table hoverable className="table-auto mt-.5 text-sm">
                    <Table.Body className="divide-y">
                        <Table.Row>
                            <Table.Cell className="p-.5">
                                <div className=" flex my-2">
                                    <PersonCircle
                                        color="black"
                                        className="mx-1 mt-1"
                                    />
                                    <span className="mx-1 text-gray-600 font-bold">
                                        {user?.username}
                                    </span>
                                </div>
                            </Table.Cell>
                            <Table.Cell className="p-.5">
                                <div className="flex justify-end ">
                                    <div className="my-1 border-l-2">
                                        {user?.success === undefined ||
                                            user?.total?.legth < 1 ||
                                            user?.total === undefined ? null : (
                                            <>
                                                <p className="mx-2 my-1 text-gray-600 font-bold">
                                                    Predicción
                                                    <span className="mx-1">
                                                        {Math.round(
                                                            (user?.success *
                                                                100) /
                                                            user?.total
                                                        )}
                                                        %
                                                    </span>
                                                </p>
                                            </>
                                        )}
                                    </div>
                                    <div className="my-1">
                                        <Link
                                            to={`../profile/${user?._id}`}
                                            className="bg-zinc-950 p-2 mt-1 text-xs mx-1 rounded-lg text-white no-underline hover:bg-zinc-800"
                                        >
                                            Perfil
                                        </Link>
                                    </div>
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}

export default SectionBookies
