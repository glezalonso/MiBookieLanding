import React from 'react'

const LocalVotes = ({ match }) => {
    const votesaway = match?.votes?.filter?.((vote) => vote?.option === 'away')
    const voteslocal = match?.votes?.filter?.(
        (vote) => vote?.option === 'local'
    )
    const votesdraw = match?.votes?.filter?.((vote) => vote?.option === 'draw')

    const total = voteslocal.length + votesaway?.length + votesdraw?.length

    return (
        <>
            <p className="my-1">
                {match?.votes?.length > 0 ? (
                    <span>
                        ({voteslocal?.length})
                        {` ${Math.round((voteslocal?.length * 100) / total)} %`}
                    </span>
                ) : (
                    <span className="text-red-800 text-center">
                        No hay votos!
                    </span>
                )}
            </p>
        </>
    )
}

export default LocalVotes
