import React from 'react'
import { Button } from 'react-bootstrap'

const AwayVote = ({ match, handleVote }) => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <Button
                    size="sm"
                    variant="warning "
                    onClick={() => handleVote('away', match?._id)}
                >
                    Votar
                </Button>
            </div>
        </>
    )
}

export default AwayVote
