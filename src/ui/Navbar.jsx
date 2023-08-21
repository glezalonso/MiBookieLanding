import React, { useState } from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
import Login from '../pages/home/components/Login'
import Register from '../pages/home/components/Register'
import logo from '../assets/mibookie.png'
import DropdownUser from './DropdownUser'
import newspaper from '../icons/newspaper.svg'
import home from '../icons/home.svg'

function NavBar() {
    const { username, id } = useAuthStore((state) => state.profile)
    const { logOut } = useAuthStore((state) => state)
    const { data: sports } = useGetSports()

    const navigate = useNavigate()

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    const [showRegister, setShowRegister] = useState(false)

    const handleCloseRegister = () => setShowRegister(false)

    const handleRegister = () => {
        setShowRegister(true)
        handleClose()
    }

    const handleLogOut = () => {
        logOut()
        navigate('/')
    }
    return (
        <>
            <Navbar
                fluid
                className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black p-2 "
            >
                <div className="w-full flex flex-wrap mx-auto justify-center items-center  lg:w-3/4 ">
                    <div className="flex mr-auto">
                        <Link
                            to={'/'}
                            className="flex items-center no-underline text-white hover:scale-105 hover:mb-1  "
                        >
                            <img
                                alt="mibookie"
                                className="mr-1 h-8 w-8 sm:mt-1.5 lg:h-9 lg:w-9"
                                src={logo}
                            />
                            <span className="text-lg mt-1 sm:mt-2.5 font-semibol">
                                Mi Bookie
                            </span>
                        </Link>
                    </div>
                    <div className="order-1 w-full flex mx-auto gap-1 justify-evenly items-center py-1  mt-1 lg:mt-3   text-gray-400 lg:w-2/3 lg:mx-auto lg:gap-7 lg:my-2   ">
                        <Link
                            to={'/'}
                            className="text-xs sm:flex sm:text-base sm:gap-1 hover:text-white hover:scale-105 "
                        >
                            <img
                                src={home}
                                alt="home"
                                className="w-5 h-5 mx-auto sm:w-6 sm:h-6"
                            />
                            <span>Inicio</span>
                        </Link>

                        {sports?.map((sport) => (
                            <Link
                                to={`../sports/${sport?._id}`}
                                key={sport?._id}
                                className="text-xs sm:flex sm:text-base sm:gap-1 hover:text-white hover:scale-105  "
                            >
                                <img
                                    className="w-5 h-5 mx-auto sm:w-6 sm:h-6"
                                    src={sport?.poster}
                                    alt={sport?.sport}
                                />

                                <span>{sport?.sport?.slice(0, 9)}</span>
                            </Link>
                        ))}
                        <Link
                            to={'../news'}
                            className="text-xs sm:flex sm:text-base sm:gap-1 hover:text-white hover:scale-105 "
                        >
                            <img
                                src={newspaper}
                                alt="newspaper"
                                className="w-5 h-5 mx-auto sm:w-6 sm:h-6"
                            />

                            <span>Noticias</span>
                        </Link>
                    </div>

                    <div className=" ml-auto lg:order-3     flex p-1 text-white gap-2 ">
                        {username ? (
                            <DropdownUser
                                username={username}
                                id={id}
                                handleLogOut={handleLogOut}
                            />
                        ) : (
                            <Button
                                size="xs"
                                color="warning"
                                className="text-sm mt-1.5 mx-1.5 border-0"
                                onClick={() => handleShow()}
                            >
                                Iniciar Sesión
                            </Button>
                        )}
                    </div>
                </div>
            </Navbar>
            <Register show={showRegister} handleClose={handleCloseRegister} />
            <Login
                show={show}
                handleClose={handleClose}
                handleRegister={handleRegister}
            />
        </>
    )
}

export default NavBar
