import React, { useState } from 'react'
import { Table } from 'react-bootstrap'
import { Clock } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CardNew = ({ content }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>
            <section className="bg-light rounded p-1">
                <Table className="my-1" borderless responsive>
                    <tbody>
                        <tr>
                            <td>
                                <div className="mx-auto">
                                    <div className="mx-2">
                                        <img
                                            style={{
                                                width: '53px',
                                                height: '53px',
                                            }}
                                            src={content?.league?.poster}
                                        />
                                    </div>
                                    <div className="my-1">
                                        <span className="text-muted fw-bold mx-2">
                                            {content?.league?.league}
                                        </span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {seeMore
                                    ? content?.content
                                    : `${content?.content?.slice(
                                          0,
                                          150
                                      )}.......`}

                                <Link
                                    className="mx-1"
                                    onClick={() => setSeeMore(!seeMore)}
                                >
                                    Ver más
                                </Link>
                                <div className="d-flex justify-content-end">
                                    <Clock className="my-1 mx-1" />
                                    {content?.date
                                        ?.split('T', 3)
                                        .reverse()
                                        .join(' ')}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default CardNew
