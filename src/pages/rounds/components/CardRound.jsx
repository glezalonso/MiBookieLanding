import React from 'react'

const CardRound = ({ round }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex items-center mx-1">
                        <div className="mt-1">
                            <img
                                className="h-14 w-14"
                                src={round?.league?.poster}
                            />
                        </div>
                        <div>
                            <div className="mx-2  text-base">
                                <span>{round?.round}</span>
                            </div>
                            <div className="mx-2 text-sm ">
                                <span>Temporada: {round?.season?.season}</span>
                            </div>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}

export default CardRound
