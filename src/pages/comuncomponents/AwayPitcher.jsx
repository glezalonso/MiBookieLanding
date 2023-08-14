import React from 'react'

const AwayPitcher = ({ match }) => {
    const postion = 'Lanzador'

    return (
        <>
            {match?.lineup?.map((away) =>
                away?.away?.map((player) =>
                    player?.playerId?.position === postion ? (
                        <span
                            className="text-gray-400 text-xs font-semibold"
                            key={player?.playerId?._id}
                        >
                            (L) {player?.playerId?.fullName}
                        </span>
                    ) : null
                )
            )}
        </>
    )
}

export default AwayPitcher
