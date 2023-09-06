import React, { useState } from 'react'
import { Modal, Button } from 'flowbite-react'
import ButtonPill from '../../comuncomponents/ButtonPill'
import medalwhite from '../../../icons/medalwhite.svg'
import TopMonth from '../../comuncomponents/TopMonth'
import TopGlobal from '../../comuncomponents/TopGlobal'
import global from '../../../icons/global.svg'
import calendar from '../../../icons/calendar.svg'

const SectionTop = ({ show, handleClose }) => {
    const [key, setKey] = useState('month')

    return (
        <>
            <Modal
                show={show}
                className="w-full h-4/5 my-auto bg-transparent flex-row p-3 "
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]  from-gray-800 via-gray-900 to-black p-2  flex items-center">
                    <div className="flex justify-start m-1 items-center">
                        <div className="my-1">
                            <img
                                src={medalwhite}
                                alt="medal"
                                className="mx-2 h-6 w-6"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg  text-white font-medium">
                                Top 10
                            </h3>
                        </div>
                    </div>
                </Modal.Header>
                <Modal.Body className="px-1">
                    <div
                        className="flex gap-1 justify-center  mt-2.5  mx-auto sm:gap-2 "
                        role="group"
                    >
                        <ButtonPill
                            active={key === 'month'}
                            img={calendar}
                            onClick={() => setKey('month')}
                        >
                            Mensual
                        </ButtonPill>
                        <ButtonPill
                            active={key === 'global'}
                            img={global}
                            onClick={() => setKey('global')}
                        >
                            Global
                        </ButtonPill>
                    </div>
                    {key === 'month' ? <TopMonth /> : null}
                    {key === 'global' ? <TopGlobal /> : null}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SectionTop
