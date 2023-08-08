import React from 'react'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex mx-1">
                        <div className="mt-1">
                            <img
                                className="h-12 w-12"
                                src={round?.league?.poster}
                            />
                        </div>
                        <div>
                            <div className="mx-1 mt-1">
                                <span className=" mx-1 text-base">
                                    {round?.round}
                                </span>
                            </div>
                            <div className="mx-1 ">
                                <span className=" mx-1 text-sm">
                                    Temporada: {round?.season?.season}
                                </span>
                            </div>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}

export default CardRound
