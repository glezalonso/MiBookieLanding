import React from 'react'

const LocalSection = ({ match }) => {
    return (
        <>
            <div className="flex my-1 ">
                <div>
                    <img
                        src={match?.local?.poster}
                        alt={match?.local?.name}
                        className="h-5 w-5"
                    />
                </div>
                <div className="mx-1 text-sm">
                    <span>{match?.local?.name}</span>
                </div>
            </div>
        </>
    )
}

export default LocalSection
