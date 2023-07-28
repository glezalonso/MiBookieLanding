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
                                <div className="d-flex justify-content-cente">
                                    <div>
                                        <img
                                            src={match?.away?.poster}
                                            alt={match?.away?.name}
                                            style={{
                                                height: '25px',
                                                width: '25px',
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="mx-1 my-1"
                                        style={{ fontSize: '13px' }}
                                    >
                                        <span>{match?.away?.name}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <AwayVotes match={match} />
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        size="sm"
                                        variant="warning "
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
                                <div className="d-flex justify-content-cente">
                                    <div>
                                        <img
                                            src={match?.local?.poster}
                                            alt={match?.local?.name}
                                            style={{
                                                height: '25px',
                                                width: '25px',
                                            }}
                                        />
                                    </div>
                                    <div
                                        className="mx-1 my-1"
                                        style={{ fontSize: '13px' }}
                                    >
                                        <span>{match?.local?.name}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <LocalVotes match={match} />
                            </td>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        style={{ fontSize: '14px' }}
                                        size="sm"
                                        variant="warning "
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
