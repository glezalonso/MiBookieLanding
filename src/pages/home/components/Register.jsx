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
      password: ''
    },
    validate: validateRegister,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      register.mutate(values)
      formik.resetForm()
      handleClose()
    }
  })

  return (
        <>
       <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-white' >
        <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <Form onSubmit={formik.handleSubmit} >
         <Form.Group className="mb-3" >
        <Form.Label>Nombre completo: </Form.Label>
        <Form.Control {...formik.getFieldProps('fullName')} type="text" name='fullName' placeholder="Ingresa tu nombre completo" />
      </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label>Email </Form.Label>
        <Form.Control {...formik.getFieldProps('email')} type="email" name='email' placeholder="Ingresa tu email" />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Usuario: </Form.Label>
        <Form.Control {...formik.getFieldProps('username')} type="text" name='username' placeholder="Crea tu usuario" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Contraseña: </Form.Label>
        <Form.Control {...formik.getFieldProps('password')} type="password" name='password' placeholder="crea una contraseña" />
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
