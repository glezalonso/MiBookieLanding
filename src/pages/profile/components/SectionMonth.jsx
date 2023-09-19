import React from 'react'
import { Table } from 'flowbite-react'
import statistics from '../../../icons/statistics.svg'
import formatedDate from '../../../utils/formatedDate'

const SectionMonth = ({ user, icon }) => {
    const fulldate = formatedDate()
    const date = fulldate.slice(0, 7)

    return (
        <>
            <div className="flex mx-2 justify-between border-b-2">
                <div className="flex mt-1">
                    <img src={statistics} className="h-5 w-5" />
                    <span className="mx-1">Estadística menusal</span>
                </div>
                <div className="flex justify-end ">
                    {user?.matchesSuccess?.filter(
                        (match) => match?.date?.slice(0, 7) === date
                    ).length < 1 &&
                    user?.matchesFailure?.filter(
                        (match) => match?.date.slice(0, 7) === date
                    ).length < 1 ? null : (
                        <>
                            <p className="mx-1 my-1 text-gray-600 font-bold">
                                Porcentaje
                                <span className="mx-1">
                                    {Math.round(
                                        (user?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.date?.slice(0, 7) ===
                                                date
                                        ).length *
                                            100) /
                                            (user?.matchesSuccess?.filter(
                                                (match) =>
                                                    match?.date?.slice(0, 7) ===
                                                    date
                                            ).length +
                                                user?.matchesFailure?.filter(
                                                    (match) =>
                                                        match?.date?.slice(
                                                            0,
                                                            7
                                                        ) === date
                                                ).length)
                                    )}
                                    %
                                </span>
                            </p>
                        </>
                    )}
                </div>
            </div>
            <Table className="table-auto my-1 text-sm">
                <Table.Body>
                    <Table.Row>
                        <Table.Cell className="p-1">
                            {user?.matchesSuccess?.filter(
                                (match) => match?.date?.slice(0, 7) === date
                            ).length +
                                user?.matchesFailure?.filter(
                                    (match) => match?.date?.slice(0, 7) === date
                                ).length}{' '}
                            juegos
                        </Table.Cell>
                        <Table.Cell className="p-1 text-end">
                            <span className=" text-black">
                                {user?.matchesSuccess?.filter(
                                    (match) => match?.date?.slice(0, 7) === date
                                ).length +
                                    user?.matchesFailure?.filter(
                                        (match) =>
                                            match?.date?.slice(0, 7) === date
                                    ).length}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className="p-1">Aciertos</Table.Cell>
                        <Table.Cell className="p-1 text-end">
                            <span className=" text-green-600">
                                {user?.matchesSuccess?.filter(
                                    (match) => match?.date?.slice(0, 7) === date
                                ).length
                                    ? user?.matchesSuccess?.filter(
                                          (match) =>
                                              match?.date?.slice(0, 7) === date
                                      ).length
                                    : null}
                            </span>
                        </Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell className="p-1">Fallados</Table.Cell>
                        <Table.Cell className="p-1 text-end">
                            <span className=" text-red-800">
                                {
                                    user?.matchesFailure?.filter(
                                        (match) =>
                                            match?.date?.slice(0, 7) === date
                                    ).length
                                }
                            </span>
                        </Table.Cell>
                    </Table.Row>
                </Table.Body>
            </Table>
        </>
    )
}

export default SectionMonth
