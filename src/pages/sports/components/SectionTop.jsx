import React from 'react'
import { Modal } from 'flowbite-react'
import medalwhite from '../../../icons/medalwhite.svg'
import TopMonthSport from './TopMonthSport'

const SectionTopSport = ({ show, handleClose, sport }) => {
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
                    <TopMonthSport sport={sport} />
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SectionTopSport
