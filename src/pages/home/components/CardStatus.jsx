import React from 'react'
import { Clock } from 'react-bootstrap-icons'
import { Badge } from 'react-bootstrap'

const CardStatus = ({ match }) => {
    return (
        <>
            <div
                style={{ fontSize: '14px' }}
                className="d-flex align-items-center gap-1"
            >
                {match?.status ? (
                    <>
                        <Clock size={15} />
                        <span>{match?.date?.split('T')[1]}</span>
                    </>
                ) : (
                    <Badge bg="danger">Terminado</Badge>
                )}
            </div>
        </>
    )
}

export default CardStatus
