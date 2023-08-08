import React from 'react'
import CardStatus from './CardStatus'

const CardHeader = ({ match }) => {
    return (
        <>
            <div className="flex my-1 justify-between">
                <div className="block ml-2 justify-start">
                    <span className="text-gray-600 font-sans font-bold text-sm">
                        {match?.league?.league}
                    </span>
                </div>
                <div className="block mx-2 justify-end">
                    <CardStatus match={match} />
                </div>
            </div>
        </>
    )
}

export default CardHeader
