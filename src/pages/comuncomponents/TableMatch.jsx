import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Table } from 'react-bootstrap'

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
            <div className="bg-light rounded section-tables  vh-50">
                <Table responsive borderless hover size="sm" variant="light">
                    <tbody>
                        {match?.map((match) => (
                            <tr
                                className="border-bottom"
                                key={match?._id}
                                onClick={() =>
                                    navigate(`../matches/${match?._id}`)
                                }
                            >
                                <td>
                                    <SectionDate match={match} />
                                </td>
                                <td>
                                    <AwaySection match={match} />
                                    <LocalSection match={match} />
                                </td>

                                <td>
                                    <div className="d-block justify-content-center">
                                        <AwayScore match={match} />
                                        <LocalScore match={match} />
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <caption className="text-light">
                        Total de partidos: {match?.length}
                    </caption>
                </Table>
            </div>
        </>
    )
}

export default TableMatche
