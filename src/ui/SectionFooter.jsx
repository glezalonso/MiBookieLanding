import React from 'react'
import { Footer } from 'flowbite-react'
import logo from '../assets/mibookie.png'
import { Link, useNavigate } from 'react-router-dom'
import { useGetLeagues } from '../features/leagues.features'

const SectionFooter = () => {
    const { data: leagues } = useGetLeagues()
    const navigate = useNavigate()

    return (
        <>
            <Footer
                container
                className="w-full  flex flex-wrap border-t-2 space-y-4  rounded-none mt-3 p-2"
            >
                <div className="w-full flex flex-wrap justify-center items-center gap-6 lg:w-5/6 mx-auto">
                    <p className="flex justify-center w-full text-gray-600 font-bold font-sans text-lg">
                        ¡Entra, regístrate y participa!
                    </p>
                    {leagues?.map((league) => (
                        <img
                            onClick={() =>
                                navigate(`../leagues/${league?._id}`)
                            }
                            key={league?._id}
                            src={league?.poster}
                            alt={league?.league}
                            className="w-7 h-7 hover:scale-110"
                        />
                    ))}
                </div>
                <div className="w-full flex justify-between my-3 items-center lg:w-5/6 mx-auto">
                    <div className="flex items-center ml-1">
                        <Footer.Brand
                            src={logo}
                            alt="Mi Bookie logo"
                            className="mr-1"
                        />
                        <span className="block mt-1  text-gray-600 font-bold font-sans sm:hidden">
                            Mi Bookie
                        </span>

                        <Footer.Copyright
                            className="hidden sm:block"
                            by="www.mibookie.app"
                            year={2023}
                        />
                    </div>
                    <div className="flex justify-center gap-5 text-gray-500 text-sm mr-3">
                        <Link
                            to={'../about'}
                            className="hover:text-gray-800 hover:underline hover:scale-105"
                        >
                            Condiciones de uso
                        </Link>
                        <Link
                            to={'../contact'}
                            className="hover:text-gray-800 hover:underline hover:scale-105"
                        >
                            Contácto
                        </Link>
                    </div>
                </div>
            </Footer>
        </>
    )
}

export default SectionFooter
