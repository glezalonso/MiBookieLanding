import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useResetPassword } from '../../../features/users.features'
import { useRecovery } from '../../../store/recovery'
import { validateResetPassword } from '../../../helpers/validations'

const ResetPassword = () => {
    const { OTP } = useRecovery((state) => state)
    const { email } = useRecovery((state) => state)
    const reset = useResetPassword()

    const formik = useFormik({
        initialValues: {
            password: '',
            confirmPassword: '',
        },
        validate: validateResetPassword,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            values = Object.assign(values, { OTP, email })
            reset.mutate(values)
        },
    })

    return (
        <>
            <Modal show={true}>
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900">
                            Recuperar contraseña
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="password"
                                    value="Nueva contraseña"
                                />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('password')}
                                type="password"
                                name="password"
                                id="password"
                                placeholder="Ingresa nueva contraseña"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="confirmpassword"
                                    value="Confirmar contraseña"
                                />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('confirmPassword')}
                                type="password"
                                name="confirmPassword"
                                id="confirmPassword"
                                placeholder="Confirma nueva contraseña"
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
                                Recuperar
                            </Button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default ResetPassword
