import React from 'react'
const LocalOdd = ({ match }) => {
    return (
        <>
            <span className="my-1 text-sm font-semibold">{match?.oddHome}</span>
        </>
    )
}

export default LocalOdd
