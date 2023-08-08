import React from 'react'
import CardStandingAway from './CardStandingAway'
const CardSectionAway = ({ match }) => {
    return (
        <>
            <div className="flex items-center">
                <div>
                    <img
                        src={match?.away?.poster}
                        alt={match?.away?.name}
                        className="h-9 w-9"
                    />
                </div>
                <div className="mx-1 ">
                    <div>
                        <span className="font-bold mx-1 text-gray-600 text-base">
                            {match?.away?.name}
                        </span>
                    </div>
                    <div className="mx-1">
                        <CardStandingAway match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionAway
