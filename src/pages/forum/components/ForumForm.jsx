import React, { useState, useRef } from 'react'
import { useAuthStore } from '../../../store/authorization'
import { useFormik } from 'formik'
import { validatePost } from '../../../helpers/validations'
import { useCreateMessage } from '../../../features/forum.features'
import { Button } from 'flowbite-react'

const ForumForm = () => {
    const [file, setFile] = useState()
    const ref = useRef()
    const userId = useAuthStore((state) => state.profile.id)
    const date = new Date().toISOString()
    const create = useCreateMessage()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            message: '',
        },
        validate: validatePost,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            values = Object.assign(values, {
                user: userId,
                image: file,
                date,
            })
            create.mutate(values)
            formik.resetForm()
            ref.current.reset()
        },
    })

    const onUpload = (event) => {
        setFile(event.target.files[0])
    }

    return (
        <>
            <section className=" flex justify-center items-center mb-1">
                <form
                    ref={ref}
                    className="w-full  text-sm space-y-2"
                    onSubmit={formik.handleSubmit}
                >
                    <label className="block my-1">Comparte tus picks</label>
                    <textarea
                        {...formik.getFieldProps('message')}
                        name="message"
                        id="message"
                        rows={3}
                        placeholder="Escribe tu mensaje"
                        className="w-full rounded-md text-gray-600 text-sm"
                    />

                    <input
                        className="rounded-md p-0 text-xs self-end"
                        type="file"
                        name="image"
                        id="image"
                        onChange={onUpload}
                    />

                    <div className="w-full flex justify-end">
                        <Button
                            size="xs"
                            className="mt-2"
                            color="warning"
                            type="submit"
                        >
                            Enviar post
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default ForumForm
