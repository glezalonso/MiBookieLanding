import React from 'react'
import { Table } from 'flowbite-react'
import CardSectionAway from '../../comuncomponents/CardSectionAway'
import AwayScore from '../../comuncomponents/AwayScore'
import CardSectionLocal from '../../comuncomponents/CardSectionLocal'
import LocalScore from '../../comuncomponents/LocalScore'
import CardHeader from '../../comuncomponents/CardHeader'

const CardOpen = ({ match, id }) => {
    let result = ''

    const prediction = match?.votes?.filter(
        (vote) => vote?.username?._id === id
    )

    const away = match?.score?.map((away) => away?.away)
    const local = match?.score?.map((local) => local?.local)
    if (Number(away) > Number(local)) {
        result = 'away'
    } else if (Number(away) < Number(local)) {
        result = 'local'
    } else {
        result = 'draw'
    }

    return (
        <>
            <div className="max-w-full bg-white border-gray-200 my-2 p-2 rounded-lg border-2 shadow-lg">
                <div>
                    <CardHeader match={match} />
                </div>
                <div>
                    <Table className="table-auto text-xs">
                        <Table.Body className="border-b-inherit ">
                            <Table.Row>
                                <Table.Cell className="p-2">
                                    <CardSectionLocal match={match} />
                                </Table.Cell>
                                <Table.Cell className="p-2 text-center ">
                                    <LocalScore match={match} />
                                </Table.Cell>
                            </Table.Row>
                            <Table.Row>
                                <Table.Cell className="p-2">
                                    <CardSectionAway match={match} />
                                </Table.Cell>
                                <Table.Cell className="p-2 text-center ">
                                    <AwayScore match={match} />
                                </Table.Cell>
                            </Table.Row>
                        </Table.Body>
                    </Table>
                </div>
                <div>
                    {prediction?.map((votes) => (
                        <div
                            className="flex justify-between"
                            key={votes?.username}
                        >
                            <div>
                                <span className="text-gray-500 text-xs">
                                    {!match?.status
                                        ? match?.date?.split('T')[0]
                                        : null}{' '}
                                    Tu pronóstico:
                                    <strong className="mx-1">
                                        {votes?.option === 'local' ? (
                                            <span>Local</span>
                                        ) : votes?.option === 'away' ? (
                                            <span>Visitante</span>
                                        ) : (
                                            <span>Empate</span>
                                        )}
                                    </strong>
                                </span>
                            </div>

                            <div>
                                {!match.status ? (
                                    votes?.option === result ? (
                                        <span className="text-green-600 text-xs">
                                            Acertaste
                                        </span>
                                    ) : (
                                        <span className="text-red-800 text-xs">
                                            Fallaste
                                        </span>
                                    )
                                ) : null}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default CardOpen
