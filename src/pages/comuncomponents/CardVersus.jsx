import React from 'react'
import { useGetHeadtoHead } from '../../features/matches.features'
import { toast } from 'react-hot-toast'
import { Table, Alert, Spinner } from 'flowbite-react'

const CardVersus = ({ match }) => {
    const {
        data: matches,
        isLoading,
        isError,
    } = useGetHeadtoHead(match?.local?._id, match?.away?._id)

    if (isLoading)
        return (
            <div className="flex justify-center items-center m-3">
                <Spinner color="warning" />
            </div>
        )
    if (isError) return toast.error('Hubo un error al cargar el head to head')

    return (
        <>
            <div className="rounded text-white py-1 max-h-56  overflow-auto mt-1 border-t-2">
                {matches?.length > 0 ? (
                    matches?.map((match) => (
                        <Table
                            hoverable
                            key={match?._id}
                            className="table-auto mt-1 text-xs"
                        >
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell className="p-0 w-20 text-center font-semibold ">
                                        {match?.date?.split('T', 1)}
                                    </Table.Cell>
                                    <Table.Cell className="p-1 flex items-center justify-between gap-0.5">
                                        <div className="flex">
                                            {match?.local?.poster ? (
                                                <img
                                                    src={match?.local?.poster}
                                                    alt="localimage"
                                                    className="w-4 h-4"
                                                />
                                            ) : null}
                                            <span className="">
                                                {match?.local?.name}
                                            </span>
                                        </div>
                                        <div>
                                            <span className=" text-gray-600 font-extrabold mr-1">
                                                {match?.score?.map(
                                                    (score) => score?.local
                                                )}
                                            </span>
                                        </div>
                                    </Table.Cell>
                                    <Table.Cell className="p-1 flex items-center justify-between gap-0.5">
                                        <div className="flex">
                                            {match?.away?.poster ? (
                                                <img
                                                    src={match?.away?.poster}
                                                    alt="localimage"
                                                    className="w-4 h-4"
                                                />
                                            ) : null}
                                            <span>{match?.away?.name}</span>
                                        </div>

                                        <div>
                                            <span className=" text-gray-600 font-extrabold mr-1 ">
                                                {match?.score?.map(
                                                    (score) => score?.away
                                                )}
                                            </span>
                                        </div>
                                    </Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    ))
                ) : (
                    <Alert color="warning" className="mx-3 p-2 my-2 ">
                        No hay juegos para mostrar!
                    </Alert>
                )}
            </div>
        </>
    )
}

export default CardVersus
