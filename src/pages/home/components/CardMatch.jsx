import React, { useState } from 'react'
import { Card, Button, Table, Badge } from 'react-bootstrap'
import { ChatDotsFill, Clock, People } from 'react-bootstrap-icons'

import { useNavigate } from 'react-router-dom'
import CardLineUp from './CardLineUp'
import CardComments from './CardComments'
import CardFooter from './CardFooter'
import CardStandingAway from './CardStandingAway'
import CardStandingLocal from './CardStandingLocal'

const CardMatch = ({ match }) => {
    const [showComments, setShowComments] = useState(false)
    const [showLineUp, setShowLineUp] = useState(false)

    const ID_BASEBALL = '648f7211a4ba8860dfe38319'

    const navigate = useNavigate()

    return (
        <>
            <Card bg="dark" className="shadow-xl  my-2">
                <Card.Header className="border-bottom rounded ">
                    <span>
                        <strong>{match?.league?.league}</strong>
                    </span>
                    <Table responsive size="sm" borderless variant="dark">
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
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                            }}
                                        />{' '}
                                        <div className="ms-1">
                                            <p className="fw-bold mb-1">
                                                {match?.away?.name}
                                                {match?.sport?._id ===
                                                ID_BASEBALL ? (
                                                    <CardStandingAway
                                                        match={match}
                                                    />
                                                ) : null}
                                            </p>
                                        </div>
                                    </div>
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
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                            }}
                                        />{' '}
                                        <div className="ms-1">
                                            <p className="fw-bold mb-1">
                                                {match?.local?.name}
                                                {match?.sport?._id ===
                                                ID_BASEBALL ? (
                                                    <CardStandingLocal
                                                        match={match}
                                                    />
                                                ) : null}
                                            </p>
                                        </div>
                                    </div>
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
                        className="btn btn-dark btn-sm my-1"
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
                            className="btn btn-dark btn-sm my-1"
                            style={{ fontSize: '12px' }}
                            onClick={() => setShowLineUp(!showLineUp)}
                        >
                            <People /> Alineación
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
