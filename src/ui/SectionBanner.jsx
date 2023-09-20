import React from 'react'
import banner from '../assets/banner.jpg'

const SectionBanner = () => {
    return (
        <div className="flex justify-center bg-gray-900">
            <img
                src={banner}
                alt="banner"
                className="w-3/4 h-full self-center  rounded-md bgr"
            />
        </div>
    )
}

export default SectionBanner
