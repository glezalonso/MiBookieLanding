import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown, Avatar } from 'flowbite-react'
import { useGetBookie } from '../features/users.features'
import avatar from '../icons/avatar.svg'

const DropdownUser = ({ username, id, handleLogOut }) => {
    const { data: user } = useGetBookie(id)
    return (
        <>
            <Dropdown
                className="p-1"
                inline
                label={
                    <Avatar
                        size={'sm'}
                        className=" sm:mt-1.5 sm:h-9"
                        alt={username}
                        img={user?.avatar || avatar}
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
        </>
    )
}

export default DropdownUser
