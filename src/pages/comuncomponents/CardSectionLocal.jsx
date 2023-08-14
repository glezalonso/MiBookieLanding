import React from 'react'
import CardStandingLocal from './CardStandingLocal'
import { useNavigate } from 'react-router-dom'
import LocalPitcher from './LocalPitcher'

const CardSectionLocal = ({ match }) => {
    const navigate = useNavigate()

    return (
        <>
            <div
                onClick={() => navigate(`../teams/${match?.local?._id}`)}
                className="flex items-center hover:cursor-pointer "
            >
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
                    <div className="mx-1">
                        <LocalPitcher match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionLocal
