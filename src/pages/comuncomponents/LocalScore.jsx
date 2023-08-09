import React from 'react'

const LocalScore = ({ match }) => {
    return (
        <>
            <div className="my-1 text-xs font-bold">
                <strong>{match?.score?.map((score) => score?.local)}</strong>
            </div>
        </>
    )
}

export default LocalScore
