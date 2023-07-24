import React from 'react'
import { Alert, Table } from 'react-bootstrap'

const CardConsensus = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )

    return (
        <>
            <div className="d-flex justify-content-center bg-light rounded-bottom">
                <div className="mx-auto">
                    <Table
                        style={{ fontSize: '12px' }}
                        responsive
                        borderless
                        hover
                        size="sm"
                    >
                        <thead>
                            <tr>
                                <th>
                                    {match?.away?.name}
                                    <span className="mx-1">
                                        {votesaway?.length}
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        {votesaway?.length > 0 ? (
                            <tbody>
                                {votesaway?.map((vote) => (
                                    <tr key={vote?.username}>
                                        <td>{vote.username} </td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <Alert variant="warning p-1 text-center">
                                No hay votos!
                            </Alert>
                        )}
                    </Table>
                </div>
                <div className="mx-auto">
                    <Table
                        style={{ fontSize: '12px' }}
                        responsive
                        borderless
                        hover
                        size="sm"
                        variant="light"
                    >
                        <thead>
                            <tr>
                                <th>
                                    {match?.local?.name}
                                    <span className="mx-1">
                                        {voteslocal?.length}
                                    </span>
                                </th>
                            </tr>
                        </thead>
                        {voteslocal?.length > 0 ? (
                            <tbody>
                                {voteslocal?.map((vote) => (
                                    <tr key={vote?.username}>
                                        <td>{vote.username}</td>
                                    </tr>
                                ))}
                            </tbody>
                        ) : (
                            <Alert variant="warning p-1 text-center">
                                No hay votos!
                            </Alert>
                        )}
                    </Table>
                </div>
            </div>
        </>
    )
}

export default CardConsensus
