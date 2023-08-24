import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { Clock } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CardNew = ({ content }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>
            <section className="bg-white rounded p-1 hover:shadow-xl">
                <Table hoverable className="table-auto mt-1 text-sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="flex items-center text-center">
                                <div className="mt-3 ">
                                    <div className="w-14 h-14">
                                        <img
                                            className=""
                                            src={content?.league?.poster}
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <p className=" break-all w-14 text-gray-600 font-bold  ">
                                            {content?.league?.league}
                                        </p>
                                    </div>
                                </div>
                            </Table.Cell>
                            <Table.Cell>
                                <h5 className="font-bold text-gray-800 ">
                                    {content?.title}
                                </h5>
                                <p className="text-gray-600">
                                    {seeMore
                                        ? content?.content
                                        : content?.content?.slice(0, 150)}

                                    {content?.content?.length > 150 ? (
                                        <Link
                                            className=" text-blue-500 mx-1 : hover:underline"
                                            onClick={() => setSeeMore(!seeMore)}
                                        >
                                            {seeMore ? ` Ver menos` : `Ver más`}
                                        </Link>
                                    ) : null}
                                </p>
                                <div className="flex mt-2.5 justify-end text-gray-600">
                                    <Clock className="my-1 mx-1" />
                                    {content?.date
                                        ?.split('T', 3)
                                        .reverse()
                                        .join(' ')}
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
            </section>
        </>
    )
}

export default CardNew
