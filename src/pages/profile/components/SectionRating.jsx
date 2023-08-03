import React from 'react'
import { Table } from 'react-bootstrap'
import { BarChartFill } from 'react-bootstrap-icons'

const SectionRating = ({ user }) => {
    return (
        <>
            <section className=" bg-light rounded p-2 my-3">
                <div className="d-flex mx-2 justify-content-between border-bottom">
                    <div>
                        <BarChartFill color="dark" size={'20px'} />
                        <span className="mx-1">Estadística Mensual</span>
                    </div>
                    <div className="d-flex justify-content-end ">
                        {user?.total?.legth < 1 ||
                        user?.total === undefined ? null : (
                            <>
                                <p className="mx-1 my-1 text-muted fw-bold">
                                    Porcentaje
                                    <span className="mx-1">
                                        {Math.round(
                                            (user?.success * 100) / user?.total
                                        )}
                                        %
                                    </span>
                                </p>
                            </>
                        )}
                    </div>
                </div>
                <Table responsive borderless size="sm" variant="light my-1">
                    <tbody>
                        <tr>
                            <td>Últimos {user?.total} juegos</td>
                            <td className="text-end">
                                <span className="mx-4 text-dark">
                                    {user?.total}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Aciertos</td>
                            <td className="text-end">
                                <span className="mx-4 text-success">
                                    {user?.success}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Fallados</td>
                            <td className="text-end">
                                <span className="mx-4 text-danger">
                                    {user?.failures}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default SectionRating
