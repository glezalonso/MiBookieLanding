import React from 'react'

const CardSeason = ({ season }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex items-center mx-1">
                        <div>
                            <img
                                className="h-14 w-h-14"
                                src={season?.league?.poster}
                            />
                        </div>
                        <div>
                            <div className="mx-2 ">
                                <span className=" text-base">
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
