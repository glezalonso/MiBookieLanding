import React, { useState } from 'react'
import { Button, ButtonGroup } from 'react-bootstrap'
import SectionLast from './SectionLast'
import SectionNext from './SectionNext'
import SectionFollowers from './SectionFollowers'
import SectionFollows from './SectionFollows'
import { useAuthStore } from '../../../store/authorization'

const SectionContent = ({ id, user }) => {
    const [key, setKey] = useState('ultimos')
    const userId = useAuthStore((state) => state.profile.id)

    if (user?._id !== userId) setKey('ultimos')

    return (
        <>
            <section>
                <ButtonGroup className="d-flex mx-auto mt-3  gap-2">
                    <Button
                        size="sm"
                        className=" btn-light rounded "
                        onClick={() => setKey('ultimos')}
                    >
                        <span
                            style={
                                key === 'ultimos'
                                    ? { fontWeight: 'bold' }
                                    : null
                            }
                        >
                            Últimas predicciones
                        </span>
                    </Button>
                    <Button
                        size="sm"
                        className=" btn-light rounded "
                        onClick={() => setKey('proximos')}
                    >
                        <span
                            style={
                                key === 'proximos'
                                    ? { fontWeight: 'bold' }
                                    : null
                            }
                        >
                            Próximas predicciones
                        </span>
                    </Button>
                    {id === userId ? (
                        <>
                            <Button
                                size="sm"
                                className=" btn-light rounded "
                                onClick={() => setKey('seguidores')}
                            >
                                <span
                                    style={
                                        key === 'seguidores'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Seguidores
                                </span>
                            </Button>
                            <Button
                                size="sm"
                                className=" btn-light rounded "
                                onClick={() => setKey('seguidos')}
                            >
                                <span
                                    style={
                                        key === 'seguidos'
                                            ? { fontWeight: 'bold' }
                                            : null
                                    }
                                >
                                    Seguidos
                                </span>
                            </Button>
                        </>
                    ) : null}
                </ButtonGroup>
                {key === 'ultimos' ? <SectionLast id={id} /> : null}
                {key === 'proximos' ? <SectionNext id={id} /> : null}
                {key === 'seguidores' ? <SectionFollowers user={user} /> : null}
                {key === 'seguidos' ? <SectionFollows user={user} /> : null}
            </section>
        </>
    )
}

export default SectionContent
