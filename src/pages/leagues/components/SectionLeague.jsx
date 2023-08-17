import React from 'react'

const SectionLeague = ({ league }) => {
    return (
        <>
            <section>
                <div className=" mt-2 text-black">
                    <h4 className="flex items-center mx-1">
                        <div className="">
                            <img className="h-14 w-h-14" src={league?.poster} />
                        </div>
                        <div className=" mx-2">
                            <span>{league?.league}</span>
                        </div>
                    </h4>
                </div>
            </section>
        </>
    )
}

export default SectionLeague
