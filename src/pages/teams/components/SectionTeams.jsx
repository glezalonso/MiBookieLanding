import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { Alert, FormControl, Table } from 'react-bootstrap'
import Loading from '../../../ui/Loading'
import { useGetTeams } from '../../../features/teams.features'

const SectionTeams = () => {
  const [filter, setFilter] = useState('')
  const { data: teams, isLoading, isError } = useGetTeams()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load teams!')

  const filterTeams = teams?.filter(teams => {
    if (!filter) return teams
    return teams?.name?.toLowerCase().includes(filter.toLowerCase()) || teams?.sport?.sport?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Todos los equipos</h5>
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Nombre del equipo, deporte...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {filterTeams.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover >
            <thead>
                <tr>
                    <th>
                        Equipo
                    </th>
                    <th>
                        Estadio
                    </th>
                    <th>
                        Deporte
                    </th>
                </tr>
            </thead>
            <tbody>
                {filterTeams?.map(team => (
                    <tr key={team?._id}>
                    <td><Link to={`../teams/${team?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{team?.name}</Link></td>
                    <td>{team?.stadium}</td>
                    <td><Link to={`../sports/${team?.sport?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{team?.sport?.sport}</Link></td>
                    </tr>
                ))}
            </tbody>
          </Table>
          </div>
          : <Alert variant='warning'>No hay equipos para mostrar!</Alert>}
          </section>
        </>
  )
}

export default SectionTeams
