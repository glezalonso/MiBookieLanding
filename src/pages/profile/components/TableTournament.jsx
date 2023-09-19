import React from 'react'
import { useGetTournament } from '../../../features/tournaments.features'
import { Table } from 'flowbite-react'
import medal from '../../../icons/medal.svg'

const TableTournaments = ({ id }) => {
    const { data: tournament } = useGetTournament(id)

    return (
        <Table.Row>
            <Table.Cell className="p-0 flex justify-center items-center gap-1 text-center ">
                <img src={medal} alt="medalla" className="w-6 h-6" />
                {tournament?.season?.season}
            </Table.Cell>
            <Table.Cell className="p-0 text-center">
                {tournament?.votes}
            </Table.Cell>
            <Table.Cell className="p-0 text-center">
                {tournament?.success}
            </Table.Cell>
            <Table.Cell className="p-0 text-center font-bold text-gray-600">
                {Math.round((tournament?.success * 100) / tournament?.votes)} %
            </Table.Cell>
        </Table.Row>
    )
}

export default TableTournaments
