import React, { useState } from 'react'
import { useGetSeasonsBySport } from '../../../features/seasons.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { Alert, Table, FormControl } from 'react-bootstrap'
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

    const seasonsByFilter = seasons?.filter((season) => {
        if (!filter) return season
        return season?.season?.toLowerCase().includes(filter.toLowerCase())
    })

    seasonsByFilter?.sort((a, b) => b.status - a.status)

    return (
        <>
            <section>
                <h5>Temporadas</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '14px' }}
                        name="sport"
                        placeholder="Temporada..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {seasonsByFilter?.length > 0 ? (
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
                                    <th>Temporada</th>
                                    <th>Liga</th>
                                    <th>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {seasonsByFilter?.map((season) => (
                                    <tr
                                        key={season?._id}
                                        onClick={() =>
                                            navigate(
                                                `../seasons/${season?._id}`
                                            )
                                        }
                                    >
                                        <td>{season?.season}</td>
                                        <td>{season?.league?.league}</td>
                                        <td>
                                            {season?.status ? (
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
                    <Alert variant="warning">
                        No hay temporadas para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionSeasonsBySport
