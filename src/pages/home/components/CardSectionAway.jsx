import React from 'react'
import CardStandingAway from './CardStandingAway'
const CardSectionAway = ({ match }) => {
    return (
        <>
            <div className="d-flex align-items-center">
                <div>
                    <img
                        src={match?.away?.poster}
                        alt={match?.away?.name}
                        style={{
                            height: '35px',
                            width: '35px',
                        }}
                    />
                </div>
                <div className="mx-2  ">
                    <div>
                        <span className="fw-bold text-muted fs-6">
                            {match?.away?.name}
                        </span>
                    </div>
                    <div>
                        <CardStandingAway match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionAway
