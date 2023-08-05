import React from 'react'
import { Card } from 'react-bootstrap'

const SectionLeague = ({ league }) => {
    return (
        <>
            <section>
                <div className=" my-2 text-dark">
                    <Card.Title className="d-flex mx-1">
                        <div className="my-1">
                            <img
                                style={{ width: '50px', height: '50px' }}
                                src={league?.poster}
                            />
                        </div>
                        <div className="mt-3 mx-1">
                            <span className=" mx-1">{league?.league}</span>
                        </div>
                    </Card.Title>
                </div>
            </section>
        </>
    )
}

export default SectionLeague
