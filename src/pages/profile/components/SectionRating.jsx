import React from 'react'
import { Table } from 'flowbite-react'
import { BarChartFill } from 'react-bootstrap-icons'

const SectionRating = ({ user }) => {
    return (
        <>
            <section className=" bg-white rounded p-2 my-3">
                <div className="flex mx-2 justify-between border-b-2">
                    <div className="flex">
                        <BarChartFill color="dark" size={'20px'} />
                        <span className="mx-1">Estadísticas</span>
                    </div>
                    <div className="flex justify-end ">
                        {user?.success === undefined ||
                            user?.total?.legth < 1 ||
                            user?.total === undefined ? null : (
                            <>
                                <p className="mx-1 my-1 text-gray-600 font-bold">
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
                <Table className="table-auto my-1 text-sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="p-1">
                                Últimos {user?.total} juegos
                            </Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-black">
                                    {user?.total}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Aciertos</Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-green-600">
                                    {user?.success ? user?.success : null}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Fallados</Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-red-800">
                                    {user?.failures}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}

export default SectionRating
