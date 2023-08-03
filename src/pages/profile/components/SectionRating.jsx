import React from 'react'
import { Table } from 'react-bootstrap'
import { BarChartFill } from 'react-bootstrap-icons'

const SectionRating = ({ match, id }) => {
    const act = match?.map((match) => {
        let result = ''
        const away = match?.score?.map((away) => away?.away)
        const local = match?.score?.map((local) => local?.local)
        if (Number(away) > Number(local)) {
            result = 'away'
        } else {
            result = 'local'
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
            <section className=" bg-light rounded p-2 my-3">
                <div className="d-flex mx-2 justify-content-between border-bottom">
                    <div>
                        <BarChartFill color="dark" size={'20px'} />
                        <span className="mx-1">Estadística Mensual</span>
                    </div>
                    <div className="d-flex justify-content-end ">
                        {match?.length < 1 ? null : (
                            <>
                                <p className="mx-1 my-1 text-muted fw-bold">
                                    Porcentaje
                                    <span className="mx-1">
                                        {Math.round(
                                            (aciertos?.length * 100) /
                                                match?.length
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
                            <td>Últimos {match?.length} juegos</td>
                            <td className="text-end">
                                <span className="mx-4 text-dark">
                                    {match?.length}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Aciertos</td>
                            <td className="text-end">
                                <span className="mx-4 text-success">
                                    {aciertos?.length}
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <td>Fallados</td>
                            <td className="text-end">
                                <span className="mx-4 text-danger">
                                    {match?.length - aciertos?.length}
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
