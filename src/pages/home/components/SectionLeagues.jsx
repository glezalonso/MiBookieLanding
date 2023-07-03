import React, { useState } from 'react'
import { Table, FormControl } from 'react-bootstrap'
import { useGetLeagues } from '../../../features/leagues.features'
import { Link } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'

const SectionLeagues = () => {
  const [filter, setFilter] = useState('')
  const { data: leagues, isLoading, isError } = useGetLeagues()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load Leagues')

  const leaguesByFilter = leagues?.filter(league => {
    if (!filter) return league
    return league?.league?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>

        <Table responsive variant="dark table-sm" style={{ fontSize: '13px' }} hover>
            <tbody>
            {leaguesByFilter?.map(league => (
                <tr key={league?._id}>
                   <td> <Link className='btn btn-dark btn btn-sm w-100 text-start' to={`../leagues/${league?._id}`} >{league?.league}</Link></td>
                </tr>
            ))}
            </tbody>
        </Table>

        </>
  )
}
export default SectionLeagues
