import React from 'react'

const ButtonPill = ({ active, img, onClick, children }) => {
    return (
        <>
            <button
                className={`${
                    active
                        ? 'bg-gray-800 text-gray-300'
                        : 'text-gray-950 bg-white hover:bg-gray-800 hover:text-gray-300'
                } flex items-center  rounded-2xl text-sm px-3 py-1.5`}
                onClick={onClick}
            >
                <img
                    src={img}
                    alt="yesterday"
                    className="h-4 w-4 mr-0.5 mt-0.5"
                />
                {children}
            </button>
        </>
    )
}

export default ButtonPill