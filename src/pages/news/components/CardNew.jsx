import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { Clock } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CardNew = ({ content }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>
            <section className="bg-white rounded p-1">
                <Table hoverable className="table-auto mt-1 text-sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="flex items-center">
                                <div className="mt-3 md:px-2">
                                    <div>
                                        <img
                                            className="h-20 w-20 lg:w-14 lg:h:14"
                                            src={content?.league?.poster}
                                        />
                                    </div>
                                    <div className="mt-1">
                                        <span className="flex text-gray-600 font-bold  text-justify  ">
                                            {content?.league?.league}
                                        </span>
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
                                        : `${content?.content?.slice(
                                            0,
                                            150
                                        )}.......`}

                                    <Link
                                        className=" text-blue-500 mx-1 : hover:underline"
                                        onClick={() => setSeeMore(!seeMore)}
                                    >
                                        {seeMore ? `Ver menos` : `Ver más`}
                                    </Link>
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
