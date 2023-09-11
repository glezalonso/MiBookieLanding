import React, { useState } from 'react'
import { Navbar, Button } from 'flowbite-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
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
    const { data: sports, isLoading } = useGetSports()

    const navigate = useNavigate()
    const { pathname } = useLocation()

    const [show, setShow] = useState(false)
    const [showRegister, setShowRegister] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

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
            <Navbar fluid className="bg-gray-800 p-2 rounded-b-md  ">
                <div className="w-full flex flex-wrap justify-between items-center sm:flex-1">
                    <div className="flex items-center sm:mx-auto">
                        <Link
                            to={'/'}
                            className="flex items-center no-underline text-white hover:scale-110 "
                        >
                            <img
                                alt="mibookie"
                                className="mr-1 h-8 w-8 sm:mt-1.5 sm:h-9 sm:w-9"
                                src={logo}
                            />
                            <span className="self-center mt-1 text-lg whitespace-nowrap sm:mt-2.5 font-semibol">
                                Mi Bookie
                            </span>
                        </Link>
                    </div>
                    <div className="w-full flex justify-evenly gap-1 items-center order-1 mx-auto mt-3 mb-1 sm:mt-3  sm:w-max sm:gap-2 lg:gap-2.5 ">
                        <Link
                            to={'/'}
                            className={`${
                                pathname === '/'
                                    ? 'text-white scale-110'
                                    : ' text-gray-400'
                            } text-xs items-center lg:flex lg:gap-1 lg:text-sm  hover:text-white hover:scale-110`}
                        >
                            <img
                                src={home}
                                alt="home"
                                className="w-5 h-5 mx-auto "
                            />
                            Inicio
                        </Link>

                        {sports?.map((sport) => (
                            <Link
                                to={`../sports/${sport?._id}`}
                                key={sport?._id}
                                className={`${
                                    pathname === `/sports/${sport?._id}`
                                        ? 'text-white  scale-110'
                                        : ' text-gray-400'
                                } text-xs items-center lg:flex lg:gap-1 lg:text-sm  hover:text-white hover:scale-110`}
                            >
                                <img
                                    className="w-5 h-5 mx-auto "
                                    src={sport?.poster}
                                    alt={sport?.sport}
                                />

                                {sport?.sport?.slice(0, 9)}
                            </Link>
                        ))}
                        <Link
                            to={'../news'}
                            className={`${
                                pathname === '/news'
                                    ? 'text-white  scale-110'
                                    : ' text-gray-400'
                            } text-xs items-center lg:flex  lg:gap-1 lg:text-sm  hover:text-white hover:scale-110`}
                        >
                            <img
                                src={newspaper}
                                alt="newspaper"
                                className="w-5 h-5 mx-auto "
                            />
                            Noticias
                        </Link>
                    </div>

                    <div className="flex p-1 text-white ml-auto sm:ml-auto lg:mx-auto  sm:order-3 ">
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
