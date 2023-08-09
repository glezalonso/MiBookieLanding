import React, { useState } from 'react'
import NavBar from '../../ui/Navbar'
import { Button, Select } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import SectionNext from './components/SectionNext'
import SectionLast from './components/SectionLast'
import SectionFollowers from './components/SectionFollowers'
import SectionFollows from './components/SectionFollows'
import CardProfile from './components/CardProfile'
import { useGetBookie } from '../../features/users.features'
import { PeopleFill, PersonCheckFill } from 'react-bootstrap-icons'
import SectionRating from './components/SectionRating'

const Profile = () => {
    const { id } = useParams()
    const { data: user } = useGetBookie(id)
    const [key, setKey] = useState('proximos')
    const [limit, setLimit] = useState(15)

    return (
        <>
            <NavBar />
            <div className="container px-0 mx-auto ">
                <div className="grid w-full mt-5 sm:grid-cols-5 sm:gap-1 xl:grid-col-4  ">
                    <div className=" col-span-5 mx-1 sm:col-span-2">
                        <CardProfile user={user} />
                        <SectionRating user={user} />
                    </div>
                    <div className="col-span-5 mx-1 sm:block sm:col-span-3  ">
                        <div
                            className="flex gap-3 mt-2 justify-center "
                            role="group"
                        >
                            <Button
                                pill
                                size="xs"
                                color="gray"
                                className=" text-gray-600 text-sm"
                                onClick={() => setKey('proximos')}
                            >
                                Próximos
                            </Button>
                            <Button
                                pill
                                size="xs"
                                color="gray"
                                className=" text-gray-600 text-sm"
                                onClick={() => setKey('ultimos')}
                            >
                                Últimos
                            </Button>
                            <Button
                                pill
                                size="xs"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('contactos')}
                            >
                                <PeopleFill color="dark" className="mx-1" />
                                Contáctos
                            </Button>

                            <Button
                                pill
                                size="xs"
                                color="gray"
                                className=" text-gray-600"
                                onClick={() => setKey('seguidores')}
                            >
                                <PersonCheckFill
                                    color="dark"
                                    className="mx-1"
                                />
                                Seguidores
                            </Button>
                        </div>
                        <section>
                            <div className="flex my-1 justify-end">
                                <Select
                                    className="rounded w-1/3 cap-1 text-xs"
                                    onChange={(e) => setLimit(e.target.value)}
                                >
                                    <option value="15">Últimos 15</option>
                                    <option value="30">Últimos 30</option>
                                    <option value="0">Todos</option>
                                </Select>
                            </div>
                            {key === 'proximos' ? (
                                <SectionNext id={id} limit={limit} />
                            ) : null}
                            {key === 'ultimos' ? (
                                <SectionLast id={id} limit={limit} />
                            ) : null}
                            {key === 'contactos' ? (
                                <SectionFollows user={user} setKey={setKey} />
                            ) : null}
                            {key === 'seguidores' ? (
                                <SectionFollowers user={user} setKey={setKey} />
                            ) : null}
                        </section>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
