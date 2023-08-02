import React, { useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CardLineUp from './CardLineUp'
import CardComments from './CardComments'
import CardConsensus from './CardConsensus'
import CardFooter from './CardFooter'
import CardStatus from './CardStatus'
import CardSectionAway from './CardSectionAway'
import CardSectionLocal from './CardSectionLocal'
import AwayScore from './AwayScore'
import LocalScore from './LocalScore'
import CardMenu from './CardMenu'

const CardMatch = ({ match }) => {
    const [showComments, setShowComments] = useState(false)
    const [showLineUp, setShowLineUp] = useState(false)
    const [showConsensus, setShowConsensus] = useState(false)

    const navigate = useNavigate()

    const handleComments = () => {
        setShowComments(!showComments)
        setShowLineUp(false)
        setShowConsensus(false)
    }
    const handleLineUp = () => {
        setShowComments(false)
        setShowLineUp(!showLineUp)
        setShowConsensus(false)
    }
    const handleConsensus = () => {
        setShowComments(false)
        setShowLineUp(false)
        setShowConsensus(!showConsensus)
    }

    return (
        <>
            <Card className="shadow-lg my-2">
                <Card.Header className=" border-secondary rounded  border-bottom ">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex justify-content-start">
                            <span
                                style={{ fontSize: '14px' }}
                                className="text-secondary"
                            >
                                {match?.league?.league}
                            </span>
                        </div>
                        <div className="d-flex justify-content-end">
                            <CardStatus match={match} />
                        </div>
                    </div>

                    <Table
                        responsive
                        size="sm"
                        borderless
                        variant="light my-1 "
                    >
                        <tbody
                            onClick={() => navigate(`../matches/${match?._id}`)}
                        >
                            <tr>
                                <td>
                                    <CardSectionAway match={match} />
                                </td>
                                <td className="text-center">
                                    <AwayScore match={match} />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <CardSectionLocal match={match} />
                                </td>
                                <td className="text-center">
                                    <LocalScore match={match} />
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <CardMenu
                        match={match}
                        handleComments={handleComments}
                        handleLineUp={handleLineUp}
                        handleConsensus={handleConsensus}
                    />
                </Card.Header>
                {showLineUp ? <CardLineUp match={match} /> : null}

                {showComments ? <CardComments match={match} /> : null}

                {showConsensus ? <CardConsensus match={match} /> : null}

                {showComments ? <CardFooter match={match} /> : null}
            </Card>
        </>
    )
}
export default CardMatch
