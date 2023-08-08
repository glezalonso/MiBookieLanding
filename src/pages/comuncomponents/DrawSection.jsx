import React from 'react'
import draw from '../../assets/draw.png'
const DrawSection = () => {
    return (
        <>
            <div className="flex ">
                <div>
                    <img src={draw} alt="empate" className="h-5 w-5" />
                </div>
                <div className="mx-1  text-sm">
                    <span>Empate</span>
                </div>
            </div>
        </>
    )
}

export default DrawSection
