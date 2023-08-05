import React, { useState } from 'react'
import { Alert, FormControl, Badge, Form } from 'react-bootstrap'
import { useGetSports } from '../../../features/sports.features'
import CardMatch from '../../comuncomponents/CardMatch'

const SectionMatches = ({ matches }) => {
    const { data: sports } = useGetSports()
    const [filter, setFilter] = useState('')

    matches?.sort((a, b) => b.status - a.status)

    const matchFilter = matches?.filter((match) => {
        if (!filter) return match
        return (
            match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.away?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.sport?._id?.includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <div className="d-flex my-1 justify-content-between ">
                    <h5 className=" mt-1 mx-2 ">
                        Partidos
                        <Badge bg="dark" className="mx-2">
                            {matches?.length}
                        </Badge>
                    </h5>
                    <Form.Select
                        style={{ fontSize: '15px' }}
                        className="rounded w-50"
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="6">Todos</option>

                        {sports?.map((sport) => (
                            <option key={sport?._id} value={sport?._id}>
                                {sport?.sport}
                            </option>
                        ))}
                    </Form.Select>
                </div>
                <div className="my-1 mx-auto p-1">
                    <FormControl
                        style={{ fontSize: '15px' }}
                        name="team"
                        placeholder="Equipo..."
                        onChange={(e) => setFilter(e.target.value)}
                    />
                </div>
                {matchFilter?.length > 0 ? (
                    matchFilter?.map((match) => (
                        <CardMatch key={match?._id} match={match} />
                    ))
                ) : (
                    <Alert variant="warning">
                        No hay partidos para mostrar!
                    </Alert>
                )}
            </section>
        </>
    )
}
export default SectionMatches
