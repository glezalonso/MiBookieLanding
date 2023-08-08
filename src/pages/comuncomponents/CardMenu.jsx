import React from 'react'
import { Button } from 'flowbite-react'
import { ChatDots, People, GraphUp } from 'react-bootstrap-icons'

const CardMenu = ({ match, handleComments, handleConsensus, handleLineUp }) => {
    return (
        <>
            <div className=" flex justify-start gap-1 border-t-2 ">
                <Button
                    pill
                    size="xs"
                    color="gray"
                    className=" text-gray-600 mt-1"
                    onClick={() => handleComments()}
                >
                    <div className="flex items-center gap-1">
                        <ChatDots size={15} />
                        <span className="">
                            {match?.comments?.length}
                            <span className="mx-1">Comentario(s)</span>
                        </span>
                    </div>
                </Button>
                <Button
                    pill
                    size="xs"
                    color="gray"
                    className=" text-gray-600 mt-1"
                    onClick={() => handleConsensus()}
                >
                    <GraphUp className="mx-1" /> Votos
                </Button>
                {match?.lineup?.length > 0 ? (
                    <Button
                        pill
                        size="xs"
                        color="gray"
                        className=" text-gray-600 mt-1"
                        onClick={() => handleLineUp()}
                    >
                        <People className="mx-1" /> Alineación
                    </Button>
                ) : null}
            </div>
        </>
    )
}

export default CardMenu
