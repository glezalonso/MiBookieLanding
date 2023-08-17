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
                className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black lg:p-0  lg:h-16  "
            >
                <Link
                    to={'/'}
                    className="flex items-center no-underline text-white  mr-auto md:mt-1.5 md:mx-auto"
                >
                    <img
                        alt="mibookie"
                        className="mr-1 h-8 w-8 sm:mt-1.5 sm:h-9"
                        src={logo}
                    />
                    <span className="text-lg mt-1 sm:mt-2.5 font-semibol">
                        Mi Bookie
                    </span>
                </Link>

                <div className="flex p-1 text-white gap-2 sm:mt-2.5 sm:order-2 md:mx-auto">
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
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to={'/'}
                        className="inline-flex no-underline text-gray-400 hover:text-gray-200  sm:mt-3 md:hidden xl:block "
                    >
                        <div className="flex items-center gap-1">
                            <div>
                                <img
                                    src={home}
                                    alt="home"
                                    className="w-5 h-5 "
                                />
                            </div>
                            <div>
                                <span>Inicio</span>
                            </div>
                        </div>
                    </Link>
                    {sports?.map((sport) => (
                        <Link
                            to={`../sports/${sport?._id}`}
                            key={sport?._id}
                            className="block  mt-2.5 sm:mt-3 no-underline text-gray-400 hover:text-gray-200  "
                        >
                            <div className="flex items-center gap-1 ">
                                <div>
                                    <img
                                        className="w-5 h-5 "
                                        src={sport?.poster}
                                        alt={sport?.sport}
                                    />
                                </div>
                                <div>
                                    <span>{sport?.sport}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link
                        to={'../news'}
                        className="inline-flex mt-2.5 sm:mt-3 no-underline text-gray-400 hover:text-gray-200 "
                    >
                        <div className="flex items-center gap-1 ">
                            <div>
                                <img
                                    src={newspaper}
                                    alt="newspaper"
                                    className="h-5 w-5"
                                />
                            </div>
                            <div>
                                <span> Noticias</span>
                            </div>
                        </div>
                    </Link>
                </Navbar.Collapse>
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
