import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useGetTeamsBySport } from '../../../features/teams.features'

const SectionTeams = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: teams, isLoading, isError } = useGetTeamsBySport(sport?._id)
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load players')

  const playersByFilter = teams?.filter(teams => {
    if (!filter) return teams
    return teams?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section >
        <h5 className="h7">Teams {sport?.sport}</h5>
         <div className='m-2 p-2'>
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Nombre del jugador...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {playersByFilter.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover >
          <thead className='border-bottom'>
            <tr>
            <th>
             Nombre
            </th>
            </tr>
          </thead>
          <tbody>
            {playersByFilter.map(player => (
              <tr key={player?._id} onClick={() => navigate(`../teams/${player?._id}`)}>
              <td>{player?.name}</td>
              </tr>

            ))}

          </tbody>
          </Table>
          </div>
          : <Alert variant='warning'>No hay jugadores para mostrar!</Alert>}
          </section>
        </>
  )
}
export default SectionTeams
