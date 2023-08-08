import React from 'react'

const CardStandingLocal = ({ match }) => {
    const standingAway = match?.season?.standings?.filter(
        (team) => team.team === match.local._id
    )

    return (
        <>
            {standingAway?.map((team) => (
                <span
                    style={{ fontSize: '13px' }}
                    key={team?.team}
                    className="text-gray-400 font-semibold"
                >
                    {team?.wins}-{team?.loses}
                </span>
            ))}
        </>
    )
}

export default CardStandingLocal
