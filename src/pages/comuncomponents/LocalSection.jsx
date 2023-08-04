import React from 'react'

const LocalSection = ({ match }) => {
    return (
        <>
            <div className="d-flex ">
                <div>
                    <img
                        src={match?.local?.poster}
                        alt={match?.local?.name}
                        style={{
                            height: '25px',
                            width: '25px',
                        }}
                    />
                </div>
                <div className="mx-1 my-1" style={{ fontSize: '13px' }}>
                    <span>{match?.local?.name}</span>
                </div>
            </div>
        </>
    )
}

export default LocalSection
