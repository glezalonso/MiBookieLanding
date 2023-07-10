import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useGetTeams } from '../../../features/teams.features'

const SectionPlayersTennis = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: players, isLoading, isError } = useGetTeams()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load players')

  const playerBySport = players?.filter(player => player?.sport?._id === sport?._id)

  const playersByFilter = playerBySport?.filter(player => {
    if (!filter) return player
    return player?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section >
        <h5 className="h7">Jugadores de {sport?.sport}</h5>
         <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Nombre del jugador...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {playersByFilter.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover >
          <thead>
            <tr>
            <th>
             Nombre
            </th>
            </tr>
          </thead>
          <tbody>
            {playersByFilter.map(player => (
              <tr key={player?._id}>
              <td><Link to={`../players/${player?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{player?.name}</Link></td>
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
export default SectionPlayersTennis
