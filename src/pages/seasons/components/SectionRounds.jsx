import React, { useState } from 'react'
import { useGetRounds } from '../../../features/rounds.features'
import toast from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { FormControl, Alert, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionRounds = ({ season }) => {
  const [filter, setFilter] = useState('')
  const { data: rounds, isLoading, isError } = useGetRounds()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load rounds')

  const roundsBySeason = rounds?.filter(round => round?.season?._id === season?._id)

  const filterRounds = roundsBySeason?.filter(round => {
    if (!filter) return round
    return round?.round?.toLowerCase().includes(filter.toLowerCase())
  })
  return (
        <>
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {filterRounds?.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
          <thead>
            <tr>
              <th>
                Round
              </th>
              <th>
                Number Round
              </th>
              <th>
                status
              </th>
            </tr>
            </thead>
            <tbody>
              {filterRounds?.map(round => (
                <tr key={round?._id}>
                  <td><Link to={`../rounds/${round?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{round?.round}</Link></td>
                  <td>{round?.roundNumber}</td>
                  <td>{round?.status ? <span className='text-success'>Open</span> : <span className='text-danger'>Closed</span>}</td>
                </tr>
              ))}
            </tbody>

        </Table>
        </div>
          : <Alert variant='warning'>There is no rounds to show!</Alert>}
        </>
  )
}
export default SectionRounds
