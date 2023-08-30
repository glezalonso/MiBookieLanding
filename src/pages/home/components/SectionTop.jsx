import React, { useState } from 'react'
import { Modal, Button } from 'flowbite-react'
import medalwhite from '../../../icons/medalwhite.svg'
import TopMonth from '../../comuncomponents/TopMonth'
import TopGlobal from '../../comuncomponents/TopGlobal'
import global from '../../../icons/global.svg'
import calendarToday from '../../../icons/calendarToday.svg'

const SectionTop = ({ show, handleClose }) => {
    const [key, setKey] = useState('month')

    return (
        <>
            <Modal
                show={show}
                className="w-full h-3/4 m-auto bg-transparent flex-row p-3 "
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-gradient-to-t from-gray-900 via-slate-900 to-gray-900 p-2  flex items-center">
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
                        className="flex gap-0.5 justify-center  mt-2.5  mx-auto sm:gap-2 "
                        role="group"
                    >
                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className={`${key === 'month'
                                ? 'bg-gray-200 border-slate-300'
                                : 'bg-white'
                                } p-0 sm:px-4 `}
                            onClick={() => setKey('month')}
                        >
                            <img
                                src={calendarToday}
                                alt="yesterday"
                                className="h-4 w-4 mr-0.5 mt-0.5"
                            />
                            Mensual
                        </Button>
                        <Button
                            size="sm"
                            pill
                            color="gray"
                            className={`${key === 'global'
                                ? 'bg-gray-200 border-slate-300'
                                : 'bg-white'
                                } p-0 sm:px-4 `}
                            onClick={() => setKey('global')}
                        >
                            <img
                                src={global}
                                alt="today"
                                className="h-4 w-4 mr-0.5 mt-0.5"
                            />
                            Global
                        </Button>
                    </div>
                    {key === 'month' ? <TopMonth /> : null}
                    {key === 'global' ? <TopGlobal /> : null}
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SectionTop
