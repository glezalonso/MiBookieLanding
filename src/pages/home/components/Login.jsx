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
      password: ''
    },
    validate: validateLogin,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      login.mutate(values)
      formik.resetForm()
      handleClose()
    }
  })
  return (
        <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='bg-dark text-white' >
        <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control {...formik.getFieldProps('username')} type="username" name='username' id='username' placeholder="Enter username" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control {...formik.getFieldProps('password')} type="password" name='password' id='password' placeholder="Password" />
        </Form.Group>
        <Button variant="warning" type="submit">
        Log in
        </Button>
    </Form>
    </Modal.Body>
    <Modal.Footer>
    <div className='d-flex flex-row justify-content-start text-start mx-auto'><div className='text-start'><Link to={'../generate'}>Forget my password</Link></div></div>
    <div className='d-flex flex-row justify-content-end mx-auto'><div className='text-end'>Are you not a member? <Link onClick={() => handleRegister()}>Create account </Link></div></div>
    </Modal.Footer>
   </Modal>
    </>
  )
}

export default Login
