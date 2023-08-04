import React from 'react'

const CardStandingAway = ({ match }) => {
    const standingAway = match?.season?.standings?.filter(
        (team) => team.team === match.away._id
    )

    return (
        <>
            {standingAway?.map((team) => (
                <span
                    style={{ fontSize: '13px' }}
                    key={team?.team}
                    className="text-secondary"
                >
                    {team?.wins}-{team?.loses}
                </span>
            ))}
        </>
    )
}

export default CardStandingAway
