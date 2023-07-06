import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Alert, FormControl, Table } from 'react-bootstrap'
import Loading from '../../../ui/Loading'
import { useGetPlayers } from '../../../features/players.features'

const SectionPlayers = () => {
  const [filter, setFilter] = useState('')
  const { data: players, isLoading, isError } = useGetPlayers()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load players!')

  const filterPlayers = players?.filter(player => {
    if (!filter) return player
    return player?.fullName?.toLowerCase().includes(filter.toLowerCase()) || player?.sport?.sport?.toLowerCase().includes(filter.toLowerCase()) || player?.team?.name?.toLowerCase().includes(filter.toLowerCase())
  })
  return (
        <>
        <section>
        <h5 className="h7">All Players</h5>

        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {filterPlayers.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
             <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
                <thead>
                    <tr>
                        <th>
                            Fullname
                        </th>
                        <th>
                            Position
                        </th>
                        <th>
                            sport
                        </th>
                        <th>
                            team
                        </th>
                        <th>
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filterPlayers?.map(player => (
                        <tr key={player?._id}>
                            <td>
                                <Link to={`../players/${player?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{player?.fullName}</Link>
                            </td>
                            <td>
                                {player?.position}
                            </td>
                            <td>
                                <Link to={`../sports/${player?.sport?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{player?.sport?.sport}</Link>
                            </td>
                            <td>
                                {player?.team ? <Link to={`../teams/${player?.team?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{player?.team?.name}</Link> : <span className='text-danger'>Unasigned</span>}
                            </td>
                            <td>
                                {player?.status ? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </div>
          : <Alert variant='warning'>There are no players to show!</Alert>}
          </section>
        </>
  )
}

export default SectionPlayers
