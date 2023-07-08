import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useVerifyCode } from '../../../features/users.features'
import { useRecovery } from '../../../store/recovery'
import { Toaster } from 'react-hot-toast'
import { validateOTP } from '../../../helpers/validations'

const VerifyCode = () => {
  const { email } = useRecovery(state => state)
  const verifyCode = useVerifyCode()

  const formik = useFormik({
    initialValues: {
      OTP: ''
    },
    validate: validateOTP,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: (values) => {
      values = Object.assign(values, { email })
      verifyCode.mutate(values)
    }
  })

  return (
        <>
         <Toaster position="top-center" reverseOrder={false} />
        <Modal show={true}>
      <Modal.Header className='bg-dark text-white' >
        <Modal.Title>Verify code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Code</Form.Label>
          <Form.Control {...formik.getFieldProps('OTP')} type="text" name='OTP' id='OTP' placeholder="Enter code" />
        </Form.Group>
        <Link className='btn btn-dark' to={'../'}>Close</Link>
        <Button variant="warning" type="submit">
       Verify
        </Button>
    </Form>
    </Modal.Body>
   </Modal>

    </>
  )
}

export default VerifyCode
