import React, { useState } from 'react'
import Loading from '../../../ui/Loading'
import { Alert, FormControl } from 'react-bootstrap'
import { toast } from 'react-hot-toast'
import { useGetNewsbySport } from '../../../features/news.features'
import CardNew from './CardNew'
const SectionNewsBySport = ({ sport }) => {
    const { data: news, isLoading, isError } = useGetNewsbySport(sport?._id)
    const [filter, setFilter] = useState('')

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar las notcias!')

    const filterNews = news?.filter((content) => {
        if (!filter) return content
        return (
            content?.sport?.sport
                ?.toLowerCase()
                .includes(filter.toLowerCase()) ||
            content?.title?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5 className="h7">Noticias</h5>
                <div className="m-2 p-2">
                    <FormControl
                        name="new"
                        placeholder="Equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {filterNews?.length > 0 ? (
                    filterNews?.map((content) => (
                        <CardNew key={content?._id} content={content} />
                    ))
                ) : (
                    <Alert variant="warning">
                        No hay noticias para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionNewsBySport
