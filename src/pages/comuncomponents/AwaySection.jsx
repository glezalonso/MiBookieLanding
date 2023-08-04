import React from 'react'

const AwaySection = ({ match }) => {
    return (
        <>
            <div className="d-flex ">
                <div>
                    <img
                        src={match?.away?.poster}
                        alt={match?.away?.name}
                        style={{
                            height: '25px',
                            width: '25px',
                        }}
                    />
                </div>
                <div className="mx-1 my-1" style={{ fontSize: '13px' }}>
                    <span>{match?.away?.name}</span>
                </div>
            </div>
        </>
    )
}

export default AwaySection
