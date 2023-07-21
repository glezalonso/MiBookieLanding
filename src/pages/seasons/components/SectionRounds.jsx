import React, { useState } from 'react'
import { useGetRoundsByhSeason } from '../../../features/rounds.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { FormControl, Alert, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionRounds = ({ season }) => {
    const [filter, setFilter] = useState('')
    const {
        data: rounds,
        isLoading,
        isError,
    } = useGetRoundsByhSeason(season?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las jornadas!')

    const filterRounds = rounds?.filter((round) => {
        if (!filter) return round
        return round?.round?.toLowerCase().includes(filter.toLowerCase())
    })

    filterRounds?.sort(
        (a, b) => a.roundNumber - b.roundNumber && b.status - a.status
    )

    return (
        <>
            <section>
                <h5> Rondas</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '13px' }}
                        name="round"
                        placeholder="Ronda..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterRounds?.length > 0 ? (
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
                                    <th>Ronda</th>
                                    <th>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filterRounds?.map((round) => (
                                    <tr
                                        key={round?._id}
                                        onClick={() =>
                                            navigate(`../rounds/${round?._id}`)
                                        }
                                    >
                                        <td>{round?.round}</td>
                                        <td>
                                            {round?.status ? (
                                                <span className="text-success">
                                                    Abierta
                                                </span>
                                            ) : (
                                                <span className="text-danger">
                                                    Cerrada
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">No hay rondas para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionRounds
