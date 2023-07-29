import React from 'react'
import { Card, Table } from 'react-bootstrap'

const CardPick = ({ match, username }) => {
    let result = ''
    const prediction = match?.votes?.filter(
        (vote) => vote?.username === username
    )

    const away = match?.score?.map((away) => away?.away)
    const local = match?.score?.map((local) => local?.local)
    if (away > local) {
        result = 'away'
    } else {
        result = 'local'
    }

    return (
        <>
            <Card className="shadow-xl my-2">
                <Card.Header>
                    <div className="d-flex justify-content-start">
                        <span
                            style={{ fontSize: '13px' }}
                            className="text-secondary"
                        >
                            {match?.date?.split('T').reverse().join(' ')}
                        </span>
                    </div>
                    <div></div>
                </Card.Header>
                <Card.Body>
                    <Table responsive size="sm" borderless className="my-1">
                        <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={match?.away?.poster}
                                            alt={match?.away?.name}
                                            style={{
                                                height: '30px',
                                                width: '30px',
                                            }}
                                        />
                                        <div className="mx-1">
                                            <p className="fw-bold my-1">
                                                {match?.away?.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex justify-content-start">
                                        {match?.score?.map(
                                            (away) => away?.away
                                        )}
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={match?.local?.poster}
                                            alt={match?.local?.name}
                                            style={{
                                                height: '30px',
                                                width: '30px',
                                            }}
                                        />
                                        <div className="mx-1">
                                            <p className="fw-bold my-1">
                                                {match?.local?.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {match?.score?.map((local) => local?.local)}
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
                                        {votes?.option === 'local' ? (
                                            <span>local</span>
                                        ) : (
                                            <span>visitante</span>
                                        )}
                                    </strong>
                                </span>
                            </div>

                            <div>
                                {!match?.status ? (
                                    votes.option === result ? (
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
