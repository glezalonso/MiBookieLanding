import React from 'react'

const SectionLeague = ({ league }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex mx-1">
                        <div className="my-1">
                            <img className="h-12 w-12" src={league?.poster} />
                        </div>
                        <div className="mt-3.5 mx-1">
                            <span className=" mx-1">{league?.league}</span>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}

export default SectionLeague
