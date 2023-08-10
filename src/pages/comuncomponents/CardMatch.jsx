import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { useNavigate } from 'react-router-dom'
import CardLineUp from './CardLineUp'
import CardComments from './CardComments'
import CardConsensus from './CardConsensus'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardSectionAway from './CardSectionAway'
import CardSectionLocal from './CardSectionLocal'
import AwayOdd from './AwayOdd'
import AwayScore from './AwayScore'
import LocalOdd from './LocalOdd'
import LocalScore from './LocalScore'
import CardMenu from './CardMenu'

const CardMatch = ({ match }) => {
    const [showComments, setShowComments] = useState(false)
    const [showLineUp, setShowLineUp] = useState(false)
    const [showConsensus, setShowConsensus] = useState(false)
    const [showOdds, setShowOdds] = useState(false)

    const navigate = useNavigate()

    const handleComments = () => {
        setShowComments(!showComments)
        setShowLineUp(false)
        setShowConsensus(false)
        setShowOdds(false)
    }
    const handleLineUp = () => {
        setShowComments(false)
        setShowLineUp(!showLineUp)
        setShowConsensus(false)
        setShowOdds(false)
    }
    const handleConsensus = () => {
        setShowComments(false)
        setShowLineUp(false)
        setShowConsensus(!showConsensus)
        setShowOdds(false)
    }

    const handleOdds = () => {
        setShowComments(false)
        setShowLineUp(false)
        setShowConsensus(false)
        setShowOdds(!showOdds)
    }

    return (
        <>
            <div className="  max-w-full bg-white  border-gray-200 my-1 p-2 rounded-lg hover:shadow-lg">
                <CardHeader match={match} />
                <Table className="table-auto my-1 text-xs">
                    <Table.Body
                        className="border-b-inherit "
                        onClick={() => navigate(`../matches/${match?._id}`)}
                    >
                        <Table.Row>
                            <Table.Cell className="p-2">
                                <CardSectionAway match={match} />
                            </Table.Cell>
                            {showOdds ? (
                                <Table.Cell className="p-2 text-center ">
                                    <AwayOdd match={match} />
                                </Table.Cell>
                            ) : null}
                            <Table.Cell className="p-2 text-center ">
                                <AwayScore match={match} />
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell className="p-2">
                                <CardSectionLocal match={match} />
                            </Table.Cell>
                            {showOdds ? (
                                <Table.Cell className="p-2 text-center ">
                                    <LocalOdd match={match} />
                                </Table.Cell>
                            ) : null}
                            <Table.Cell className="p-2 text-center ">
                                <LocalScore match={match} />
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <CardMenu
                    match={match}
                    handleComments={handleComments}
                    handleLineUp={handleLineUp}
                    handleConsensus={handleConsensus}
                    handleOdds={handleOdds}
                />

                {showLineUp ? <CardLineUp match={match} /> : null}

                {showComments ? <CardComments match={match} /> : null}

                {showConsensus ? <CardConsensus match={match} /> : null}

                {showComments ? <CardFooter match={match} /> : null}
            </div>
        </>
    )
}
export default CardMatch
