import React, { useState } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { useAddAvatar } from '../../../features/users.features'

const ChangePicture = ({ user, show, handleClose }) => {
    const addAvatar = useAddAvatar()
    const urlAvatar1 =
        'https://res.cloudinary.com/dei46qlds/image/upload/v1691075725/user_dnd0kp.png'
    const urlAvatar2 =
        'https://res.cloudinary.com/dei46qlds/image/upload/v1691058927/womenavatar.png'
    const [avatar, setAvatar] = useState(urlAvatar1)

    const handleAdd = (id, avatar) => {
        const sure = confirm('Esta seguro que quiere colocar este avatar?')
        if (sure) {
            handleClose()
            return addAvatar.mutate({ id, body: { avatar } })
        }
    }

    return (
        <>
            <Modal show={show} className="my-5" size="xs" onHide={handleClose}>
                <Modal.Header className="bg-dark text-white" closeButton>
                    <Modal.Title>Cambiar avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                        <option value={urlAvatar1}>Hombre</option>
                        <option value={urlAvatar2}>Mujer</option>
                    </Form.Select>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        onClick={() => handleAdd(user?._id, avatar)}
                        className="btn btn-warning"
                    >
                        Colocar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChangePicture
