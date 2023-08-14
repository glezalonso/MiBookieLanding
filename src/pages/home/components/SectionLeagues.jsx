import React, { useState } from 'react'
import { Alert, Table, TextInput } from 'flowbite-react'
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
                <h5 className="mx-1">Ligas</h5>
                <div className="mt-2 mx-auto p-1">
                    <TextInput
                        name="league"
                        placeholder="Liga..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {leaguesByFilter?.length > 0 ? (
                    <div className="bg-light rounded p-1 ">
                        <Table hoverable className="table-aut0  text-sm">
                            <Table.Body>
                                {leaguesByFilter?.map((league) => (
                                    <Table.Row
                                        className="hover:cursor-pointer"
                                        key={league?._id}
                                        onClick={() =>
                                            navigate(
                                                `../leagues/${league?._id}`
                                            )
                                        }
                                    >
                                        <Table.Cell className=" flex p-1">
                                            <img
                                                className="h-4 w-4"
                                                src={league?.poster}
                                                alt={league?.league}
                                            />
                                            <span className="mx-1">
                                                {league?.league}
                                            </span>
                                        </Table.Cell>
                                    </Table.Row>
                                ))}
                            </Table.Body>
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
