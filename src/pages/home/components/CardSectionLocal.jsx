import React from 'react'
import CardStandingLocal from './CardStandingLocal'

const CardSectionLocal = ({ match }) => {
    return (
        <>
            <div className="d-flex align-items-center ">
                <div>
                    <img
                        src={match?.local?.poster}
                        alt={match?.local?.name}
                        style={{
                            height: '35px',
                            width: '35px',
                        }}
                    />
                </div>
                <div className="mx-2">
                    <div>
                        <span className="fw-bold text-muted fs-6">
                            {match?.local?.name}
                        </span>
                    </div>
                    <div>
                        <CardStandingLocal match={match} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardSectionLocal
