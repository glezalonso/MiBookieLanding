import React from 'react'
import { useGetSeasons } from '../../../features/seasons.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { Table, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionSeasons = ({ league }) => {
  const { data: seasons, isLoading, isError } = useGetSeasons()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load seasons!')

  const seasonByLeague = seasons?.filter(season => season?.league?._id === league?._id)

  return (
        <>
        {seasonByLeague?.length > 0
          ? <div className='my-scrollbar table-scroll-y p-1'>
            <Table responsive variant='dark' size='sm' style={{ fontSize: '15px' }} >
            <thead>
                <tr>
                    <th>Season</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {seasonByLeague?.map(season => (
                    <tr key={season?._id}>
                      <td><Link to={`../seasons/${season?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.season}</Link></td>
                      <td>{(season?.status) ? <span className='text-success'>Open!</span> : <span className='text-danger'>Closed!</span>}</td>
                    </tr>
                ))}
            </tbody>
          </Table>
          </div>
          : <Alert variant='warning'>there is no seasons to show!</Alert>}
        </>
  )
}

export default SectionSeasons
