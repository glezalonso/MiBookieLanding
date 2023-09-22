import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Avatar } from 'flowbite-react'
import { useGetBookie } from '../features/users.features'
import BookiesFirends from '../pages/home/components/BookiesFriends'
import avatar from '../icons/avatar.svg'
import { PersonCircle } from 'react-bootstrap-icons'
import bookies from '../icons/bookies.svg'
import trophytour from '../icons/trophytour.svg'

const DropdownUser = ({ username, id, handleLogOut }) => {
    const { data: user } = useGetBookie(id)
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    return (
        <>
            <Dropdown
                className="p-2 "
                inline
                label={
                    <Avatar
                        size={'sm'}
                        className="sm:mt-1.5 sm:h-9"
                        alt={username}
                        img={user?.avatar || avatar}
                    />
                }
            >
                <Dropdown.Item className="p-1 mb-1 mx-auto flex ">
                    <Link
                        className="flex gap-1 text-sm text-gray-600 hover:underline hover:text-cyan-500"
                        to={`../profile/${id}`}
                    >
                        <PersonCircle className="h-5 w-5" /> {username}
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className="p-1 mb-1 mx-auto flex ">
                    <Link
                        className="flex gap-1 text-sm text-gray-600 hover:underline hover:text-cyan-500"
                        to={`../tournaments`}
                    >
                        <img
                            src={trophytour}
                            alt="Bookies icon"
                            className="h-5 w-5"
                        />
                        Torneos
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item className="p-1 mb-1  mx-auto flex">
                    <Link
                        className="flex gap-1 text-sm text-gray-600 hover:underline hover:text-cyan-500"
                        onClick={() => handleShow()}
                    >
                        <img
                            src={bookies}
                            alt="Bookies icon"
                            className="h-5 w-5"
                        />
                        Bookies
                    </Link>
                </Dropdown.Item>
                <Dropdown.Item
                    size="xs"
                    className="bg-yellow-400 rounded text-white flex justify-center text-sm p-1 mx-auto border-0 hover:bg-yellow-300 hover:text-black"
                    onClick={() => handleLogOut()}
                >
                    <span className="text-center"> Cerrar Sesión</span>
                </Dropdown.Item>
            </Dropdown>
            <BookiesFirends user={user} show={show} handleClose={handleClose} />
        </>
    )
}

export default DropdownUser
