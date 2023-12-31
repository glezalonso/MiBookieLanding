import React from 'react'

const TagOU = ({ match }) => {
    return (
        <>
            <div className="flex bg-white justify-between items-center mb-1 w-2/4 mx-auto p-1 rounded-md border-2 border-gray-200 text-sm lg:w-1/4">
                <div>
                    <span className="justify-start-start text-xs text-gray-500">
                        Total: {match?.oddOverUnder?.split(' ', 1)}
                    </span>
                </div>
                <div>
                    <span className="justify-end flex gap-4  text-xs font-bold mx-1 text-gray-600">
                        <div>{match?.oddOverUnder?.split(' ')[1]}</div>
                        <div>{match?.oddOverUnder?.split(' ')[2]}</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default TagOU
