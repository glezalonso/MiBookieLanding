import React from 'react'
import { useGetTournament } from '../../../features/tournaments.features'
import { Table } from 'flowbite-react'
import medal from '../../../icons/medal.svg'

const TableTournaments = ({ id }) => {
    const { data: tournament } = useGetTournament(id)

    return (
        <Table.Row>
            <Table.Cell className="p-0 text-center ">
                {tournament?.season?.season}
            </Table.Cell>
            <Table.Cell className="p-0 flex  text-center justify-center">
                <img src={medal} alt="medalla" className="w-6 h-6" />
            </Table.Cell>
        </Table.Row>
    )
}

export default TableTournaments
