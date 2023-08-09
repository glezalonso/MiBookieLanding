import React from 'react'

const AwayScore = ({ match }) => {
    return (
        <>
            <div className="my-1 text-xs font-bold">
                <strong>{match?.score?.map((score) => score?.away)}</strong>
            </div>
        </>
    )
}

export default AwayScore
