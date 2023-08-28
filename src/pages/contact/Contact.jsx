import React from 'react'
import { Button, Label, TextInput, Textarea } from 'flowbite-react'
import { useFormik } from 'formik'
import { useSendMessage } from '../../features/users.features'

const Contact = () => {
    const sendMessage = useSendMessage()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            email: '',
            subject: '',
            content: '',
        },
        validate: false,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            sendMessage.mutate(values)
            formik.resetForm()
        },
    })
    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-4/6">
                <div className="max-w-full mx-auto bg-white my-3 p-4 rounded-lg lg:w-3/4 hover:shadow-xl ">
                    <h1 className="text-gray-950 font-bold my-2 font-sans text-lg">
                        Envíanos un correo.
                    </h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Correo electónico"
                                />
                            </div>
                            <TextInput
                                {...formik.getFieldProps('email')}
                                type="text"
                                name="email"
                                id="email"
                                required
                                placeholder="Ingresa tu correo"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="subject" value="Asunto" />
                            </div>

                            <TextInput
                                {...formik.getFieldProps('subject')}
                                type="text"
                                name="subject"
                                id="subject"
                                required
                                placeholder="Asunto"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="content" value="Comentario" />
                            </div>

                            <Textarea
                                className="mt-2 text-base placeholder:text-sm"
                                rows={1}
                                name="content"
                                required
                                {...formik.getFieldProps('content')}
                                placeholder="Ingresa tu comentario"
                            />
                        </div>
                        <div className="w-full flex justify-end">
                            <Button
                                size="sm"
                                className="mt-2"
                                color="dark"
                                type="submit"
                            >
                                Enviar comentario
                            </Button>
                        </div>
                    </form>
                </div>
            </main>
        </>
    )
}
export default Contact
