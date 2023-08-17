import React from 'react'
import { Table } from 'flowbite-react'
import { BarChartFill } from 'react-bootstrap-icons'

const SectionStadistics = ({ match, id }) => {
    const act = match?.map((match) => {
        let result = ''
        const away = match?.score?.map((away) => away?.away)
        const local = match?.score?.map((local) => local?.local)
        if (Number(away) > Number(local)) {
            result = 'away'
        } else if (Number(away) < Number(local)) {
            result = 'local'
        } else {
            result = 'draw'
        }

        const picks = match?.votes?.filter((vote) => vote?.username?._id === id)

        const aciertos = picks?.map((votes) => {
            let hits = 0
            if (votes.option === result) {
                hits += 1
            }
            return hits
        })

        return aciertos
    })

    const aciertos = act?.filter((e) => Number(e) === 1)

    return (
        <>
            <section className=" bg-white mx-auto rounded p-2 my-3 shadow-xl">
                <div className="flex mx-2 justify-between border-b-2">
                    <div className="flex mt-1">
                        <BarChartFill color="dark" size={'20px'} />
                        <span className="mx-1">Estadísticas Filtradas</span>
                    </div>
                    <div className="flex justify-end gap-1 ">
                        {aciertos === undefined || match?.length < 1 ? null : (
                            <>
                                <p className=" my-1 text-gray-600 font-bold">
                                    Porcentaje
                                    <span className="mx-1">
                                        {Math.round(
                                            (Number(aciertos?.length) * 100) /
                                            Number(match?.length)
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
                                Últimos {match?.length} juegos
                            </Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-black">
                                    {match?.length}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Aciertos</Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-green-600">
                                    {aciertos ? aciertos?.length : null}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-1">Fallados</Table.Cell>
                            <Table.Cell className="p-1 text-end">
                                <span className=" text-red-800">
                                    {match?.length - aciertos?.length}
                                </span>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}
export default SectionStadistics
