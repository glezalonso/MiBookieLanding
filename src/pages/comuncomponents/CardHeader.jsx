import React from 'react'
import CardStatus from './CardStatus'

const CardHeader = ({ match }) => {
    return (
        <>
            <div className="flex justify-between ">
                <span className="ml-1 mb-0.5 text-gray-600  font-semibold text-sm ">
                    {match?.league?.league}
                </span>
                <div className="mr-1 mb-0.5">
                    <CardStatus match={match} />
                </div>
            </div>
        </>
    )
}

export default CardHeader
