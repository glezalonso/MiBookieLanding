import React, { useState } from 'react'
import { Card, Form, FormControl, Button, Alert } from 'react-bootstrap'
import { XCircleFill } from 'react-bootstrap-icons'
import { useAddComment, useRemoveComment } from '../../../features/matches.features'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useAuthStore } from '../../../store/authorization'

const CardMatch = ({ match }) => {
  const [show, setShow] = useState(false)
  const username = useAuthStore(state => state.profile)
  const isDisable = useAuthStore(state => state.isDisable)
  const addComment = useAddComment()
  const removeComment = useRemoveComment()

  const [comment, setComment] = useState('')

  const handleSubmit = (e, match) => {
    e.preventDefault()
    if (!username) return toast.error('You must be log in')
    addComment.mutate({ id: match, body: { comment, username } })
    setComment('')
  }

  const handleRemove = (comment, commentId, matchId) => {
    const sure = confirm('Want to delete?')
    if (sure) return removeComment.mutate({ id: matchId, body: { comment, commentId, username } })
  }

  return (
        <>
         <div className="my-3" key={match?._id}>
              <Card >
              <Card.Header>
              <Card.Title>{match?.away?.name} @ {match?.local?.name} <Link to={`../matches/${match?._id}`} className='btn btn-dark btn-sm'>Details</Link></Card.Title>
               <Card.Subtitle className='m-1'>Date: {match?.date?.split('T').reverse().join(' ')}</Card.Subtitle>
               <Card.Subtitle className='m-1'>Stadium: {match?.local?.stadium}</Card.Subtitle>
                <Card.Subtitle className='m-1'>{match?.season?.season}</Card.Subtitle>
                <Button className='d-flex ronded m-1 btn btn-dark btn-sm' onClick={() => setShow(!show)}>{show ? <>Close comments</> : <>Show comments</>}</Button>
              </Card.Header>
              <div style={show ? { maxHeight: '200px', overflow: 'auto' } : { display: 'none' } }>
                  {match?.comments?.length > 0
                    ? <Card.Body >
                    {match?.comments?.map(comment => (
                      (comment?.username === username)
                        ? <div className="d-flex flex-row justify-content-end m-1 " key={comment?._id}>
                            <div className="p-2 ms-5 border rounded text-end " >
                                <strong className='text-dark'>{comment?.username}:</strong>
                                {comment?.comment} <XCircleFill color='red' onClick={() => handleRemove(comment?.comment, comment?._id, match?._id)} />
                            </div></div>
                        : <div className="d-flex flex-row justify-content-start m-1" key={comment?._id}>
                            <div className="p-2 border rounded bg-dark text-light " ><strong>{comment?.username}:  </strong>{comment?.comment}</div></div>
                    ))}
                 </Card.Body>
                    : <Alert variant='warning'>there is no comments to show!</Alert>}
                 </div>
              <Card.Footer>

                <div className='mx-auto p-2 w-100'>
                <Form onSubmit={e => handleSubmit(e, match?._id)}>
                <FormControl as="textarea" rows={1} name='comment' placeholder='Enter your comment' disabled={isDisable} value={comment} onChange={ e => setComment(e.target.value)}/>
                <Button type='submit' className='btn btn-warning btn-sm m-1'>Comment</Button>
                </Form>
                </div>
              </Card.Footer>
            </Card>
            </div>
        </>
  )
}
export default CardMatch
