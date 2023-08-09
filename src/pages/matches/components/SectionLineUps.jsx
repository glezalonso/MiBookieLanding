import React from 'react'
import { Alert } from 'flowbite-react'
import TableAway from './TableAway'
import TableLocal from './TableLocal'

const SectionLineUps = ({ match }) => {
    const ID_TENNIS = '648f71eea4ba8860dfe38314'

    if (match?.sport?._id === ID_TENNIS) return null

    return (
        <>
            <div className="grid mt-3 sm:grid-cols-4 sm:gap-2 p-2 max-h-2/4  overflow-auto">
                <section className="my-3 col-span-2">
                    <h5>{match?.away?.name}</h5>
                    {match?.lineup?.length > 0 ? (
                        <div className="bg-white rounded">
                            <TableAway match={match} />
                        </div>
                    ) : (
                        <Alert color="warning">
                            No hay alineación para mostrar!
                        </Alert>
                    )}
                </section>

                <section className="mt-3 col-span-2">
                    <h5>{match?.local?.name}</h5>
                    {match?.lineup?.length > 0 ? (
                        <div className="bg-white rounded section-tables">
                            <TableLocal match={match} />
                        </div>
                    ) : (
                        <Alert color="warning">
                            No hay alineación para mostrar!
                        </Alert>
                    )}
                </section>
            </div>
        </>
    )
}

export default SectionLineUps
