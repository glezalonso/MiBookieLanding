import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { useLogin } from '../../../features/users.features'
import { Link } from 'react-router-dom'
import { validateLogin } from '../../../helpers/validations'
import logo from '../../../assets/mibookie.png'

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
                <Modal.Header className="w-full flex ">
                    <div className="flex w-full items-center mx-4 gap-2 ">
                        <img src={logo} alt="mibookie" className="w-20 h-20 " />
                        <span> Iniciar Sesión</span>
                    </div>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="username" value="Usuario" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('username')}
                                type="text"
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

                    <div className="flex justify-between mt-3 gap-1 text-sm font-medium">
                        <div className=" justify-start">
                            {/* <Link
                                to={'../generate'}
                                className="text-cyan-950 underline   hover:text-cyan-700"
                            >
                                Olvidaste tu contraseña?
                            </Link> */}
                        </div>

                        <div>
                            No eres miembro?
                            <Link
                                onClick={() => handleRegister()}
                                className="text-cyan-950 underline mx-1  hover:text-cyan-700"
                            >
                                Crea un cuenta
                            </Link>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Login
