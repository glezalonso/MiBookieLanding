import React, { useState } from 'react'
import { useGetMatches } from '../../../features/matches.features'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { Alert, Table, FormControl } from 'react-bootstrap'

const SectionMatches = ({ league }) => {
  const [filter, setFilter] = useState('')
  const { data: matches, isLoading, isError } = useGetMatches()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches')

  const matchesByLeague = matches?.filter(match => match?.league?._id === league?._id && match?.status === true)

  const matchesByFilter = matchesByLeague?.filter(matches => {
    if (!filter) return matches
    return matches?.away?.name?.toLowerCase().includes(filter.toLowerCase()) || matches?.local?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Next matches</h5>

          <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>

        {matchesByFilter?.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
            <thead>
                <tr>

                    <th>Round</th>
                    <th>Date</th>
                    <th>Local</th>
                    <th>Away</th>
                    <th>Score</th>
                </tr>
            </thead>
            <tbody >
              {matchesByFilter?.map(match => (
                <tr key={match?._id}>

                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../rounds/${match?.round?._id}`}>{match?.round?.round}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../matches/${match?._id}`}>{match?.date.split('T', 3).join(' ')}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../teams/${match?.local?._id}`}>{match?.local?.name}</Link></td>
                    <td><Link className='btn btn-dark btn-sm w-100 text-start' to={`../teams/${match?.away?._id}`}>{match?.away?.name}</Link></td>
                    <td>{match?.score?.map(score => score?.local)} - {match?.score?.map(score => score?.away)}</td>

                </tr>
              ))}
            </tbody>
            <caption>Total matches: {matchesByFilter?.length}</caption>
          </Table>
          </div>
          : <Alert variant='warning'>There are no matches to show!</Alert>}
          </section>
        </>
  )
}
export default SectionMatches
