import React, { useState } from 'react'
import { useGetRoundsBySeason } from '../../../features/rounds.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { Table, Alert, TextInput } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'

const SectionRounds = ({ season }) => {
    const [filter, setFilter] = useState('')
    const {
        data: rounds,
        isLoading,
        isError,
    } = useGetRoundsBySeason(season?._id)
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
                <h5 className="mt-3 mx-1">Rondas</h5>
                <div className="my-1 mx-auto p-1">
                    <TextInput
                        name="round"
                        placeholder="Ronda..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterRounds?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="p-1">
                                    Ronda
                                </Table.HeadCell>
                                <Table.HeadCell className="p-1">
                                    Estatus
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {filterRounds?.map((round) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={round?._id}
                                        onClick={() =>
                                            navigate(`../rounds/${round?._id}`)
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {round?.round}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {round?.status ? (
                                                <span className="text-green-500">
                                                    Abierta
                                                </span>
                                            ) : (
                                                <span className="text-red-900">
                                                    Cerrada
                                                </span>
                                            )}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning">No hay rondas para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionRounds
