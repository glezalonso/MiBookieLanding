import React from 'react'

const TagOU = ({ match }) => {
    return (
        <>
            <div className="p-1  w-2/4 mx-auto flex justify-between rounded-md border-2 border-gray-200 text-sm text-center text-gray-500">
                <div>
                    <span className="text-sm text-gray-500">
                        {match?.oddOverUnder?.split(' ', 1)}
                    </span>
                </div>
                <div>
                    <span className="flex  gap-2   text-sm text-black font-semibold">
                        <div>{match?.oddOverUnder?.split(' ')[1]}</div>
                        <div>{match?.oddOverUnder?.split(' ')[2]}</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default TagOU
