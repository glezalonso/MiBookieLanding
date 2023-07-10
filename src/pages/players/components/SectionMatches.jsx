import React, { useState } from 'react'
import { Alert, Table, FormControl } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { useGetMatches } from '../../../features/matches.features'

const SectionMatches = ({ player }) => {
  const [filter, setFilter] = useState('')
  const { data: matches, isLoading, isError } = useGetMatches()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches')

  const matchesByPlayer = matches?.filter(match => match?.status === true && (match?.away?._id === player?.team?._id || match?.local?._id === player?.team?._id))

  const MatchesByFilter = matchesByPlayer?.filter(matches => {
    if (!filter) return matches
    return matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) || matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Próximos partidos</h5>

           <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Equipos...' onChange={e => setFilter(e.target.value)}/>
        </div>

        {MatchesByFilter?.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
            <thead>
                <tr>

                    <th>Ronda</th>
                    <th>Fecha</th>
                    <th>Local</th>
                    <th>Visita</th>
                </tr>
            </thead>
            <tbody >
              {MatchesByFilter?.map(match => (
                <tr key={match?._id}>

                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../rounds/${match?.round?._id}`}>{match?.round?.round}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../matches/${match?._id}`}>{match?.date.split('T', 3).join(' ')}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../teams/${match?.local?._id}`}>{match?.local?.name}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../teams/${match?.away?._id}`}>{match?.away?.name}</Link></td>

                </tr>
              ))}
            </tbody>
          </Table>
          </div>
          : <Alert variant='warning'>No hay partidos para mostrar!</Alert>}
           </section>
        </>

  )
}
export default SectionMatches
