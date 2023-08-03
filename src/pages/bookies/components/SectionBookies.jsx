import React from 'react'
import { Table } from 'react-bootstrap'
import { PersonCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const SectionBookies = ({ user }) => {
    return (
        <>
            <section className="bg-light rounded p-1 my-1">
                <Table responsive size="sm" borderless hover className="my-1">
                    <tbody>
                        <tr>
                            <td>
                                <div className="my-2">
                                    <PersonCircle
                                        color="dark"
                                        className="mx-1"
                                    />
                                    <span className="mx-1 text-muted fw-bold">
                                        {user?.username}
                                    </span>
                                </div>
                            </td>

                            <td>
                                <div className="d-flex justify-content-end ">
                                    <div className="my-1 border-start">
                                        {user?.success === undefined ||
                                        user?.total?.legth < 1 ||
                                        user?.total === undefined ? null : (
                                            <>
                                                <p className="mx-2 my-1 text-muted fw-bold">
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
                                            className="btn btn-sm btn-dark"
                                        >
                                            Perfil
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default SectionBookies
