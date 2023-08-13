import React from 'react'
import { sport } from '../../const/sportconst'

const CardStandingLocal = ({ match }) => {
    const standingAway = match?.season?.standings?.filter(
        (team) => team.team === match.local._id
    )

    return (
        <>
            {standingAway?.map((team) => (
                <div
                    key={team?.team}
                    className="text-gray-400 text-xs font-semibold"
                >
                    <span>{team?.wins}-</span>
                    {match?.sport?._id === sport.ID_SOCCER ||
                        match?.sport?._id === sport?.ID_FUTBOL ? (
                        <>
                            <span>{team?.draws}-</span>
                            <span>{team?.loses}</span>
                        </>
                    ) : (
                        <span>{team?.loses}</span>
                    )}
                </div>
            ))}
        </>
    )
}

export default CardStandingLocal
