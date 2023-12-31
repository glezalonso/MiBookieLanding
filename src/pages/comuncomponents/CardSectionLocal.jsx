import React from 'react'
import CardStandingLocal from './CardStandingLocal'
import { useNavigate } from 'react-router-dom'
import LocalPitcher from './LocalPitcher'

const CardSectionLocal = ({ match }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center">
                <div>
                    <img
                        src={match?.local?.poster || match?.sport?.poster}
                        alt={match?.local?.name}
                        className="h-8 w-8"
                    />
                </div>

                <div
                    onClick={() => navigate(`../teams/${match?.local?._id}`)}
                    className="mx-1 hover:cursor-pointer"
                >
                    <div>
                        <span className="font-bold mx-1 text-gray-600 text-sm  ">
                            {match?.local?.name}
                        </span>
                    </div>
                    <div className="flex gap-1 mx-1">
                        <CardStandingLocal match={match} />
                        <LocalPitcher match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionLocal
