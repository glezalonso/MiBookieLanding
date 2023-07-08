import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useResetPassword } from '../../../features/users.features'
import { useRecovery } from '../../../store/recovery'
import { Toaster } from 'react-hot-toast'
import { validateResetPassword } from '../../../helpers/validations'

const ResetPassword = () => {
  const { OTP } = useRecovery(state => state)
  const { email } = useRecovery(state => state)
  const reset = useResetPassword()

  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validate: validateResetPassword,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      values = Object.assign(values, { OTP, email })
      reset.mutate(values)
    }
  })

  return (
        <>
         <Toaster position="top-center" reverseOrder={false} />
        <Modal show={true}>
      <Modal.Header className='bg-dark text-white' >
        <Modal.Title>Reset password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
            <Form.Label className='mt-1' htmlFor="password">Password</Form.Label>
            <Form.Control {...formik.getFieldProps('password')} type="password" name="password" id="password" placeholder='Password'/>
        </Form.Group>
        <Form.Group>
            <Form.Label className='mt-1' htmlFor="confirmPassword">Confirm Password</Form.Label>
            <Form.Control {...formik.getFieldProps('confirmPassword')} type="password" name="confirmPassword" id="confirmPassword" placeholder='Confirm password'/>
            </Form.Group>
        <Link className='btn btn-dark' to={'../'}>Close</Link>
        <Button variant="warning" type="submit">
       Reset
        </Button>
    </Form>
    </Modal.Body>
   </Modal>

    </>
  )
}

export default ResetPassword
