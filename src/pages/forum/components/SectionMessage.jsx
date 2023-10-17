import React from 'react'
import People from './People'
import Personal from './Personal'
import { Alert } from 'flowbite-react'
import { useAuthStore } from '../../../store/authorization'

function SectionMessage({ message }) {
    const userId = useAuthStore((state) => state.profile.id)

    return (
        <>
            <div className="bg-zinc-950 max-h-56 overflow-auto my-1 rounded border-t-2 p-1">
                {message?.comments?.length > 0 ? (
                    message?.comments?.map((comment) =>
                        comment?.username?._id === userId ? (
                            <Personal
                                key={comment?._id}
                                message={message}
                                comment={comment}
                            />
                        ) : (
                            <People key={comment?._id} comment={comment} />
                        )
                    )
                ) : (
                    <Alert color="warning" className="mx-3 p-2 my-2 ">
                        No hay comentarios para mostrar!
                    </Alert>
                )}
            </div>
        </>
    )
}

export default SectionMessage
