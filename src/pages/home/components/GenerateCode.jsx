import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useGenerateCode } from '../../../features/users.features'
import { Toaster } from 'react-hot-toast'
import { validateEmail } from '../../../helpers/validations'

const GenerateCode = () => {
  const generateCode = useGenerateCode()

  const formik = useFormik({
    initialValues: {
      email: ''
    },
    validate: validateEmail,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      generateCode.mutate(values)
    }
  })

  return (
        <>
         <Toaster position="top-center" reverseOrder={false} />
      <Modal show={true}>
      <Modal.Header className='bg-dark text-white' >
        <Modal.Title>Recuperar contraseña</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control {...formik.getFieldProps('email')} type="email" name='email' id='email' placeholder="Ingresa tu email" />
        </Form.Group>
        <Link className='btn btn-dark' to={'../'}>Cerrar</Link>
        <Button variant="warning" type="submit">
        Recuperar
        </Button>
    </Form>
    </Modal.Body>
   </Modal>
    </>
  )
}

export default GenerateCode
