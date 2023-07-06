import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert, FormControl } from 'react-bootstrap'
import { useGetMatches } from '../../../features/matches.features'
import formatedDate from '../../../utils/formatedDate'
import Loading from '../../../ui/Loading'
import CardMatch from './CardMatch'

const SectionMatches = () => {
  const [filter, setFilter] = useState('')
  const { data: matches, isLoading, isError } = useGetMatches()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches!')

  const date = formatedDate()
  const matchesToday = matches?.filter(match => match?.date?.split('T')[0] === date)

  matchesToday.sort((a, b) => b.status - a.status)

  const matchFilter = matchesToday?.filter(match => {
    if (!filter) return match
    return match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) || match?.away?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Today matches ({matchesToday?.length})</h5>
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Search your team...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {(matchFilter?.length > 0)
          ? matchFilter?.map(match => (
             <CardMatch key={match?._id} match={match} />
          ))
          : <Alert variant='warning'>There are no matches to show!</Alert>}
          </section>
        </>
  )
}
export default SectionMatches
