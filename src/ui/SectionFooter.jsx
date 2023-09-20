import React from 'react'
import { Footer } from 'flowbite-react'
import logo from '../assets/mibookie.png'
import { Link } from 'react-router-dom'

const SectionFooter = () => {
    return (
        <>
            <Footer container className="w-full bg-gray-900 rounded-none  p-2">
                <div className="w-full flex justify-between items-center lg:w-3/4 mx-auto">
                    <div className="flex items-center ml-1">
                        <Footer.Brand
                            src={logo}
                            alt="Mi Bookie logo"
                            className="mr-1"
                        />
                        <span className="block mt-1 text-white sm:hidden">
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
                            className="hover:text-gray-300 hover:underline"
                        >
                            Condiciones de uso
                        </Link>
                        <Link
                            to={'../contact'}
                            className="hover:text-gray-300 hover:underline"
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
