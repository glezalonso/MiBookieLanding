import React from 'react'
import CardStandingLocal from './CardStandingLocal'

const CardSectionLocal = ({ match }) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <img
                    src={match?.local?.poster}
                    alt={match?.local?.name}
                    style={{
                        height: '30px',
                        width: '30px',
                    }}
                />
                <div className="mx-1">
                    <p className="fw-bold my-1">
                        {match?.local?.name}
                        <CardStandingLocal match={match} />
                    </p>
                </div>
            </div>
        </>
    )
}

export default CardSectionLocal
