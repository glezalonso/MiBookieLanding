import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'flowbite-react'

// Local team sections
import LocalSection from './LocalSection'
import LocalScore from './LocalScore'

// Away team sections
import AwaySection from './AwaySection'
import AwayScore from './AwayScore'

// Tables components
import SectionDate from './SectionDate'

const TableMatche = ({ match }) => {
    const navigate = useNavigate()

    return (
        <>
            <div className=" bg-white rounded max-h-3/4 overflow-auto p-1 mb-3">
                <Table hoverable className="table-auto mt-1 text-sm">
                    <Table.Body className="divide-y">
                        {match?.map((match) => (
                            <Table.Row
                                className="border-bottom hover:cursor-pointer"
                                key={match?._id}
                                onClick={() =>
                                    navigate(`../matches/${match?._id}`)
                                }
                            >
                                <Table.Cell className="p-1">
                                    <SectionDate match={match} />
                                </Table.Cell>
                                <Table.Cell className="p-1">
                                    <LocalSection match={match} />
                                    <AwaySection match={match} />
                                </Table.Cell>

                                <Table.Cell className="p-1">
                                    <div className="block justify-end">
                                        <LocalScore match={match} />
                                        <AwayScore match={match} />
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default TableMatche
