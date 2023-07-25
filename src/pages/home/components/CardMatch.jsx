import React, { useState } from 'react'
import { Card, Button, Table, Badge } from 'react-bootstrap'
import { ChatDotsFill, Clock, People, GraphUp } from 'react-bootstrap-icons'
import { useNavigate } from 'react-router-dom'
import CardLineUp from './CardLineUp'
import CardComments from './CardComments'
import CardFooter from './CardFooter'
import LocalVotes from './LocalVotes'
import AwayVotes from './AwayVotes'

const CardMatch = ({ match }) => {
    const [showComments, setShowComments] = useState(false)
    const [showLineUp, setShowLineUp] = useState(false)
    const [showConsensus, setShowConsensus] = useState(false)

    const navigate = useNavigate()

    return (
        <>
            <Card bg="dark" className="shadow-xl my-2">
                <Card.Header className=" border-secondary border-bottom rounded ">
                    <span
                        style={{ fontSize: '13px' }}
                        className="text-secondary"
                    >
                        {match?.league?.league}
                    </span>
                    <Table responsive size="sm" borderless variant="dark ">
                        <tbody
                            onClick={() => navigate(`../matches/${match?._id}`)}
                            className="border-bottom"
                        >
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={match?.away?.poster}
                                            alt={match?.away?.name}
                                            style={{
                                                height: '28px',
                                                width: '28px',
                                            }}
                                        />{' '}
                                        <div className="ms-1">
                                            <p className="fw-bold mb-1">
                                                {match?.away?.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    className="mx-auto fw-bold"
                                    style={
                                        !showConsensus
                                            ? { display: 'none' }
                                            : null
                                    }
                                >
                                    <AwayVotes match={match} />
                                </td>

                                <td className="text-center">
                                    <strong>
                                        {match?.score?.map(
                                            (score) => score?.away
                                        )}
                                    </strong>
                                </td>
                                <td className="text-end ">
                                    {match?.status ? (
                                        <span>
                                            <Clock />{' '}
                                            {match?.date?.split('T')[1]}
                                        </span>
                                    ) : (
                                        <Badge bg="danger">Terminado</Badge>
                                    )}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <img
                                            src={match?.local?.poster}
                                            alt={match?.local?.name}
                                            style={{
                                                height: '28px',
                                                width: '28px',
                                            }}
                                        />{' '}
                                        <div className="ms-1">
                                            <p className="fw-bold mb-1">
                                                {match?.local?.name}
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td
                                    className="mx-auto fw-bold"
                                    style={
                                        !showConsensus
                                            ? { display: 'none' }
                                            : null
                                    }
                                >
                                    <LocalVotes match={match} />
                                </td>

                                <td className="text-center">
                                    <strong>
                                        {match?.score?.map(
                                            (score) => score?.local
                                        )}
                                    </strong>
                                </td>
                                <td></td>
                            </tr>
                        </tbody>
                    </Table>

                    <Button
                        className="btn btn-dark btn-sm"
                        style={{ fontSize: '12px' }}
                        onClick={() => setShowComments(!showComments)}
                    >
                        {showComments ? (
                            <>
                                <ChatDotsFill className="mx-1" />{' '}
                                {match?.comments?.length} Cerrar comentarios
                            </>
                        ) : (
                            <>
                                <ChatDotsFill className="mx-1" />{' '}
                                {match?.comments?.length} comentario(s)
                            </>
                        )}
                    </Button>
                    {match?.lineup?.length > 0 ? (
                        <Button
                            className="btn btn-dark btn-sm "
                            style={{ fontSize: '12px' }}
                            onClick={() => setShowLineUp(!showLineUp)}
                        >
                            <People className="mx-1" /> Alineación
                        </Button>
                    ) : null}
                    {match?.votes?.length > 0 ? (
                        <Button
                            className="btn btn-dark btn-sm "
                            style={{ fontSize: '12px' }}
                            onClick={() => setShowConsensus(!showConsensus)}
                        >
                            <GraphUp className="mx-1" /> Votos
                        </Button>
                    ) : null}
                </Card.Header>
                <div
                    style={
                        showLineUp
                            ? { maxHeight: '200px', overflow: 'auto' }
                            : { display: 'none' }
                    }
                >
                    <CardLineUp match={match} />
                </div>
                <div
                    style={
                        showComments
                            ? { maxHeight: '200px', overflow: 'auto' }
                            : { display: 'none' }
                    }
                >
                    <CardComments match={match} />
                </div>

                <div style={!showComments ? { display: 'none' } : null}>
                    <CardFooter match={match} />
                </div>
            </Card>
        </>
    )
}
export default CardMatch
