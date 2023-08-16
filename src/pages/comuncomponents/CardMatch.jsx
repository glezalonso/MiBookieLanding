import React, { useState } from 'react'
import { Table } from 'flowbite-react'
// import CardLineUp from './CardLineUp'
import CardComments from './CardComments'
import CardConsensus from './CardConsensus'
import CardFooter from './CardFooter'
import CardHeader from './CardHeader'
import CardSectionAway from './CardSectionAway'
import CardSectionLocal from './CardSectionLocal'
import AwayScore from './AwayScore'
import LocalScore from './LocalScore'
import CardMenu from './CardMenu'
import CardOdds from './CardOdds'

// Disable tag LineUp
const CardMatch = ({ match }) => {
    const [showComments, setShowComments] = useState(false)
    // const [showLineUp, setShowLineUp] = useState(false)
    const [showConsensus, setShowConsensus] = useState(false)
    const [showOdds, setShowOdds] = useState(false)

    const handleComments = () => {
        setShowComments(!showComments)
        // setShowLineUp(false)
        setShowConsensus(false)
        setShowOdds(false)
    }
    // const handleLineUp = () => {
    //     setShowComments(false)
    //     // setShowLineUp(!showLineUp)
    //     setShowConsensus(false)
    //     setShowOdds(false)
    // }
    const handleConsensus = () => {
        setShowComments(false)
        // setShowLineUp(false)
        setShowConsensus(!showConsensus)
        setShowOdds(false)
    }

    const handleOdds = () => {
        setShowComments(false)
        // setShowLineUp(false)
        setShowConsensus(false)
        setShowOdds(!showOdds)
    }

    return (
        <>
            <div className="  max-w-full bg-white  border-gray-200 mt-2  p-2 rounded-lg hover:shadow-xl ">
                <CardHeader match={match} />
                <Table className="table-auto mb-2 text-xs">
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
                <CardMenu
                    match={match}
                    handleComments={handleComments}
                    // handleLineUp={handleLineUp}
                    handleConsensus={handleConsensus}
                    handleOdds={handleOdds}
                />
                {showOdds ? <CardOdds match={match} /> : null}

                {/* {showLineUp ? <CardLineUp match={match} /> : null} */}

                {showComments ? <CardComments match={match} /> : null}

                {showConsensus ? <CardConsensus match={match} /> : null}

                {showComments ? <CardFooter match={match} /> : null}
            </div>
        </>
    )
}
export default CardMatch
