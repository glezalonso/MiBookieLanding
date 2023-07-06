import React, { useState } from 'react'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionRoster = ({ team }) => {
  const [filter, setFilter] = useState('')

  const playerFilter = team?.players.filter(player => {
    if (!filter) return player
    return player?.player?.toLowerCase().includes(filter.toLowerCase())
  })
  return (
        <>
        <section >
        <h5 className="h7">Roster</h5>
         <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {playerFilter.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} >
            <thead>
                <tr>
                <th>Player</th>
                <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {playerFilter?.map(player => (
                    <tr key={player?.playerId?._id}>
                    <td><Link to={`../players/${player?.playerId?._id}`} className='btn btn-dark btn-sm w-100 text-start' >{player?.playerId?.fullName}</Link></td>
                    <td>{player?.playerId?.position}</td>
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

export default SectionRoster
