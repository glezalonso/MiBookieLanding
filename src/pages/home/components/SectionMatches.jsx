import React, { useState } from 'react'

import { Alert, FormControl, Badge } from 'react-bootstrap'

import CardMatch from './CardMatch'

const SectionMatches = ({ matches }) => {
    const [filter, setFilter] = useState('')

    matches?.sort((a, b) => b.status - a.status)

    const matchFilter = matches?.filter((match) => {
        if (!filter) return match
        return (
            match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) ||
            match?.away?.name?.toLowerCase().includes(filter.toLowerCase())
        )
    })

    return (
        <>
            <section>
                <h5>
                    Partidos
                    <Badge bg="dark" className="mx-2">
                        {matches?.length}
                    </Badge>
                </h5>
                <div className="my-2 mx-auto p-1">
                    <FormControl
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
