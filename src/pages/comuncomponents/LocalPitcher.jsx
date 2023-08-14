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
                            Lanzador: {player?.playerId?.fullName}
                        </span>
                    ) : (
                        <span
                            className=" text-xs font-semibold"
                            key={player?.playerId?._id}
                        >
                            Sin asignar
                        </span>
                    )
                )
            )}
        </>
    )
}

export default LocalPitcher
