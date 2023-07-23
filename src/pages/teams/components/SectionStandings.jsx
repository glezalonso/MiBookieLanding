import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useGetSeasons } from '../../../features/seasons.features'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'

const SectionStandings = ({ team }) => {
    const { data: season, isLoading, isError } = useGetSeasons()
    const navigate = useNavigate()

    // counter
    let i = 1

    const ID_AMERICANO = '648f71cda4ba8860dfe38309'
    const ID_SOCCER = '648f71dea4ba8860dfe3830f'

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las posiciones!')

    const seasonsByPlayer = season?.filter(
        (season) =>
            season?.sport?._id === team?.sport?._id && season?.status === true
    )

    const sort = seasonsByPlayer?.map((season) =>
        season?.standings?.sort((a, b) => {
            if (b.wins !== a.wins) {
                return b.wins - a.wins
            } else {
                return b.draws - a.draws
            }
        })
    )

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
                                    <th>Pos</th>
                                    <th>Equipo</th>
                                    <th>Gan</th>
                                    <th>Per</th>
                                    {season?.sport?._id === ID_SOCCER ||
                                    season?.sport?._id === ID_AMERICANO ? (
                                        <th>Emp</th>
                                    ) : null}
                                    {team?.sport?._id === ID_SOCCER ? (
                                        <th>Pts</th>
                                    ) : null}
                                </tr>
                            </thead>
                            <tbody>
                                {sort.map((stands) =>
                                    stands.map((stands) => (
                                        <tr
                                            key={stands?.team?._id}
                                            onClick={() =>
                                                navigate(
                                                    `../teams/${stands?.team?._id}`
                                                )
                                            }
                                        >
                                            <td>{i++}</td>
                                            <td
                                                style={
                                                    team?.name ===
                                                    stands.team?.name
                                                        ? {
                                                              fontWeight:
                                                                  'bold',

                                                              background:
                                                                  'grey',
                                                          }
                                                        : null
                                                }
                                            >
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
                                            {team?.sport?._id === ID_SOCCER ||
                                            season?.sport?._id ===
                                                ID_AMERICANO ? (
                                                <td>{stands?.draws}</td>
                                            ) : null}
                                            {team?.sport?._id === ID_SOCCER ? (
                                                <td>
                                                    {team?.sport?._id ===
                                                    ID_SOCCER
                                                        ? stands?.wins * 3 +
                                                          stands?.draws
                                                        : null}
                                                </td>
                                            ) : null}
                                        </tr>
                                    ))
                                )}
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
