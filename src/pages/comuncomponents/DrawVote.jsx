import React from 'react'
import { Button } from 'react-bootstrap'

const DrawVote = ({ match, handleVote }) => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <Button
                    size="sm"
                    variant="warning "
                    onClick={() => handleVote('draw', match?._id)}
                >
                    Votar
                </Button>
            </div>
        </>
    )
}

export default DrawVote
