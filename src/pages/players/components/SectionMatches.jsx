import React, { useState } from 'react'
import { Alert, Table, FormControl } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { useGetMatchesByTeam } from '../../../features/matches.features'

const SectionMatches = ({ player }) => {
  const [filter, setFilter] = useState('')
  const { data: matches, isLoading, isError } = useGetMatchesByTeam(player?.team?._id)
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches')

  const nextMatches = matches?.filter(match => match?.status === true)

  const MatchesByFilter = nextMatches?.filter(matches => {
    if (!filter) return matches
    return matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) || matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Próximos partidos</h5>
        <div className='m-2 p-2'>
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Equipos...' onChange={e => setFilter(e.target.value)}/>
        </div>

        {MatchesByFilter?.length > 0
          ? <div className='table-responsive' style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover>
            <thead className='border-bottom'>
                <tr>

                    <th>Ronda</th>
                    <th>Fecha</th>
                    <th>Local</th>
                    <th>Visita</th>
                </tr>
            </thead>
            <tbody >
              {MatchesByFilter?.map(match => (
                <tr key={match?._id} onClick={() => navigate(`../matches/${match?._id}`)}>
                    <td>{match?.round?.round}</td>
                    <td>{match?.date.split('T', 3).join(' ')}</td>
                    <td>{match?.local?.name}</td>
                    <td>{match?.away?.name}</td>
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
