import React, { useState } from 'react'
import { Card, Form, FormControl, Button, Alert } from 'react-bootstrap'
import { XCircleFill, ChatDotsFill } from 'react-bootstrap-icons'
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
         <section className="my-3" >
              <Card >
              <Card.Header className='bg-dark text-light'>
              <div className='d-flex flex-row justify-content-end '>{match?.status ? <span className=' bg-success text-light rounded p-1 '>Open!</span> : <span className='bg-danger text-light rounded p-1'>Finished!</span>}</div>
              <h1 style={{ margin: '1px', fontSize: '18px' }}>{match?.away?.name} {match?.score?.map(score => score?.away)} @ {match?.local?.name} {match?.score?.map(score => score?.local)}
              <Link to={`../matches/${match?._id}`} className='btn btn-secondary btn-sm  mx-1' style={{ fontSize: '12px' }}> Details</Link>
              </h1>
               <p style={{ fontSize: '13px' }}>Date: {match?.date?.split('T').reverse().join(' ')} <span><strong>{match?.season?.season}</strong></span></p>
                {match?.status
                  ? <Button className='btn btn-secondary btn-sm text-light d-flex align-items-center' style={{ fontSize: '12px' }} onClick={() => setShow(!show)}>{show ? <>Close comments</> : <><ChatDotsFill className='mx-1'/>  {match?.comments?.length}  comments</>}</Button>
                  : null
               }
              </Card.Header>
              <div style={ match?.status && show ? { maxHeight: '200px', overflow: 'auto' } : { display: 'none' } }>
                  {match?.comments?.length > 0
                    ? <Card.Body >
                    {match?.comments?.map(comment => (
                      (comment?.username === username)
                        ? <div className="d-flex flex-row justify-content-end m-1 " key={comment?._id}>
                            <div className="p-2 ms-5 border rounded text-end " style={{ margin: '1px', fontSize: '12px' }} >
                                <strong className='text-dark' style={{ marginRight: '2px', fontSize: '12px' }} >{comment?.username}:</strong>
                                {comment?.comment} <XCircleFill color='red' onClick={() => handleRemove(comment?.comment, comment?._id, match?._id)} />
                            </div></div>
                        : <div className="d-flex flex-row justify-content-start m-1" key={comment?._id}>
                            <div className="p-2 border rounded bg-dark text-light "style={{ margin: '1px', fontSize: '12px' }} ><strong style={{ marginRight: '2px', fontSize: '12px' }}>{comment?.username}:  </strong>{comment?.comment}</div></div>
                    ))}
                 </Card.Body>
                    : <Alert variant='warning mx-3 m-1'>there are no comments to show!</Alert>}
                 </div>
              <Card.Footer style={ !match?.status ? { display: 'none' } : { display: 'contents' } }>

                <div className='mx-auto p-1 w-100'>
                <Form onSubmit={e => handleSubmit(e, match?._id)}>
                <FormControl as="textarea" rows={1} name='comment' style={{ fontSize: '12px' }} placeholder='Enter your comment' disabled={isDisable} value={comment} onChange={ e => setComment(e.target.value)}/>
                <div className="float-end mt-1"><Button type='submit' style={{ fontSize: '12px' }} className='btn btn-warning btn-sm m-1'>Comment</Button></div>
                </Form>
                </div>
              </Card.Footer>
            </Card>
            </section>
        </>
  )
}
export default CardMatch
