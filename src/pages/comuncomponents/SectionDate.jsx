import React from 'react'

const SectionDate = ({ match }) => {
    return (
        <>
            <div className="d-flex justify-content-center mt-1">
                {match?.date.slice(5).split('T', 3).join(' ')}
            </div>
        </>
    )
}

export default SectionDate
