import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useVerifyCode } from '../../../features/users.features'
import { useRecovery } from '../../../store/recovery'
import { validateOTP } from '../../../helpers/validations'

const VerifyCode = () => {
    const { email } = useRecovery((state) => state)
    const verifyCode = useVerifyCode()

    const formik = useFormik({
        initialValues: {
            OTP: '',
        },
        validate: validateOTP,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            values = Object.assign(values, { email })
            verifyCode.mutate(values)
        },
    })

    return (
        <>
            <Modal show={true}>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900">
                            Verificar Código
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="OTP" value="Código" />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('OTP')}
                                type="number"
                                name="OTP"
                                id="OTP"
                                placeholder="Ingresa tu código"
                            />
                        </div>
                        <div className="w-full flex justify-between">
                            <Link className="mt-3 text-yellow-400" to={'../'}>
                                Cerrar
                            </Link>
                            <Button
                                className="mt-3"
                                color="warning"
                                type="submit"
                            >
                                Verificar
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default VerifyCode
