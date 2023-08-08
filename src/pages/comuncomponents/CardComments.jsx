import React from 'react'
import { Alert } from 'flowbite-react'
import { useAuthStore } from '../../store/authorization'
import PersonalComments from './PersonalComments'
import PeopleComments from './PeopleComments'

const CardComments = ({ match }) => {
    const { id } = useAuthStore((state) => state.profile)

    return (
        <>
            <div className="max-h-56 overflow-auto bg-zinc-950 rounded border-t-2 p-1">
                {match?.comments?.length > 0 ? (
                    match?.comments?.map((comment) =>
                        comment?.username?._id === id ? (
                            <PersonalComments
                                key={comment?._id}
                                match={match}
                                comment={comment}
                            />
                        ) : (
                            <PeopleComments
                                key={comment?._id}
                                comment={comment}
                            />
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

export default CardComments
