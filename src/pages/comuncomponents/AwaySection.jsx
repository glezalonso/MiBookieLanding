import React from 'react'

const AwaySection = ({ match }) => {
    return (
        <>
            <div className="flex my-1 ">
                <div>
                    <img
                        src={match?.away?.poster}
                        alt={match?.away?.name}
                        className="h-5 w-5"
                    />
                </div>
                <div className="mx-1  text-sm">
                    <span>{match?.away?.name}</span>
                </div>
            </div>
        </>
    )
}

export default AwaySection
