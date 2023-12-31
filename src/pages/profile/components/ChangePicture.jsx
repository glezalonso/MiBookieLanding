import React, { useState } from 'react'
import { Button, Modal, Select } from 'flowbite-react'
import { useAddAvatar } from '../../../features/users.features'
import { avatars } from '../../../icons/avatars'

const ChangePicture = ({ user, show, handleClose }) => {
    const addAvatar = useAddAvatar()
    const [avatar, setAvatar] = useState(user?.avatar)

    const handleAdd = (id, avatar) => {
        const sure = confirm('Esta seguro que quiere colocar este avatar?')
        if (sure) {
            handleClose()
            return addAvatar.mutate({ id, body: { avatar } })
        }
    }

    return (
        <>
            <Modal
                show={show}
                className="w-full h-full mt-5 mx-auto bg-transparent md:w-2/4 md:h-3/4"
                popup
                dismissible
                onClose={() => handleClose()}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-3">
                        <h3 className="text-xl font-medium text-gray-900">
                            Cambiar Avatar
                        </h3>
                    </div>
                    <div className="flex justify-center">
                        {avatar && (
                            <img
                                className="h-24 q-24"
                                src={avatar}
                                alt="Avatar"
                            />
                        )}
                    </div>

                    <Select
                        className="mt-2"
                        size="sm"
                        onChange={(e) => setAvatar(e.target.value)}
                    >
                        {avatars?.map((avatar) => (
                            <option key={avatar.id} value={avatar.url}>
                                {avatar.name}
                            </option>
                        ))}
                    </Select>
                </Modal.Body>
                <Modal.Footer className="flex justify-end">
                    <Button
                        size="xs"
                        onClick={() => handleAdd(user?._id, avatar)}
                        color="warning"
                    >
                        Colocar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ChangePicture
