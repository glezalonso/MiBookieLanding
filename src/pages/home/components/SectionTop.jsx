import React from 'react'
import { Modal, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useGetTopBookies } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'

const SectionTop = ({ show, handleClose }) => {
    let i = 0
    const { data: users } = useGetTopBookies()
    const navigate = useNavigate()
    const topUsers = users?.sort(
        (a, b) => (b?.success * 100) / b?.total - (a?.success * 100) / a?.total
    )

    return (
        <>
            <Modal show={show} className="my-5" size="xs" onHide={handleClose}>
                <Modal.Header className="bg-dark text-white" closeButton>
                    <Modal.Title>Top 10</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Table
                        responsive
                        size="sm"
                        hover
                        borderless
                        className="my-1"
                    >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Bookie</th>
                                <th>Juegos</th>
                                <th>Aciertos</th>

                                <th>Efect.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topUsers?.map((users) => (
                                <tr
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
                                    <td>{++i}</td>
                                    <td>
                                        <PersonCircle
                                            color="dark"
                                            className="mx-1"
                                        />
                                        {users?.username}
                                    </td>
                                    <td className="text-center">
                                        {users?.total}
                                    </td>
                                    <td className="text-center">
                                        {users?.success}
                                    </td>

                                    <td className="text-center text-muted fw-bold">
                                        {Math.round(
                                            (users?.success * 100) /
                                                users?.total
                                        )}
                                        %
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SectionTop
