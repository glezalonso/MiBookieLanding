import React from 'react'
import { useGetSeasonsByLeague } from '../../../features/seasons.features'
import { toast } from 'react-hot-toast'
import { Table, Alert } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'

const SectionSeasons = ({ league }) => {
    const {
        data: seasons,
        isLoading,
        isError,
    } = useGetSeasonsByLeague(league?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar las temporadas!')

    seasons?.sort((a, b) => b.status - a.status)
    return (
        <>
            <section>
                <h5>Temporadas disponibles</h5>

                {seasons?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Temporada
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Estatus
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {seasons?.map((season) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={season?._id}
                                        onClick={() =>
                                            navigate(
                                                `../seasons/${season?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className="p-1">
                                            {season?.season}
                                        </Table.Cell>
                                        <Table.Cell className="p-1">
                                            {season?.status ? (
                                                <span className="text-green-300">
                                                    Abierta
                                                </span>
                                            ) : (
                                                <span className="text-red-800">
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
                    <Alert color="warning">
                        No hay temporadas para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionSeasons
