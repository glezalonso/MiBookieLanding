import React, { useState } from 'react'
import { Alert, Table, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { useGetMatchesByRound } from '../../../features/matches.features'

const SectionMatches = ({ round }) => {
  const [filter, setFilter] = useState('')
  const { data: matches, isLoading, isError } = useGetMatchesByRound(round?._id)
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches')

  const matchesByFilter = matches?.filter(matches => {
    if (!filter) return matches
    return matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) || matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section >
        <h5 className="h7">Partidos</h5>

        <div className='m-2 p-2'>
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Equipos...' onChange={e => setFilter(e.target.value)}/>
        </div>

        {matchesByFilter?.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} >
            <thead className='border-bottom'>
                <tr>
                    <th>Fecha</th>
                    <th>Local</th>
                    <th>Visita</th>
                    <th>Marcador</th>
                </tr>
            </thead>
            <tbody >
              {matchesByFilter?.map(match => (
                <tr key={match?._id} onClick={() => navigate(`../matches/${match?._id}`)}>
                    <td>{match?.date.split('T', 3).reverse().join(' ')}</td>
                    <td>{match?.local?.name}</td>
                    <td>{match?.away?.name}</td>
                    <td>{match?.score?.map(score => score?.local)} - {match?.score?.map(score => score?.away)}</td>
                </tr>
              ))}
            </tbody>
            <caption className='text-light'>Total de partidos: {matchesByFilter?.length}</caption>
          </Table>
          </div>
          : <Alert variant='warning'>No hay partidos para mostrar!</Alert>}
          </section>
        </>

  )
}
export default SectionMatches
