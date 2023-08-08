import React from 'react'

const CardSport = ({ sport }) => {
    return (
        <>
            <section className="mx-2">
                <div className="mt-3 text-black">
                    <h4 className="flex mx-1">
                        <div className="my-1">
                            <img
                                className="w-8 h-8"
                                src={sport?.poster}
                                alt={sport?.sport}
                            />
                        </div>
                        <div className="mx-1 my-2">
                            <span className=" mx-1">{sport?.sport}</span>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}

export default CardSport
