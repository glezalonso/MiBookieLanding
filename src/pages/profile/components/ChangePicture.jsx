import React, { useState } from 'react'
import { Modal, Form } from 'react-bootstrap'

const ChangePicture = ({ show, handleClose }) => {
    const urlAvatar1 =
        'https://res.cloudinary.com/dei46qlds/image/upload/v1691058927/maleavatar.png'
    const urlAvatar2 =
        'https://res.cloudinary.com/dei46qlds/image/upload/v1691058927/womenavatar.png'
    const [avatar, setAvatar] = useState(urlAvatar1)

    return (
        <>
            <Modal show={show} className="my-5" size="xs" onHide={handleClose}>
                <Modal.Header className="bg-dark text-white" closeButton>
                    <Modal.Title>Cambiar avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <div className="d-flex justify-content-center">
                            <img
                                style={{ width: '100px', height: '100px' }}
                                src={avatar}
                                alt="Avatar"
                            />
                        </div>

                        <Form.Select
                            className="my-2"
                            size="sm"
                            onChange={(e) => setAvatar(e.target.value)}
                        >
                            <option value={urlAvatar1}>Avatar 1</option>
                            <option value={urlAvatar2}>Avatar 2</option>
                        </Form.Select>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ChangePicture
