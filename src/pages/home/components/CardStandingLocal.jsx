import React from 'react'

const CardStandingLocal = ({ match }) => {
    const standingAway = match?.season?.standings?.filter(
        (team) => team.team === match.local._id
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

export default CardStandingLocal
