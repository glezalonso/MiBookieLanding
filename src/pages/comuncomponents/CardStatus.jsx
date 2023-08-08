import React from 'react'
import { Clock } from 'react-bootstrap-icons'
import { Badge } from 'flowbite-react'

const CardStatus = ({ match }) => {
    return (
        <>
            <div className="flex align-center gap-1 text-sm">
                {match?.status ? (
                    <>
                        <Clock size={15} className="mt-1" />
                        <span>{match?.date?.split('T')[1]}</span>
                    </>
                ) : (
                    <Badge className="mx-2 mb-2 bg-red-800 text-white">
                        Terminado
                    </Badge>
                )}
            </div>
        </>
    )
}

export default CardStatus
