import React, { useState } from 'react'
import { useGetRounds } from '../../../features/rounds.features'
import toast from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { FormControl, Alert, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionRounds = ({ season }) => {
  const [filter, setFilter] = useState('')
  const { data: rounds, isLoading, isError } = useGetRounds()
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load rounds')

  const roundsBySeason = rounds?.filter(round => round?.season?._id === season?._id)

  const sort = roundsBySeason?.sort((a, b) => {
    return b.roundNumber - a.roundNumber
  })

  const filterRounds = sort?.filter(round => {
    if (!filter) return round
    return round?.round?.toLowerCase().includes(filter.toLowerCase())
  })

  filterRounds.sort((a, b) => a.roundNumber - b.roundNumber)

  return (
        <>
        <section >
        <h5 className="h7"> Rondas</h5>
        <div className='m-2 p-2'>
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Ronda...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {filterRounds?.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover >
          <thead className='border-bottom'>
            <tr>
              <th>
                Ronda
              </th>
              <th>
               Numero de ronda
              </th>
              <th>
               Estatus
              </th>
            </tr>
            </thead>
            <tbody>
              {filterRounds?.map(round => (
                <tr key={round?._id} onClick={() => navigate(`../rounds/${round?._id}`)}>
                  <td>{round?.round}</td>
                  <td>{round?.roundNumber}</td>
                  <td>{round?.status ? <span className='text-success'>Abierta</span> : <span className='text-danger'>Cerrada</span>}</td>
                </tr>
              ))}
            </tbody>

        </Table>
        </div>
          : <Alert variant='warning'>No hay rondas para mostrar!</Alert>}
          </section>
        </>
  )
}
export default SectionRounds
