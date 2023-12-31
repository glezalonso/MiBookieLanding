import React from 'react'
import { Modal } from 'flowbite-react'
import medal from '../../../icons/medal.svg'
import TopMonthSport from './TopMonthSport'

const SectionTopSport = ({ show, handleClose, sport }) => {
    return (
        <>
            <Modal
                show={show}
                className="w-full h-4/5 mt-32 bg-gray-100 flex-row p-3  sm:mt-0"
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header className="bg-zinc-950 p-2  flex items-center">
                    <div className="flex justify-start m-1 items-center">
                        <div className="my-1">
                            <img
                                src={medal}
                                alt="medal"
                                className="mx-2 h-6 w-6"
                            />
                        </div>
                        <div>
                            <h3 className="text-lg  text-white font-medium">
                                Top 10 {sport?.sport?.toLowerCase()}
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
