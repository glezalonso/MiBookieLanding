import React from 'react'

const TagOU = ({ match }) => {
    return (
        <>
            <div className="flex justify-between mb-1 w-2/4 mx-auto p-1 rounded-md border-2 border-gray-200 text-sm">
                <div>
                    <span className="justify-start-start text-sm text-gray-500">
                        Total:{match?.oddOverUnder?.split(' ', 1)}
                    </span>
                </div>
                <div>
                    <span className="justify-end flex gap-2   text-sm text-black font-semibold">
                        <div>{match?.oddOverUnder?.split(' ')[1]}</div>
                        <div>{match?.oddOverUnder?.split(' ')[2]}</div>
                    </span>
                </div>
            </div>
        </>
    )
}

export default TagOU
