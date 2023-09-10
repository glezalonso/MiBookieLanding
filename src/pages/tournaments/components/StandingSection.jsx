import React from 'react'
import { Table } from 'flowbite-react'

const StandingSection = ({ data, icon }) => {
    const standings = data?.standings
        ?.sort((a, b) => {
            if (b.wins !== a.wins) {
                return b.wins - a.wins
            } else {
                return b.draws - a.draws
            }
        })
        .slice(0, 1)

    return (
        <>
            <Table>
                <Table.Body>
                    <Table.Row className="flex justify-between ">
                        <Table.Cell className="p-1 flex items-center mr-auto">
                            <img
                                src={data?.league?.poster}
                                className="w-10 h-10"
                            />
                            {data?.season}
                        </Table.Cell>
                        {standings?.map((pos) => (
                            <Table.Cell
                                key={pos?._id}
                                className="p-1 flex items-center"
                            >
                                <img
                                    src={pos?.team?.poster}
                                    className="w-10 h-10"
                                />
                                {pos?.team?.name}
                                <img src={icon} className="w-6 h-6 mx-2" />
                            </Table.Cell>
                        ))}
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    )
}

export default StandingSection
