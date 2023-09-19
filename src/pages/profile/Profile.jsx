import React, { useState } from 'react'
import { Alert } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useParams } from 'react-router-dom'
import { useGetBookie } from '../../features/users.features'
import { useAuthStore } from '../../store/authorization'
import ButtonPill from '../comuncomponents/ButtonPill'
import SectionFollowers from './components/SectionFollowers'
import SectionFollows from './components/SectionFollows'
import CardProfile from './components/CardProfile'
import SectionRating from './components/SectionRating'
import follow from '../../icons/follow.svg'
import followers from '../../icons/followers.svg'
import Loading from '../../ui/Loading'
import field from '../../icons/filed.svg'
import SectionMatches from './components/SectionMatches'
import Tournaments from './components/Tournaments'

const Profile = () => {
    const { id } = useParams()
    const [key, setKey] = useState('partidos')
    const userId = useAuthStore((state) => state.profile.id)
    const { data: user, isLoading, isError } = useGetBookie(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Ha ocurrido un error al cargar el perfil')

    const exist = user?.followers?.filter(
        (follower) => follower?._id === userId
    )

    return (
        <>
            <main className="container w-full mx-auto min-h-screen p-1 xl:w-4/5">
                <div className="grid w-full mt-2.5 sm:grid-cols-5 sm:gap-3  ">
                    <div className=" col-span-5  sm:col-span-2">
                        <CardProfile user={user} />
                        <SectionRating user={user} />
                        <Tournaments user={user} />
                    </div>
                    <div className=" my-5 w-full col-span-5 justify-center mx-auto sm:col-span-3 ">
                        {id === userId || exist?.length > 0 ? (
                            <>
                                <div
                                    className="w-full flex flex-1 gap-1 justify-center mx-auto my-2 lg:gap-2 "
                                    role="group"
                                >
                                    <ButtonPill
                                        active={key === 'partidos'}
                                        img={field}
                                        onClick={() => setKey('partidos')}
                                    >
                                        Mis partidos
                                    </ButtonPill>

                                    {id === userId ? (
                                        <>
                                            <ButtonPill
                                                active={key === 'contactos'}
                                                img={follow}
                                                onClick={() =>
                                                    setKey('contactos')
                                                }
                                            >
                                                Contáctos
                                            </ButtonPill>
                                            <ButtonPill
                                                key={key === 'seguidores'}
                                                img={followers}
                                                onClick={() =>
                                                    setKey('seguidores')
                                                }
                                            >
                                                Seguidores
                                            </ButtonPill>
                                        </>
                                    ) : null}
                                </div>
                                <section>
                                    {key === 'partidos' ? (
                                        <SectionMatches user={user} />
                                    ) : null}

                                    {key === 'contactos' ? (
                                        <SectionFollows
                                            user={user}
                                            setKey={setKey}
                                        />
                                    ) : null}
                                    {key === 'seguidores' ? (
                                        <SectionFollowers
                                            user={user}
                                            setKey={setKey}
                                        />
                                    ) : null}
                                </section>
                            </>
                        ) : (
                            <Alert color={'warning'}>
                                No sigues a este bookie
                            </Alert>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Profile
