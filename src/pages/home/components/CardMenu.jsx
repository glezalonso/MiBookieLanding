import React from 'react'
import { Button } from 'react-bootstrap'
import { ChatDots, People, GraphUp } from 'react-bootstrap-icons'

const CardMenu = ({
    match,

    handleComments,
    handleConsensus,
    handleLineUp,
}) => {
    return (
        <>
            <div className="border-top ">
                <Button
                    style={{ fontSize: '14px' }}
                    size="sm"
                    variant="light"
                    className="my-1 px-1"
                    onClick={() => handleComments()}
                >
                    <div className="d-flex align-items-center gap-1">
                        <ChatDots size={15} />
                        <span className="">
                            {match?.comments?.length}
                            <span className="mx-1">Comentario(s)</span>
                        </span>
                    </div>
                </Button>
                <Button
                    style={{ fontSize: '14px' }}
                    size="sm"
                    variant="light"
                    className="my-1 px-1"
                    onClick={() => handleConsensus()}
                >
                    <GraphUp className="mx-1" /> Votos
                </Button>
                {match?.lineup?.length > 0 ? (
                    <Button
                        style={{ fontSize: '14px' }}
                        size="sm"
                        variant="light"
                        className="my-1 px-1"
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
