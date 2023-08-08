import React from 'react'

const CardSeason = ({ season }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex mx-1">
                        <div className="mt-1">
                            <img
                                className="h-12 w-12"
                                src={season.league?.poster}
                            />
                        </div>
                        <div>
                            <div className="mx-1 mt-1">
                                <span className=" mx-1 text-base">
                                    {season?.season}
                                </span>
                            </div>
                            <div className="mx-1 ">
                                <span className=" mx-1 text-sm">
                                    Estatus:
                                    {season?.status ? (
                                        <span className="text-green-400">
                                            Abierta
                                        </span>
                                    ) : (
                                        <span className="text-red-800">
                                            Cerrada
                                        </span>
                                    )}
                                </span>
                            </div>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}
export default CardSeason
