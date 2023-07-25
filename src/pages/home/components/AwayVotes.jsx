import React from 'react'

const AwayVotes = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )

    const total = voteslocal.length + votesaway.length

    return (
        <>
            <p className="my-1">
                ({votesaway?.length})
                <span className="bg-dark text-secondary mx-1">{`${Math.round(
                    (votesaway?.length * 100) / total
                )} %`}</span>
            </p>
        </>
    )
}

export default AwayVotes
