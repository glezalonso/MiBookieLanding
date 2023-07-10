import React, { useState } from 'react'
import { useGetPlayers } from '../../../features/players.features'
import { Link } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'

const SectionPlayerBySport = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: players, isLoading, isError } = useGetPlayers()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load players')

  const playerBySport = players?.filter(player => player?.sport?._id === sport?._id)

  const playersByFilter = playerBySport?.filter(player => {
    if (!filter) return player
    return player?.fullName?.toLowerCase().includes(filter.toLowerCase())
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
            <th>
             Posición
            </th>
            </tr>
          </thead>
          <tbody>
            {playersByFilter.map(player => (
              <tr key={player?._id}>
              <td><Link to={`../players/${player?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{player?.fullName}</Link></td>
              <td>{player?.position}</td>
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
export default SectionPlayerBySport
