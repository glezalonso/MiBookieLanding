import React from 'react'
import CardStandingAway from './CardStandingAway'
import { useNavigate } from 'react-router-dom'
import AwayPitcher from './AwayPitcher'

const CardSectionAway = ({ match }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center">
                <div>
                    <img
                        src={match?.away?.poster || match?.sport?.poster}
                        alt={match?.away?.name}
                        className="h-8 w-8"
                    />
                </div>

                <div
                    onClick={() => navigate(`../teams/${match?.away?._id}`)}
                    className="mx-1 hover:cursor-pointer hover:scale-105 hover:mx-2 "
                >
                    <div>
                        <span className="font-bold mx-1 text-gray-600 text-sm">
                            {match?.away?.name}
                        </span>
                    </div>
                    <div className=" flex gap-1 mx-1">
                        <CardStandingAway match={match} />
                        <AwayPitcher match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionAway
