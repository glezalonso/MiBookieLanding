import React from 'react'
import CardStandingLocal from './CardStandingLocal'
import { useNavigate } from 'react-router-dom'
import LocalPitcher from './LocalPitcher'

const CardSectionLocal = ({ match }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className="flex items-center ">
                {match?.local?.poster ? (
                    <div>
                        <img
                            src={match?.local?.poster || match?.sport?.poster}
                            alt={match?.local?.name}
                            className="h-9 w-9"
                        />
                    </div>
                ) : null}
                <div
                    onClick={() => navigate(`../teams/${match?.local?._id}`)}
                    className="mx-1 hover:cursor-pointer hover:scale-105 hover:mx-2 "
                >
                    <div>
                        <span className="font-bold mx-1 text-gray-600 text-base  ">
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
