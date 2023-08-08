import React from 'react'
import CardStandingLocal from './CardStandingLocal'

const CardSectionLocal = ({ match }) => {
    return (
        <>
            <div className="flex items-center  ">
                <div>
                    <img
                        src={match?.local?.poster}
                        alt={match?.local?.name}
                        className="h-9 w-9"
                    />
                </div>
                <div className="mx-1 ">
                    <div>
                        <span className="font-bold mx-1 text-gray-600 text-base">
                            {match?.local?.name}
                        </span>
                    </div>
                    <div className="mx-1">
                        <CardStandingLocal match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionLocal
