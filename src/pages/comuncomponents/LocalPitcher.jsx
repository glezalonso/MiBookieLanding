import React from 'react'

const LocalPitcher = ({ match }) => {
    const postion = 'Lanzador'
    return (
        <>
            {match?.lineup?.map((local) =>
                local?.local?.map((player) =>
                    player?.playerId?.position === postion ? (
                        <span
                            className=" text-xs font-semibold"
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

export default LocalPitcher
