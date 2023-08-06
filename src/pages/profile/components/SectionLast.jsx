import React, { useState } from 'react'
import { useGetPicksClosed } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import CardPick from './CardPick'
import { Alert, Form } from 'react-bootstrap'

import formatedDate from '../../../utils/formatedDate'

const SectionLast = ({ id }) => {
    const [limit, setLimit] = useState(15)
    const date = formatedDate().slice(0, 7)

    const {
        data: matchesClosed,
        isError,
        isLoading,
        isFetching,
    } = useGetPicksClosed(id, date, limit)
    if (isLoading) return <Loading />
    if (isFetching) return <Loading />
    if (isError) return toast.error('Hubo un error al cargar los picks!')

    return (
        <>
            <section>
                <div className="d-flex my-1 justify-content-end">
                    <Form.Select
                        style={{ fontSize: '15px' }}
                        className="rounded w-50"
                        onChange={(e) => setLimit(e.target.value)}
                    >
                        <option value="15">Últimos 15</option>
                        <option value="30">Últimos 30</option>
                        <option value="0">Todos</option>
                    </Form.Select>
                </div>
                {matchesClosed?.length > 0 ? (
                    matchesClosed?.map((match) => (
                        <CardPick match={match} key={match?._id} id={id} />
                    ))
                ) : (
                    <Alert variant="warning my-2">
                        No tienes predicciones aún
                    </Alert>
                )}
            </section>
        </>
    )
}

export default SectionLast
