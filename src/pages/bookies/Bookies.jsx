import React from 'react'
import { Badge } from 'flowbite-react'
import { useGetBookies } from '../../features/users.features'
import { toast } from 'react-hot-toast'
import SectionBookies from './components/SectionBookies'
import { useAuthStore } from '../../store/authorization'
import Loading from '../../ui/Loading'

const Bookies = () => {
    const { id } = useAuthStore((state) => state.profile)
    const { data, isLoading, isError } = useGetBookies()

    const users = data?.filter((user) => user?._id !== id)
    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los Bookies!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <div className="flex mt-3 mx-2 ">
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
            </main>
        </>
    )
}

export default Bookies
