import React from 'react'
const TagOdds = ({ match, icon }) => {
    return (
        <>
            <div className="flex bg-white justify-between mb-1 gap-8 p-1 rounded-md border-2 border-gray-200 text-sm">
                <div className="justify-start">
                    <span className="text-xs text-gray-500">{icon}</span>
                </div>
                <div className="justify-end">
                    <span className="text-xs font-bold mx-1 text-gray-600">
                        {match}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TagOdds
