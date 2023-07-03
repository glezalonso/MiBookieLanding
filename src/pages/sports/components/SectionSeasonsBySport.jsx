import React, { useState } from 'react'
import { useGetSeasons } from '../../../features/seasons.features'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { Alert, Table, FormControl } from 'react-bootstrap'

const SectionSeasonsBySport = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: seasons, isLoading, isError } = useGetSeasons()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load seasons')

  const seasonsBySport = seasons?.filter(season => season?.sport?._id === sport?._id)

  const seasonsByFilter = seasonsBySport?.filter(season => {
    if (!filter) return season
    return season?.season?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <div className='m-2 p-3'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
          {seasonsByFilter?.length > 0
            ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table responsive variant='dark' style={{ fontSize: '15px' }} >
            <thead>
              <tr>
                <th>
                  Season
                </th>
                <th>
                  League
                </th>
                <th>
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {seasonsByFilter?.map(season => (
                <tr key={season?._id} >
                <td><Link to={`../seasons/${season?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.season}</Link></td>
                <td><Link to={`../leagues/${season?.league?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.league?.league}</Link></td>
                <td>{(season?.status) ? <span className='text-success'>Open</span> : <span className='text-danger'>Close</span>}</td>
                </tr>
              ))}

            </tbody>

          </Table>
          </div>
            : <Alert variant='warning'>Thres is no seasons to show!</Alert>}

        </>
  )
}

export default SectionSeasonsBySport
