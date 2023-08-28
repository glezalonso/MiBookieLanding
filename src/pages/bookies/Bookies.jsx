import React from 'react'
import { useGetBookies } from '../../features/users.features'
import { useAuthStore } from '../../store/authorization'
import { Badge } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import SectionBookies from './components/SectionBookies'
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
                <div className="flex my-2 mx-2 items-center gap-0.5">
                    <h5 className="mt-1">Bookies</h5>
                    <Badge
                        size={'xs'}
                        className=" mt-1.5 bg-zinc-900 text-gray-200 "
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
