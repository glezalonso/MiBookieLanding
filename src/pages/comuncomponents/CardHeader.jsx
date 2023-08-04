import React from 'react'
import CardStatus from './CardStatus'

const CardHeader = ({ match }) => {
    return (
        <>
            <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-start">
                    <span
                        style={{ fontSize: '14px' }}
                        className="text-secondary"
                    >
                        {match?.league?.league}
                    </span>
                </div>
                <div className="d-flex justify-content-end">
                    <CardStatus match={match} />
                </div>
            </div>
        </>
    )
}

export default CardHeader
