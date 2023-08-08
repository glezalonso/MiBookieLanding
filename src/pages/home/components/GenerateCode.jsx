import React from 'react'
import { Button, Label, Modal, TextInput } from 'flowbite-react'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import { useGenerateCode } from '../../../features/users.features'
import { validateEmail } from '../../../helpers/validations'

const GenerateCode = () => {
    const generateCode = useGenerateCode()

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: validateEmail,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            generateCode.mutate(values)
        },
    })

    return (
        <>
            <Modal show={true}>
                <Modal.Body>
                    <div className="space-y-6">
                        <h3 className="text-xl font-medium text-gray-900">
                            Generar código
                        </h3>
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="email" value="Email" />
                            </div>
                        </div>
                        <TextInput
                            {...formik.getFieldProps('email')}
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ingresa tu email"
                        />
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

export default GenerateCode
