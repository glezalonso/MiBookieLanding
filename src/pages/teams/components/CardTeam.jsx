import React from 'react'

const CardTeam = ({ team }) => {
    return (
        <>
            <section className="flex justify-center  text-black my-3">
                <div className="flex my-2 justify-start">
                    <div>
                        <img
                            className="w-24 h-24"
                            src={team?.poster}
                            alt={`image ${team?.name}`}
                        />
                    </div>

                    <div className="mt-1 mx-1">
                        <h4 className="mt-1">{team?.name}</h4>
                        <p className="my-1">Estadio: {team?.stadium}</p>
                        <p className="my-1">Deporte: {team?.sport?.sport}</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CardTeam
