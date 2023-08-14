import React, { useState } from 'react'
import { Dropdown, Navbar, Avatar, Button } from 'flowbite-react'
import { HouseDoor, Newspaper } from 'react-bootstrap-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
import Login from '../pages/home/components/Login'
import Register from '../pages/home/components/Register'
import logo from '../assets/mibookie.png'
import user from '../assets/user.png'

function NavBar() {
    const { username, id } = useAuthStore((state) => state.profile)
    const logOut = useAuthStore((state) => state.logOut)
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
            <Navbar fluid className="bg-zinc-950   lg:p-0  lg:h-16  ">
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

                <div className="flex p-1 text-white  sm:mt-2.5 sm:order-2 md:mx-auto">
                    {username ? (
                        <Dropdown
                            className="p-1"
                            inline
                            label={
                                <Avatar
                                    size={'sm'}
                                    className=" sm:mt-1.5 sm:h-9"
                                    alt={username}
                                    img={user}
                                />
                            }
                        >
                            <Dropdown.Item>
                                <Link
                                    className="text-sm text-gray-600 hover:underline hover:text-black"
                                    to={`../profile/${id}`}
                                >
                                    {username}
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                size="xs"
                                className="bg-yellow-400 rounded text-white text-sm p-1 mx-auto border-0 hover:bg-yellow-300 hover:text-black"
                                onClick={() => handleLogOut()}
                            >
                                Cerrar Sesión
                            </Dropdown.Item>
                        </Dropdown>
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
                <Navbar.Collapse className="m-0 ">
                    <Link
                        to={'/'}
                        className="inline-flex no-underline text-gray-500 hover:text-gray-200  sm:mt-3 md:hidden xl:block "
                    >
                        <div className="flex gap-1">
                            <div>
                                <HouseDoor
                                    color="grey"
                                    className="w-5 h-5 mr-1 sm:mr-0 2xl:mr-1"
                                />
                            </div>
                            <div>
                                <span> Inicio</span>
                            </div>
                        </div>
                    </Link>
                    {sports?.map((sport) => (
                        <Link
                            to={`../sports/${sport?._id}`}
                            key={sport?._id}
                            className="block  mt-2.5 sm:mt-3 no-underline text-gray-500 hover:text-gray-200  "
                        >
                            <div className="flex gap-1 ">
                                <div>
                                    <img
                                        className="w-5 h-5 mr-1 sm:mr-0 lg:mr-1"
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
                        className="inline-flex mt-2.5 sm:mt-3 no-underline text-gray-500 hover:text-gray-200 "
                    >
                        <div className="flex gap-1 ">
                            <div>
                                <Newspaper
                                    color="grey"
                                    className="h-5 w-5  mr-1 sm:mr-0 lg:mr-1"
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
