import React from 'react'
import draw from '../../assets/draw.png'
const DrawSection = () => {
    return (
        <>
            <div className="d-flex ">
                <div>
                    <img
                        src={draw}
                        alt="empate"
                        style={{
                            height: '25px',
                            width: '25px',
                        }}
                    />
                </div>
                <div className="mx-1 my-1" style={{ fontSize: '13px' }}>
                    <span>Empate</span>
                </div>
            </div>
        </>
    )
}

export default DrawSection
