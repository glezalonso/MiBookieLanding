import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { useRegister } from '../../../features/users.features'
import { validateRegister } from '../../../helpers/validations'

const Register = ({ handleClose, show }) => {
    const register = useRegister()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            fullName: '',
            email: '',
            username: '',
            password: '',
        },
        validate: validateRegister,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            register.mutate(values)
            formik.resetForm()
            handleClose()
        },
    })

    return (
        <>
            <Modal show={show} popup dismissible onClose={() => handleClose()}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Registro
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="fullName"
                                    value="Nombre completo"
                                />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('fullName')}
                                type="text"
                                name="fullName"
                                placeholder="Ingresa tu nombre completo"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('email')}
                                type="email"
                                name="email"
                                placeholder="Ingresa tu email"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Usuario" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('username')}
                                type="text"
                                name="username"
                                placeholder="Crea tu usuario"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="password" value="Contraseña" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('password')}
                                type="password"
                                name="password"
                                placeholder="Crea una contraseña"
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <Button
                                className="mt-1"
                                color="warning"
                                type="submit"
                            >
                                Registrar
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
