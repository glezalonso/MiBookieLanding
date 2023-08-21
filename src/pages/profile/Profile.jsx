import React, { useState } from 'react'
import { Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'
import { useGetBookie } from '../../features/users.features'
import { useAuthStore } from '../../store/authorization'
import SectionNext from './components/SectionNext'
import SectionLast from './components/SectionLast'
import SectionFollowers from './components/SectionFollowers'
import SectionFollows from './components/SectionFollows'
import CardProfile from './components/CardProfile'
import SectionRating from './components/SectionRating'
import SelectFilter from '../comuncomponents/SelectFilter'
import follow from '../../icons/follow.svg'
import followers from '../../icons/followers.svg'
import Loading from '../../ui/Loading'
import { toast } from 'react-hot-toast'

const Profile = () => {
    const { id } = useParams()
    const [key, setKey] = useState('proximos')
    const [limit, setLimit] = useState(15)
    const userId = useAuthStore((state) => state.profile.id)
    const { data: user, isLoading, isError } = useGetBookie(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Ha ocurrido un error al cargar el perfil')
    return (
        <>
            <main className="container mx-auto lg:w-3/4 p-1">
                <div className="grid w-full mt-2.5 sm:grid-cols-5 sm:gap-3  ">
                    <div className=" col-span-5  sm:col-span-2">
                        <CardProfile user={user} />
                        <SectionRating user={user} />
                    </div>
                    <div className="col-span-5  sm:block sm:col-span-3  ">
                        <div
                            className="flex gap-1  mt-2 justify-center "
                            role="group"
                        >
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('proximos')}
                            >
                                Próximos
                            </Button>
                            <Button
                                size="sm"
                                pill
                                color="gray"
                                className="p-0 sm:px-4 "
                                onClick={() => setKey('ultimos')}
                            >
                                Últimos
                            </Button>
                            {id === userId ? (
                                <>
                                    <Button
                                        size="sm"
                                        pill
                                        color="gray"
                                        className="p-0 sm:px-4 "
                                        onClick={() => setKey('contactos')}
                                    >
                                        <img
                                            src={follow}
                                            alt="contacto"
                                            className="h-4 w-4 mr-0.5 mt-0.5"
                                        />
                                        Contáctos
                                    </Button>

                                    <Button
                                        size="sm"
                                        pill
                                        color="gray"
                                        className="p-0 sm:px-4 "
                                        onClick={() => setKey('seguidores')}
                                    >
                                        <div>
                                            <img
                                                src={followers}
                                                alt="seguidores"
                                                className="h-4 w-4 mr-0.5 mt-0.5"
                                            />
                                        </div>
                                        Seguidores
                                    </Button>
                                </>
                            ) : null}
                        </div>
                        <section>
                            <div className="flex my-1 mx-auto justify-end">
                                <SelectFilter setLimit={setLimit} />
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
            </main>
        </>
    )
}

export default Profile
