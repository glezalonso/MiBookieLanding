import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-white">
                    <Modal.Title>Iniciar Sesión</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Usuario:{' '}
                            </Form.Label>
                            <Form.Control
                                {...formik.getFieldProps('username')}
                                type="username"
                                name="username"
                                id="username"
                                placeholder="Ingresa tu usuario"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Contraseña:{' '}
                            </Form.Label>
                            <Form.Control
                                {...formik.getFieldProps('password')}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ingresa tu contraseña"
                            />
                        </Form.Group>
                        <Button variant="warning" type="submit">
                            Iniciar Sesión
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <div className="d-flex flex-row justify-content-start">
                        <div className="text-start">
                            <Link to={'../generate'}>
                                Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-end ">
                        <div className="text-end">
                            No eres miembro?{' '}
                            <Link onClick={() => handleRegister()}>
                                Crea un cuenta{' '}
                            </Link>
                        </div>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Login
