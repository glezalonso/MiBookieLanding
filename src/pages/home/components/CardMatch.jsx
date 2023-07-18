import React, { useState } from 'react'
import {
    Card,
    Form,
    FormControl,
    Button,
    Alert,
    Table,
    Badge,
} from 'react-bootstrap'
import { XCircleFill, ChatDotsFill, Clock } from 'react-bootstrap-icons'
import {
    useAddComment,
    useRemoveComment,
} from '../../../features/matches.features'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useAuthStore } from '../../../store/authorization'

const CardMatch = ({ match }) => {
    const [show, setShow] = useState(false)
    const username = useAuthStore((state) => state.profile)
    const isDisable = useAuthStore((state) => state.isDisable)
    const navigate = useNavigate()
    const addComment = useAddComment()
    const removeComment = useRemoveComment()

    const [comment, setComment] = useState('')

    const handleSubmit = (e, match) => {
        e.preventDefault()
        if (!username) return toast.error('Debes iniciar sesión para comentar')
        addComment.mutate({ id: match, body: { comment, username } })
        setComment('')
    }

    const handleRemove = (comment, commentId, matchId) => {
        const sure = confirm('Quieres borrar el comentario?')
        if (sure)
            return removeComment.mutate({
                id: matchId,
                body: { comment, commentId, username },
            })
    }

    return (
        <>
            <Card className="bg-black my-2">
                <Card.Header className="bg-dark text-light ">
                    <div className="table-responsive bg-dark rounded ">
                        <span>
                            <strong>{match?.league?.league}</strong>
                        </span>
                        <Table variant="dark table-borderless">
                            <tbody
                                onClick={() =>
                                    navigate(`../matches/${match?._id}`)
                                }
                                className="border-bottom"
                            >
                                <tr>
                                    <td>
                                        <img
                                            src={match?.away?.poster}
                                            alt={match?.away?.name}
                                            style={{
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                            }}
                                        />{' '}
                                        {match?.away?.name}
                                    </td>
                                    <td className="text-center">
                                        <strong>
                                            {match?.score?.map(
                                                (score) => score?.away
                                            )}
                                        </strong>
                                    </td>
                                    <td className="text-end ">
                                        {match?.status ? (
                                            <span>
                                                <Clock />{' '}
                                                {match?.date?.split('T')[1]}
                                            </span>
                                        ) : (
                                            <Badge bg="danger">Terminado</Badge>
                                        )}
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src={match?.local?.poster}
                                            alt={match?.local?.name}
                                            style={{
                                                height: '30px',
                                                width: '30px',
                                                borderRadius: '50%',
                                            }}
                                        />{' '}
                                        {match?.local?.name}
                                    </td>
                                    <td className="text-center">
                                        <strong>
                                            {match?.score?.map(
                                                (score) => score?.local
                                            )}
                                        </strong>
                                    </td>
                                    <td></td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>
                    <Button
                        className="btn btn-secondary btn-sm my-1"
                        style={{ fontSize: '12px' }}
                        onClick={() => setShow(!show)}
                    >
                        {show ? (
                            <>Cerrar comentarios</>
                        ) : (
                            <>
                                <ChatDotsFill className="mx-1" />{' '}
                                {match?.comments?.length} comentarios
                            </>
                        )}
                    </Button>
                </Card.Header>
                <div
                    style={
                        show
                            ? { maxHeight: '200px', overflow: 'auto' }
                            : { display: 'none' }
                    }
                >
                    <Card.Body style={{ background: '#111010' }}>
                        {match?.comments?.length > 0 ? (
                            match?.comments?.map((comment) =>
                                comment?.username === username ? (
                                    <div
                                        className="d-flex flex-row justify-content-end my-2 overflow-auto "
                                        key={comment?._id}
                                    >
                                        <div
                                            className="p-2 ms-5 bg-light  rounded text-end"
                                            style={{
                                                margin: '1px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            <strong
                                                className="text-dark"
                                                style={{
                                                    marginRight: '2px',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                {comment?.username}:
                                            </strong>
                                            {comment?.comment}{' '}
                                            <XCircleFill
                                                color="red"
                                                onClick={() =>
                                                    handleRemove(
                                                        comment?.comment,
                                                        comment?._id,
                                                        match?._id
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <div
                                        className="d-flex flex-row justify-content-start my-3 overflow-auto"
                                        key={comment?._id}
                                    >
                                        <div
                                            className="p-2 rounded bg-dark text-light "
                                            style={{
                                                margin: '1px',
                                                fontSize: '12px',
                                            }}
                                        >
                                            <strong
                                                style={{
                                                    marginRight: '2px',
                                                    fontSize: '12px',
                                                }}
                                            >
                                                {comment?.username}:{' '}
                                            </strong>
                                            {comment?.comment}
                                        </div>
                                    </div>
                                )
                            )
                        ) : (
                            <Alert variant="warning mx-3 ">
                                No hay comentarios para mostrar!
                            </Alert>
                        )}
                    </Card.Body>
                </div>
                <div style={!show ? { display: 'none' } : null}>
                    <Card.Footer
                        style={{ background: '#111010' }}
                        className="border-top"
                    >
                        <Form onSubmit={(e) => handleSubmit(e, match?._id)}>
                            <FormControl
                                as="textarea"
                                rows={2}
                                name="comment"
                                style={{ fontSize: '12px', marginTop: '8px' }}
                                placeholder="Ingresa tu comentario"
                                disabled={isDisable}
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                            />
                            <Button
                                type="submit"
                                style={{ fontSize: '12px' }}
                                className="d-flex btn btn-warning btn-sm m-1 align-items-end"
                            >
                                Comentar
                            </Button>
                        </Form>
                    </Card.Footer>
                </div>
            </Card>
        </>
    )
}
export default CardMatch
