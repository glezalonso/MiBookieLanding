import React from 'react'
import { Card, Table } from 'react-bootstrap'
import CardSectionAway from '../../comuncomponents/CardSectionAway'
import AwayScore from '../../comuncomponents/AwayScore'
import CardSectionLocal from '../../comuncomponents/CardSectionLocal'
import LocalScore from '../../comuncomponents/LocalScore'
import CardHeader from '../../comuncomponents/CardHeader'

const CardPick = ({ match, id }) => {
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
            <Card className="shadow-xl my-2">
                <Card.Header>
                    <CardHeader match={match} />
                </Card.Header>
                <Card.Body>
                    <Table responsive size="sm" borderless className="my-1">
                        <tbody>
                            <tr>
                                <td>
                                    <CardSectionAway match={match} />
                                </td>
                                <td className="text-end">
                                    <AwayScore match={match} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CardSectionLocal match={match} />
                                </td>
                                <td className="text-end">
                                    <LocalScore match={match} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                </Card.Body>
                <Card.Footer>
                    {prediction?.map((votes) => (
                        <div
                            className="d-flex justify-content-between"
                            key={votes?.username}
                        >
                            <div>
                                <span
                                    style={{ fontSize: '13px' }}
                                    className="text-secondary"
                                >
                                    Tu pronóstico:
                                    <strong className="mx-1">
                                        <span>{votes?.option}</span>
                                    </strong>
                                </span>
                            </div>

                            <div>
                                {!match.status ? (
                                    votes?.option === result ? (
                                        <span
                                            style={{ fontSize: '13px' }}
                                            className="text-success"
                                        >
                                            Acertaste
                                        </span>
                                    ) : (
                                        <span
                                            style={{ fontSize: '13px' }}
                                            className="text-danger"
                                        >
                                            Fallaste
                                        </span>
                                    )
                                ) : null}
                            </div>
                        </div>
                    ))}
                </Card.Footer>
            </Card>
        </>
    )
}
export default CardPick
