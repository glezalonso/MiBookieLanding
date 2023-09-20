import React from 'react'
import banner from '../assets/banner.jpg'
import { useNavigate } from 'react-router-dom'

const SectionBanner = () => {
    const SEASON_NFL = '649368824dfcfb3be10b483f'
    const navigate = useNavigate()

    return (
        <div className="flex justify-center bg-gray-900">
            <img
                onClick={() => navigate(`../tournaments/${SEASON_NFL}`)}
                src={banner}
                alt="banner"
                className="w-3/4 h-full self-center  rounded-md bgr"
            />
        </div>
    )
}

export default SectionBanner
