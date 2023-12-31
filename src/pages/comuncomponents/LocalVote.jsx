import React from 'react'
import { Button } from 'flowbite-react'

const LocalVote = ({ match, handleVote }) => {
    return (
        <>
            <div className="flex justify-end">
                <Button
                    size="xs"
                    className="bg-cyan-950"
                    onClick={() => handleVote('local', match?._id)}
                >
                    Votar
                </Button>
            </div>
        </>
    )
}

export default LocalVote
