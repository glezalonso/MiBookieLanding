import React, { useState } from 'react'
import { Table } from 'flowbite-react'
import { Clock } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const CardNew = ({ content }) => {
    const [seeMore, setSeeMore] = useState(false)
    return (
        <>
            <section className=" w-full bg-white rounded p-1 my-3 shadow-xl  ">
                <Table hoverable className=" mt-1 text-sm">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="items-center justify-start text-center">
                                <img
                                    src={content?.league?.poster}
                                    className="w-12 h-12"
                                />

                                <p className=" w-12 mt-2 text-gray-600 font-bold text-xs">
                                    {content?.league?.league}
                                </p>
                            </Table.Cell>
                            <Table.Cell className="px-0">
                                <h5 className="font-bold text-gray-800 mb-1 text-base break-word">
                                    {content?.title}
                                </h5>
                                <p
                                    className={`${
                                        seeMore
                                            ? 'h-full'
                                            : 'h-20 overflow-hidden'
                                    }   text-gray-600 break-words whitespace-pre-line`}
                                >
                                    {content?.content}
                                </p>
                                <div className="flex  flex-wrap mt-2.5 justify-start items-center w-max  text-gray-800">
                                    <Link
                                        className=" text-blue-500 mx-1 hover:underline mr-2 border-2 border-blue-500 rounded-lg px-2 py-1"
                                        onClick={() => setSeeMore(!seeMore)}
                                    >
                                        {seeMore ? ` Ver menos` : `Ver todo`}
                                    </Link>
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
