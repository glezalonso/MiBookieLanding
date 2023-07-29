import React from 'react'

const ResultLocal = ({ match }) => {
    return (
        <>
            <span> {match?.score?.map((local) => local?.local)}</span>
        </>
    )
}
export default ResultLocal
