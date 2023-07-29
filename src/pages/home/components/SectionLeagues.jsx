import React, { useState } from 'react'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useGetLeagues } from '../../../features/leagues.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'

const SectionLeagues = () => {
    const [filter, setFilter] = useState('')
    const { data: leagues, isLoading, isError } = useGetLeagues()
    const navigate = useNavigate()

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las ligas')

    const leaguesByFilter = leagues?.filter((league) => {
        if (!filter) return league
        return league?.league?.toLowerCase().includes(filter.toLowerCase())
    })

    return (
        <>
            <section>
                <h5>Ligas</h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
                        name="league"
                        placeholder="Liga..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {leaguesByFilter?.length > 0 ? (
                    <div className="bg-light rounded ">
                        <Table
                            responsive
                            borderless
                            hover
                            size="sm"
                            variant="light"
                        >
                            <thead className="border-bottom solid">
                                <tr>
                                    <th scope="col">Liga</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leaguesByFilter?.map((league) => (
                                    <tr
                                        key={league?._id}
                                        onClick={() =>
                                            navigate(
                                                `../leagues/${league?._id}`
                                            )
                                        }
                                    >
                                        <td>{league?.league}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                ) : (
                    <Alert variant="warning">No hay ligas para mostrar!</Alert>
                )}
            </section>
        </>
    )
}
export default SectionLeagues
