import React from 'react'
import { Badge } from 'flowbite-react'
import formatedDate from '../../utils/formatedDate'
import formatedHour from '../../utils/formatedHour'
import clock from '../../icons/clock.svg'

const CardStatus = ({ match }) => {
    const date = formatedDate()
    const hour = formatedHour()
    const fullDate = `${date}T${hour}`

    return (
        <>
            <div className="flex  gap-1 text-sm">
                {!match?.status ? (
                    <>
                        <Badge color={'failure'}>Terminado</Badge>
                    </>
                ) : match?.date < fullDate ? (
                    <Badge color={'success'}>En juego</Badge>
                ) : (
                    <div className="flex items-center gap-1">
                        <img src={clock} alt="clock" className="h-4 w-4 " />
                        <span>{match?.date?.split('T')[1]}</span>
                    </div>
                )}
            </div>
        </>
    )
}

export default CardStatus
