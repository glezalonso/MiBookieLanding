import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { useLogin } from '../../../features/users.features'
import { Link } from 'react-router-dom'
import { validateLogin } from '../../../helpers/validations'

const Login = ({ show, handleClose, handleRegister }) => {
    const login = useLogin()
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: '',
            password: '',
        },
        validate: validateLogin,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            login.mutate(values)
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
                        <h3 className="text-xl font-medium text-gray-900">
                            Iniciar Sesión
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Usuario" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('username')}
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Ingresa tu usuario"
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
                                id="password"
                                placeholder="Ingresa tu contraseña"
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <Button
                                className="mt-1"
                                color="warning"
                                type="submit"
                            >
                                Iniciar Sesión
                            </Button>
                        </div>
                    </form>

                    <div className="flex justify-between mt-3   gap-1 text-sm font-medium">
                        <div className=" justify-start">
                            <Link to={'../generate'}>
                                Olvidaste tu contraseña?
                            </Link>
                        </div>

                        <div className="">
                            No eres miembro?{' '}
                            <Link onClick={() => handleRegister()}>
                                Crea un cuenta{' '}
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
