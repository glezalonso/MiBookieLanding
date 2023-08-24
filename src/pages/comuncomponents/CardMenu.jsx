import React from 'react'
import { Button } from 'flowbite-react'
// import { People } from 'react-bootstrap-icons'
import comments from '../../icons/comments.svg'
import votes from '../../icons/votes.svg'
import odds from '../../icons/odds.svg'
import h2h from '../../icons/h2h.svg'

const CardMenu = ({
    match,
    handleComments,
    handleConsensus,
    // handleLineUp,
    handleOdds,
    handleH2h,
}) => {
    return (
        <>
            <div className="flex justify-start gap-1 border-t-2 ">
                <Button
                    pill
                    size="xs"
                    color="gray"
                    className="text-gray-600 mt-1.5"
                    onClick={() => handleComments()}
                >
                    <div className="flex items-center">
                        <img
                            src={comments}
                            alt="comments"
                            className="h-4 w-4 mr-1"
                        />
                        <div className="flex gap-0.5">
                            <div>{match?.comments?.length}</div>
                            <div>Comentario(s)</div>
                        </div>
                    </div>
                </Button>
                <Button
                    pill
                    size="xs"
                    color="gray"
                    className="text-gray-600 mt-1.5"
                    onClick={() => handleConsensus()}
                >
                    <img src={votes} alt="vote" className="h-4 w-4 mr-1" />
                    Votos
                </Button>
                {/* {match?.lineup?.length > 0 ? (
                    <Button
                        pill
                        size="xs"
                        color="gray"
                        className=" text-gray-600 mt-1.5"
                        onClick={() => handleLineUp()}
                    >
                        <People className="mr-1" /> Alineación
                    </Button>
                ) : null} */}
                {match?.oddHome?.length && match?.oddAway?.length > 0 ? (
                    <Button
                        pill
                        size="xs"
                        color="gray"
                        className="text-gray-600 mt-1.5"
                        onClick={() => handleOdds()}
                    >
                        <img src={odds} alt="odds" className="h-4 w-4 mr-1" />
                        Cuotas
                    </Button>
                ) : null}
                <Button
                    pill
                    size="xs"
                    color="gray"
                    className="text-gray-600 mt-1.5"
                    onClick={() => handleH2h()}
                >
                    <img src={h2h} alt="vs" className="h-4 w-4 mr-1" />
                    Versus
                </Button>
            </div>
        </>
    )
}

export default CardMenu
