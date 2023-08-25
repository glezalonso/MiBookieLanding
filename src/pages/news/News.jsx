import React, { useEffect } from 'react'
import { Alert } from 'flowbite-react'
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
            <main className="container mx-auto min-h-screen p-1 lg:w-3/5">
                <div className="flex mt-3 justify-between mx-auto ">
                    <h5 className="my-2 ml-2">Noticias</h5>
                </div>
                {news?.length > 0 ? (
                    news?.map((content) => (
                        <CardNew key={content?._id} content={content} />
                    ))
                ) : (
                    <Alert color="warning">No hay noticias para mostrar!</Alert>
                )}
            </main>
            <div ref={ref}>{isFetchingNextPage ? <Loading /> : null}</div>
        </>
    )
}
export default News
