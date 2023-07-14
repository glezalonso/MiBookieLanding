import React from 'react'
import { Form, Button, Modal } from 'react-bootstrap'
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
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="bg-dark text-white">
                    <Modal.Title>Registro</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={formik.handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Nombre completo:{' '}
                            </Form.Label>
                            <Form.Control
                                style={{ fontSize: '13px' }}
                                {...formik.getFieldProps('fullName')}
                                type="text"
                                name="fullName"
                                placeholder="Ingresa tu nombre completo"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Email{' '}
                            </Form.Label>
                            <Form.Control
                                style={{ fontSize: '13px' }}
                                {...formik.getFieldProps('email')}
                                type="email"
                                name="email"
                                placeholder="Ingresa tu email"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Usuario:{' '}
                            </Form.Label>
                            <Form.Control
                                style={{ fontSize: '13px' }}
                                {...formik.getFieldProps('username')}
                                type="text"
                                name="username"
                                placeholder="Crea tu usuario"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className="text-dark">
                                Contraseña:{' '}
                            </Form.Label>
                            <Form.Control
                                style={{ fontSize: '13px' }}
                                {...formik.getFieldProps('password')}
                                type="password"
                                name="password"
                                placeholder="Crea una contraseña"
                            />
                        </Form.Group>
                        <Button variant="warning" type="submit">
                            Registrar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default Register
