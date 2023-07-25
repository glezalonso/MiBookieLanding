import React from 'react'

const LocalVotes = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )

    const total = voteslocal.length + votesaway.length

    return (
        <>
            <p>
                ({voteslocal?.length})
                <span className="bg-dark text-secondary mx-1">{`${
                    (voteslocal?.length * 100) / total
                } %`}</span>
            </p>
        </>
    )
}

export default LocalVotes
