import React, { useState } from 'react'
import { Dropdown, Navbar, Avatar, Button } from 'flowbite-react'
import { HouseDoor, Newspaper } from 'react-bootstrap-icons'
import Login from '../pages/home/components/Login'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/authorization'
import { useGetSports } from '../features/sports.features'
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
            <Navbar
                fluid
                className="bg-zinc-950 w-full md:p-0 md:h-16 2xl:w-4/5 2xl:mx-auto  "
            >
                <Navbar.Brand className="no-underline mr-auto md:mt-2.5  text-gray-400">
                    <img
                        alt="mibookie"
                        className="mr-1 h-6 mt-1.5 sm:h-9"
                        src={logo}
                    />
                    <span className="text-md mt-2.5 font-semibol">
                        Mi Bookie
                    </span>
                </Navbar.Brand>

                <div className="flex md:mt-2.5 md:order-2 ml-auto">
                    {username ? (
                        <Dropdown
                            inline
                            label={<Avatar alt={username} img={user} />}
                        >
                            <Dropdown.Item>
                                <Link
                                    className="text-sm  text-gray-600 hover:underline"
                                    to={`../profile/${id}`}
                                >
                                    {username}
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item
                                size="xs"
                                className="bg-yellow-400 rounded text-white text-sm p-1 mx-auto border-0 hover:bg-yellow-200 hover:text-gray-400"
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
                <Navbar.Collapse>
                    <Link
                        to={'/'}
                        className="mt-5 no-underline text-gray-500 hover:text-gray-200"
                    >
                        <div className="flex">
                            <div>
                                <HouseDoor color="grey" className="w-5 h-5" />
                            </div>
                            <div>
                                <span className="mx-1"> Inicio</span>
                            </div>
                        </div>
                    </Link>
                    {sports?.map((sport) => (
                        <Link
                            to={`../sports/${sport?._id}`}
                            key={sport?._id}
                            className="mt-5 no-underline text-gray-500 hover:text-gray-200  "
                        >
                            <div className="flex">
                                <div>
                                    <img
                                        className="w-5 h-5"
                                        src={sport?.poster}
                                        alt={sport?.sport}
                                    />
                                </div>
                                <div>
                                    <span className="mx-0.5">
                                        {sport?.sport}
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                    <Link
                        to={'../news'}
                        className="mt-5 no-underline text-gray-500 hover:text-gray-200 "
                    >
                        <div className="flex">
                            <div>
                                <Newspaper
                                    color="grey"
                                    width={'20px'}
                                    height={'20px'}
                                />
                            </div>
                            <div>
                                <span className="mx-1"> Noticias</span>
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
