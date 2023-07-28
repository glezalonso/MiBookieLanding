import React from 'react'

const AwayScore = ({ match }) => {
    return (
        <>
            <strong>{match?.score?.map((score) => score?.away)}</strong>
        </>
    )
}

export default AwayScore
