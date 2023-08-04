import React from 'react'
import { Button } from 'react-bootstrap'

const LocalVote = ({ match, handleVote }) => {
    return (
        <>
            <div className="d-flex justify-content-end">
                <Button
                    style={{ fontSize: '14px' }}
                    size="sm"
                    variant="warning "
                    onClick={() => handleVote('local', match?._id)}
                >
                    Votar
                </Button>
            </div>
        </>
    )
}

export default LocalVote
