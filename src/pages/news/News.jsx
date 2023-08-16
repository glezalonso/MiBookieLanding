import React, { useState } from 'react'
import Loading from '../../ui/Loading'
import { Alert, Select } from 'flowbite-react'
import { toast } from 'react-hot-toast'
import { useGetNews } from '../../features/news.features'
import { useGetSports } from '../../features/sports.features'
import CardNew from './components/CardNew'
import NavBar from '../../ui/Navbar'

const News = () => {
    const { data: news, isLoading, isError } = useGetNews()
    const { data: sports } = useGetSports()
    const [filter, setFilter] = useState('')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las notcias!')

    const filterNews = news?.filter((content) => {
        if (!filter) return content
        return content?.league?.sport
            ?.toLowerCase()
            .includes(filter.toLowerCase())
    })

    return (
        <>
            <NavBar />
            <div className="container mx-auto  lg:w-3/4">
                <div className="flex mt-3 justify-between mx-auto ">
                    <h5 className="my-2 ml-2">Noticias</h5>

                    <Select
                        className="rounded w-50"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="6">Todos</option>

                        {sports?.map((sport) => (
                            <option key={sport?._id} value={sport?._id}>
                                {sport?.sport}
                            </option>
                        ))}
                    </Select>
                </div>
                {filterNews?.length > 0 ? (
                    filterNews?.map((content) => (
                        <CardNew key={content?._id} content={content} />
                    ))
                ) : (
                    <Alert color="warning">No hay noticias para mostrar!</Alert>
                )}
            </div>
        </>
    )
}
export default News
