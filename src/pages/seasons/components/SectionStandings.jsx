import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionStandings = ({ season }) => {
    const navigate = useNavigate()
    // counter
    let i = 1

    const ID_AMERICANO = '648f71cda4ba8860dfe38309'
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
                    <div className="bg-light rounded section-tables p-1">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <thead className="border-bottom">
                                <tr>
                                    <th>Pos</th>
                                    <th>Equipo</th>
                                    <th>Gan</th>
                                    <th>Per</th>
                                    {season?.sport?._id === ID_SOCCER ||
                                    season?.sport?._id === ID_AMERICANO ? (
                                        <th>Emp</th>
                                    ) : null}
                                    {season?.sport?._id === ID_SOCCER ? (
                                        <th>Pts</th>
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
                                        <td>
                                            <img
                                                style={{
                                                    height: '15px',
                                                    width: '15px',
                                                    borderRadius: '50%',
                                                }}
                                                src={stands.team?.poster}
                                                alt={stands.team?.name}
                                            />
                                            <span className="mx-1">
                                                {stands.team?.name}
                                            </span>
                                        </td>
                                        <td>{stands?.wins}</td>
                                        <td>{stands?.loses}</td>
                                        {season?.sport?._id === ID_SOCCER ||
                                        season?.sport?._id === ID_AMERICANO ? (
                                            <td>{stands?.draws}</td>
                                        ) : null}
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
