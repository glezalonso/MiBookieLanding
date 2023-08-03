import React from 'react'
import { Modal, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useGetTopBookies } from '../../../features/users.features'
import { PersonCircle } from 'react-bootstrap-icons'

const SectionTop = ({ show, handleClose }) => {
    const navigate = useNavigate()
    let i = 0
    const { data: users } = useGetTopBookies()
    const topUsers = users?.sort((a, b) => b?.success - a?.success)

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
                                <th>Fallos</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topUsers?.map((users) => (
                                <tr
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

                                    <td className="text-center">
                                        {users?.failures}
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
