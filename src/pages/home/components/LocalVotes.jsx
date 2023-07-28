import React from 'react'

const LocalVotes = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )

    const total = voteslocal.length + votesaway.length

    return (
        <>
            <p className="my-1">
                ({voteslocal?.length})
                <span className="text-secondary mx-1">{`${Math.round(
                    (voteslocal?.length * 100) / total
                )} %`}</span>
            </p>
        </>
    )
}

export default LocalVotes
