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
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {filterTeams.length > 0
          ? <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        <Table responsive variant='dark' style={{ fontSize: '15px' }} >
            <thead>
                <tr>
                    <th>
                        Team
                    </th>
                    <th>
                        Stadium
                    </th>
                    <th>
                        Sport
                    </th>
                    <th>
                        Status
                    </th>
                </tr>
            </thead>
            <tbody>
                {filterTeams?.map(team => (
                    <tr key={team?._id}>
                    <td><Link to={`../teams/${team?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{team?.name}</Link></td>
                    <td>{team?.stadium}</td>
                    <td><Link to={`../sports/${team?.sport?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{team?.sport?.sport}</Link></td>
                    <td>
                    {team?.status ? <span className='text-success'>Active</span> : <span className='text-danger'>Inactive</span>}
                    </td>
                    </tr>
                ))}
            </tbody>
          </Table>
          </div>
          : <Alert variant='warning'>There is no teams to show!</Alert>}
        </>
  )
}

export default SectionTeams
