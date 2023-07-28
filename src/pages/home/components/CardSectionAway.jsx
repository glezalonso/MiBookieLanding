import React from 'react'
import CardStandingAway from './CardStandingAway'
const CardSectionAway = ({ match }) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <img
                    src={match?.away?.poster}
                    alt={match?.away?.name}
                    style={{
                        height: '30px',
                        width: '30px',
                    }}
                />
                <div className="mx-1">
                    <p className="fw-bold my-1">
                        {match?.away?.name}
                        <CardStandingAway match={match} />
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardSectionAway
