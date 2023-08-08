import React from 'react'
import { Alert, Table } from 'flowbite-react'
import { useGetSeasons } from '../../../features/seasons.features'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'

const SectionStandings = ({ player }) => {
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
            season?.sport?._id === player?.sport?._id && season?.status === true
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
                <h5>Clasificacíon</h5>

                {sort?.length > 0 ? (
                    <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                        <Table hoverable className="table-auto mt-1 text-sm">
                            <Table.Head>
                                <Table.HeadCell className="px-1">
                                    Pos
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1">
                                    Equipo
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1 text-center">
                                    Gan
                                </Table.HeadCell>
                                <Table.HeadCell className="px-1 text-center">
                                    Per
                                </Table.HeadCell>
                                {season?.sport?._id === ID_SOCCER ||
                                    season?.sport?._id === ID_AMERICANO ? (
                                    <Table.HeadCell className="px-1 text-center">
                                        Emp
                                    </Table.HeadCell>
                                ) : null}
                                {season?.sport?._id === ID_SOCCER ? (
                                    <Table.HeadCell className="px-1 text-center">
                                        Pts
                                    </Table.HeadCell>
                                ) : null}
                            </Table.Head>
                            <Table.Body className="divide-y">
                                {sort.map((stands) =>
                                    stands.map((stands) => (
                                        <Table.Row
                                            className="hover:cursor-pointer"
                                            key={stands?.team?._id}
                                            onClick={() =>
                                                navigate(
                                                    `../teams/${stands?.team?._id}`
                                                )
                                            }
                                        >
                                            <Table.Cell className="p-1">
                                                {i++}
                                            </Table.Cell>
                                            <Table.Cell
                                                className=" flex p-1"
                                                style={
                                                    player?.team?.name ===
                                                        stands.team?.name
                                                        ? {
                                                            fontWeight:
                                                                'bold',
                                                        }
                                                        : null
                                                }
                                            >
                                                <img
                                                    className="h-5 w-5"
                                                    src={stands.team?.poster}
                                                    alt={stands.team?.name}
                                                />
                                                <span className="mx-1">
                                                    {stands.team?.name}
                                                </span>
                                            </Table.Cell>
                                            <Table.Cell className="p-1 text-center">
                                                {stands?.wins}
                                            </Table.Cell>
                                            <Table.Cell className="p-1 text-center">
                                                {stands?.loses}
                                            </Table.Cell>
                                            {season?.sport?._id === ID_SOCCER ||
                                                season?.sport?._id ===
                                                ID_AMERICANO ? (
                                                <Table.Cell className="p-1 text-center">
                                                    {stands?.draws}
                                                </Table.Cell>
                                            ) : null}
                                            {season?.sport?._id ===
                                                ID_SOCCER ? (
                                                <Table.Cell className="p-1 text-center">
                                                    {season?.sport?._id ===
                                                        ID_SOCCER
                                                        ? stands?.wins * 3 +
                                                        stands?.draws
                                                        : null}
                                                </Table.Cell>
                                            ) : null}
                                        </Table.Row>
                                    ))
                                )}
                            </Table.Body>
                        </Table>
                    </div>
                ) : (
                    <Alert color="warning">
                        No hay posiciones para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionStandings
