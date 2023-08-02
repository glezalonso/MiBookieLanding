import React from 'react'
import { Card } from 'react-bootstrap'

const SectionLeague = ({ league }) => {
    return (
        <>
            <section>
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-start">
                            <div>
                                <Card.Img
                                    style={{ width: '50px', height: '50px' }}
                                    src={league?.poster}
                                />
                            </div>
                            <div className="mt-3 mx-1">
                                <Card.Title>{league?.league}</Card.Title>
                            </div>
                        </div>
                    </Card.Header>
                </Card>
            </section>
        </>
    )
}

export default SectionLeague
