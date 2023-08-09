import React, { useState } from 'react'
import { useGetSeasonsBySport } from '../../../features/seasons.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Table, TextInput, Alert } from 'flowbite-react'
import Loading from '../../../ui/Loading'

const SectionSeasonsBySport = ({ sport }) => {
    const [filter, setFilter] = useState('')
    const {
        data: seasons,
        isLoading,
        isError,
    } = useGetSeasonsBySport(sport?._id)
    const navigate = useNavigate()

    if (isLoading) return <Loading />

    if (isError) return toast.error('Hubo un error al cargar las temporadas!')
    const seasonsOpen = seasons?.filter((seasons) => seasons?.status === true)
    const seasonsByFilter = seasonsOpen?.filter((season) => {
        if (!filter) return season
        return season?.season?.toLowerCase().includes(filter.toLowerCase())
    })

    seasonsByFilter?.sort((a, b) => b.status - a.status)

    return (
        <>
            <section>
                <h5 className="mx-2">Temporadas</h5>
                <div className="my-2 mx-auto p-1">
                    <TextInput
                        name="sport"
                        placeholder="Temporada..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {seasonsByFilter?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Temporada
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Liga
                                </Table.HeadCell>
                            </Table.Head>
                            <Table.Body>
                                {seasonsByFilter?.map((season) => (
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
                                            {season?.league?.league}
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">
                        No hay temporadas para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionSeasonsBySport
