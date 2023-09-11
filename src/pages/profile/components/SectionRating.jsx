import React, { useState } from 'react'
import ButtonPill from '../../comuncomponents/ButtonPill'
import calendar from '../../../icons/calendar.svg'
import global from '../../../icons/global.svg'
import SectionGlobal from './SectionGobal'
import SectionMonth from './SectionMonth'

const SectionRating = ({ user }) => {
    const [key, setKey] = useState('global')

    return (
        <>
            <section className=" bg-white rounded p-2 my-3 shadow-lg">
                <div
                    className="w-full flex flex-1 gap-1 justify-center mx-auto my-2 lg:gap-2 "
                    role="group"
                >
                    <ButtonPill
                        active={key === 'global'}
                        img={global}
                        onClick={() => setKey('global')}
                    >
                        Global
                    </ButtonPill>
                    <ButtonPill
                        active={key === 'mensual'}
                        img={calendar}
                        onClick={() => setKey('mensual')}
                    >
                        Mensual
                    </ButtonPill>
                </div>
                {key === 'global' ? <SectionGlobal user={user} /> : null}
                {key === 'mensual' ? <SectionMonth user={user} /> : null}
            </section>
        </>
    )
}

export default SectionRating
