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
                {match?.votes?.length > 0 ? (
                    <span>
                        {voteslocal?.length}
                        {`${Math.round((voteslocal?.length * 100) / total)} %`}
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

export default LocalVotes
