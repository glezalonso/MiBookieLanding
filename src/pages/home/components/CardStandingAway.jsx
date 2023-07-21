import React from 'react'

const CardStandingAway = ({ match }) => {
    const standingAway = match?.season?.standings?.filter(
        (team) => team.team === match.away._id
    )

    return (
        <>
            {standingAway?.map((team) => (
                <span key={team?.team} className="mx-1 text-secondary">
                    {team?.wins}-{team?.loses}
                </span>
            ))}
        </>
    )
}

export default CardStandingAway
