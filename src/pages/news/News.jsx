import React, { useEffect } from 'react'
import { Alert, Spinner } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useGetNews } from '../../features/news.features'
import CardNew from './components/CardNew'
import Loading from '../../ui/Loading'
import { useInView } from 'react-intersection-observer'

const News = () => {
    const { ref, inView } = useInView()
    const {
        data,
        isError,
        isLoading,
        hasNextPage,
        isFetchingNextPage,
        fetchNextPage,
    } = useGetNews()

    const news = data?.pages?.flatMap((pages) => pages.data) ?? []

    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage()
        }
    }, [inView])

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las notcias!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-2 lg:w-3/5">
                {news?.length > 0 ? (
                    news?.map((content) => (
                        <CardNew key={content?._id} content={content} />
                    ))
                ) : (
                    <Alert color="warning">No hay noticias para mostrar!</Alert>
                )}
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
export default News
