import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetTopMonthSport } from '../../../features/users.features'
import { Table, Spinner, Alert } from 'flowbite-react'
import { PersonCircle } from 'react-bootstrap-icons'
import formatedDate from '../../../utils/formatedDate'

const TopMonthSport = ({ sport }) => {
    const fulldate = formatedDate()
    const date = fulldate.slice(0, 7)

    const { data, isLoading } = useGetTopMonthSport(date, sport?._id)
    let i = 0
    const navigate = useNavigate()

    if (isLoading)
        return (
            <div className="flex justify-center items-center m-3">
                <Spinner color="warning" />
            </div>
        )

    const users = data
        ?.sort(
            (a, b) =>
                (Number(
                    b?.matchesSuccess?.filter(
                        (match) =>
                            match?.date?.slice(0, 7) === date &&
                            match?.sport === sport?._id
                    )?.length
                ) *
                    100) /
                    (Number(
                        b?.matchesSuccess?.filter(
                            (match) =>
                                match?.date?.slice(0, 7) === date &&
                                match?.sport === sport?._id
                        )?.length
                    ) +
                        Number(
                            b?.matchesFailure?.filter(
                                (match) =>
                                    match?.date?.slice(0, 7) === date &&
                                    match?.sport === sport?._id
                            )?.length
                        )) -
                (Number(
                    a?.matchesSuccess?.filter(
                        (match) =>
                            match?.date?.slice(0, 7) === date &&
                            match?.sport === sport?._id
                    )?.length
                ) *
                    100) /
                    (Number(
                        a?.matchesSuccess?.filter(
                            (match) =>
                                match?.date?.slice(0, 7) === date &&
                                match?.sport === sport?._id
                        )?.length
                    ) +
                        Number(
                            a?.matchesFailure?.filter(
                                (match) =>
                                    match?.date?.slice(0, 7) === date &&
                                    match?.sport === sport?._id
                            )?.length
                        ))
        )
        .slice(0, 10)

    return (
        <>
            {users?.length > 0 ? (
                <Table hoverable className="table-auto text-xs mt-1 ">
                    <Table.Head>
                        <Table.HeadCell className="px-1 text-center">
                            #
                        </Table.HeadCell>
                        <Table.HeadCell className="px-1 text-center">
                            Bookie
                        </Table.HeadCell>
                        <Table.HeadCell className="px-1 text-center">
                            Juegos
                        </Table.HeadCell>
                        <Table.HeadCell className="px-1 text-center">
                            Aciertos
                        </Table.HeadCell>

                        <Table.HeadCell className="px-1 text-center">
                            Efect.
                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body>
                        {users?.map((users) => (
                            <Table.Row
                                className="hover:cursor-pointer"
                                style={
                                    i === 2
                                        ? { borderBottom: '1px solid grey' }
                                        : null
                                }
                                onClick={() =>
                                    navigate(`../profile/${users?._id}`)
                                }
                                key={users?._id}
                            >
                                <Table.Cell className="p-1 text-center ">
                                    {++i}
                                </Table.Cell>
                                <Table.Cell className="p-1 flex text-center ">
                                    <PersonCircle
                                        color="dark"
                                        className="mx-1 mt-1"
                                    />
                                    {users?.username}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {users?.matchesSuccess?.filter(
                                        (match) =>
                                            match?.date?.slice(0, 7) === date &&
                                            match?.sport === sport?._id
                                    )?.length +
                                        users?.matchesFailure?.filter(
                                            (match) =>
                                                match?.date?.slice(0, 7) ===
                                                    date &&
                                                match?.sport === sport?._id
                                        )?.length || 0}
                                </Table.Cell>
                                <Table.Cell className="p-1 text-center ">
                                    {
                                        users?.matchesSuccess?.filter(
                                            (match) =>
                                                match?.date?.slice(0, 7) ===
                                                    date &&
                                                match?.sport === sport?._id
                                        )?.length
                                    }
                                </Table.Cell>

                                <Table.Cell className="p-1 text-center text-gray-500 font-bold ">
                                    {Math.round(
                                        Number(
                                            users?.matchesSuccess?.filter(
                                                (match) =>
                                                    match?.date?.slice(0, 7) ===
                                                        date &&
                                                    match?.sport === sport?._id
                                            )?.length * 100
                                        ) /
                                            Number(
                                                users?.matchesSuccess?.filter(
                                                    (match) =>
                                                        match?.date?.slice(
                                                            0,
                                                            7
                                                        ) === date &&
                                                        match?.sport ===
                                                            sport?._id
                                                )?.length +
                                                    Number(
                                                        users?.matchesFailure?.filter(
                                                            (match) =>
                                                                match?.date?.slice(
                                                                    0,
                                                                    7
                                                                ) === date &&
                                                                match?.sport ===
                                                                    sport?._id
                                                        )?.length
                                                    )
                                            )
                                    ) || 0}
                                    %
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            ) : (
                <Alert className="mt-2 text-center" color={'warning'}>
                    {fulldate.slice(-2) == '01'
                        ? 'Nuevo mes'
                        : 'No hay top aún'}
                </Alert>
            )}
        </>
    )
}

export default TopMonthSport
