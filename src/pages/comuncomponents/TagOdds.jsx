import React from 'react'
const TagOdds = ({ match, icon }) => {
    return (
        <>
            <div className="flex justify-between mb-1 gap-8 p-1 rounded-md border-2 border-gray-200 text-sm">
                <div className="justify-start">
                    <span className="text-xs text-gray-500">{icon}</span>
                </div>
                <div className="justify-end">
                    <span className="text-sx text-black font-semibold">
                        {match}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TagOdds
