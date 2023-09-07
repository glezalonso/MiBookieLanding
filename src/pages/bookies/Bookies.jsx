import React, { useEffect } from 'react'
import { useGetBookies } from '../../features/users.features'
import { useInView } from 'react-intersection-observer'
import { Badge, Spinner } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import SectionBookies from './components/SectionBookies'
import Loading from '../../ui/Loading'

const Bookies = () => {
    const { ref, inView } = useInView()
    const {
        data,
        isLoading,
        isError,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetBookies()

    const users = data?.pages?.flatMap((pages) => pages.data) ?? []

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

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
                        {data?.pages[0]?.total}
                    </Badge>
                </div>
                {users?.map((user) => (
                    <SectionBookies key={user?._id} user={user} />
                ))}
            </main>
            <div ref={ref}>
                {isFetchingNextPage ? (
                    <div className="flex justify-center items-center m-3">
                        <Spinner color="warning" />
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Bookies
