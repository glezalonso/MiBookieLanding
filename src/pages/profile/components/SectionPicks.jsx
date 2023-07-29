import React, { useState } from 'react'
import { Badge, Button, ButtonGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import SectionLast from './SectionLast'
import SectionNext from './SectionNext'

const SectionPicks = () => {
    const { username } = useParams()
    const [key, setKey] = useState('ultimos')

    return (
        <>
            <section>
                <ButtonGroup className="d-flex mx-auto mt-3 ">
                    <Button
                        size="sm"
                        className=" btn-light rounded "
                        onClick={() => setKey('ultimos')}
                    >
                        Últimos partidos <Badge bg="dark">15</Badge>
                    </Button>
                    <Button
                        size="sm"
                        className=" btn-light rounded "
                        onClick={() => setKey('proximos')}
                    >
                        Próximos partidos <Badge bg="dark">15</Badge>
                    </Button>
                </ButtonGroup>
                {key === 'ultimos' ? <SectionLast username={username} /> : null}
                {key === 'proximos' ? (
                    <SectionNext username={username} />
                ) : null}
            </section>
        </>
    )
}

export default SectionPicks
