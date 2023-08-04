import React from 'react'

const AwayScore = ({ match }) => {
    return (
        <>
            <div className="my-1">
                <strong>{match?.score?.map((score) => score?.away)}</strong>
            </div>
        </>
    )
}

export default AwayScore
