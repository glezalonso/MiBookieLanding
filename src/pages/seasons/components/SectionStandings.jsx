import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionStandings = ({ season }) => {
    const navigate = useNavigate()
    // counter
    let i = 1

    // SoccerID
    const ID_SOCCER = '648f71dea4ba8860dfe3830f'
    const sort = season?.standings?.sort((a, b) => {
        if (b.wins !== a.wins) {
            return b.wins - a.wins
        } else {
            return b.draws - a.draws
        }
    })

    return (
        <>
            <section>
                <h5>Posiciones</h5>

                {sort?.length > 0 ? (
                    <div className="bg-dark rounded section-tables">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="dark"
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <th>No.</th>
                                    <th>Equipo</th>
                                    <th>Ganados</th>
                                    <th>Perdidos</th>
                                    <th>Empatados</th>
                                    {season?.sport?._id === ID_SOCCER ? (
                                        <th>Puntos</th>
                                    ) : null}
                                </tr>
                            </thead>
                            <tbody>
                                {sort.map((stands) => (
                                    <tr
                                        key={stands?.team?._id}
                                        onClick={() =>
                                            navigate(
                                                `../teams/${stands?.team?._id}`
                                            )
                                        }
                                    >
                                        <td>{i++}</td>
                                        <td>{stands.team?.name}</td>
                                        <td>{stands?.wins}</td>
                                        <td>{stands?.loses}</td>
                                        <td>{stands.draws}</td>
                                        {season?.sport?._id === ID_SOCCER ? (
                                            <td>
                                                {season?.sport?._id ===
                                                ID_SOCCER
                                                    ? stands?.wins * 3 +
                                                      stands?.draws
                                                    : null}
                                            </td>
                                        ) : null}
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay posiciones para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionStandings
