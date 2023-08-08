import React from 'react'
import { Badge } from 'flowbite-react'
import NavBar from '../../ui/Navbar'
import { useGetBookies } from '../../features/users.features'
import Loading from '../../ui/Loading'
import { toast } from 'react-hot-toast'
import SectionBookies from './components/SectionBookies'
import { useAuthStore } from '../../store/authorization'

const Bookies = () => {
    const { id } = useAuthStore((state) => state.profile)
    const { data, isLoading, isError } = useGetBookies()

    const users = data?.filter((user) => user?._id !== id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los Bookies!')

    return (
        <>
            <NavBar />
            <div className="container px-0 auto">
                <div className="mx-auto mt-2">
                    <div className="mx-auto lg:w-3/4">
                        <div className="flex mt-1 mx-2 ">
                            <h5 className="mt-1">Bookies</h5>
                            <Badge
                                size={'sm'}
                                className="mx-2 mb-2 bg-zinc-900 text-gray-200"
                            >
                                {users?.length}
                            </Badge>
                        </div>
                        {users?.map((user) => (
                            <SectionBookies key={user?._id} user={user} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Bookies
