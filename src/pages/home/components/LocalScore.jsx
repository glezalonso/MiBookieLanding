import React from 'react'

const LocalScore = ({ match }) => {
    return (
        <>
            <strong>{match?.score?.map((score) => score?.local)}</strong>
        </>
    )
}

export default LocalScore
