import React from 'react'

const AwayVotes = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )

    const total = voteslocal.length + votesaway.length

    if (match?.votes?.length < 0) return null

    return (
        <>
            <p className="my-1">
                {match?.votes?.length > 0 ? (
                    <span>
                        ( {votesaway?.length})
                        {` ${Math.round((votesaway?.length * 100) / total)} %`}
                    </span>
                ) : (
                    <span className="text-danger text-center">
                        No hay votos!
                    </span>
                )}
            </p>
        </>
    )
}

export default AwayVotes
