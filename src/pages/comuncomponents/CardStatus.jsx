import React from 'react'
import { Clock } from 'react-bootstrap-icons'
import { Badge } from 'flowbite-react'
import formatedDate from '../../utils/formatedDate'
import formatedHour from '../../utils/formatedHour'

const CardStatus = ({ match }) => {
    const date = formatedDate()
    const hour = formatedHour()
    const fullDate = `${date}T${hour}`

    return (
        <>
            <div className="flex align-center gap-1 text-sm">
                {!match?.status ? (
                    <>
                        <Badge className=" mb-2 bg-red-800 text-white">
                            Terminado
                        </Badge>
                    </>
                ) : match?.date < fullDate ? (
                    <Badge className=" mb-2 bg-green-800 text-white">
                        En juego
                    </Badge>
                ) : (
                    <div className="mb-2">
                        <Clock size={16} className="mt-.5" />

                        <span className="block text-sm ">
                            {match?.date?.split('T')[1]}
                        </span>
                    </div>
                )}
            </div>
        </>
    )
}

export default CardStatus
