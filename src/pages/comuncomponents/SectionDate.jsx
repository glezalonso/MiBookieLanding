import React from 'react'

const SectionDate = ({ match }) => {
    return (
        <>
            <div className="flex justify-center mt-1">
                {match?.date.slice(5).split('T', 3).join(' ')}
            </div>
        </>
    )
}

export default SectionDate
