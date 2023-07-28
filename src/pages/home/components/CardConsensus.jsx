import React from 'react'
import { Table, Card, Button } from 'react-bootstrap'
import AwayVotes from './AwayVotes'
import LocalVotes from './LocalVotes'
import { useAddPickEm } from '../../../features/matches.features'
import { useAuthStore } from '../../../store/authorization'
import { toast } from 'react-hot-toast'

const CardConsensus = ({ match }) => {
    const { profile } = useAuthStore((state) => state)
    const addVote = useAddPickEm()

    const handleVote = (option, match) => {
        if (!profile) return toast.error('Debes iniciar sesión para comentar')
        addVote.mutate({ body: { option, match, username: profile } })
    }

    return (
        <>
            <Card.Body className="rounded">
                <Table responsive borderless hover size="sm" className="my-1">
                    <tbody>
                        <tr>
                            <td>
                                <img
                                    src={match?.away?.poster}
                                    alt={match?.away?.name}
                                    style={{
                                        height: '25px',
                                        width: '25px',
                                    }}
                                />
                            </td>
                            <td>
                                {' '}
                                <AwayVotes match={match} />
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        size="sm"
                                        variant="warning mx-4"
                                        onClick={() =>
                                            handleVote('away', match?._id)
                                        }
                                    >
                                        Votar
                                    </Button>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <img
                                    src={match?.local?.poster}
                                    alt={match?.local?.name}
                                    style={{
                                        height: '25px',
                                        width: '25px',
                                    }}
                                />
                            </td>
                            <td>
                                <LocalVotes match={match} />
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        size="sm"
                                        variant="warning mx-4"
                                        onClick={() =>
                                            handleVote('local', match?._id)
                                        }
                                    >
                                        Votar
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </>
    )
}

export default CardConsensus
