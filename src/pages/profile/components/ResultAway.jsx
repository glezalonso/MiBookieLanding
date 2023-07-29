import React from 'react'

const ResultAway = ({ match }) => {
    return (
        <>
            <span> {match?.score?.map((away) => away?.away)}</span>
        </>
    )
}
export default ResultAway
