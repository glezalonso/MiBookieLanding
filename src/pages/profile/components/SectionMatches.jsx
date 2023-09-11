import React, { useState } from 'react'
import ButtonPill from '../../comuncomponents/ButtonPill'
import next from '../../../icons/next.svg'
import back from '../../../icons/back.svg'

import SectionPredictions from './SetionPredictions'

const SectionMatches = ({ user }) => {
    const [key, setKey] = useState('proximas')

    return (
        <>
            <section className="my-4 bg-white p-2 rounded-md border shadow-lg">
                <div
                    className="w-full flex flex-1 gap-2 justify-center mx-auto my-2 lg:gap-4 "
                    role="group"
                >
                    <ButtonPill
                        active={key === 'proximas'}
                        img={next}
                        onClick={() => setKey('proximas')}
                    >
                        Proximas Predicciones
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'pasadas'}
                        img={back}
                        onClick={() => setKey('pasadas')}
                    >
                        Predicciones pasadas
                    </ButtonPill>
                </div>

                <section>
                    {key === 'proximas' ? (
                        <SectionPredictions user={user} status={true} />
                    ) : null}
                    {key === 'pasadas' ? (
                        <SectionPredictions user={user} status={false} />
                    ) : null}
                </section>
            </section>
        </>
    )
}

export default SectionMatches
