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
    return match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) || match?.local?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Filter...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {(matchFilter?.length > 0)
          ? matchFilter?.map(match => (
             <CardMatch key={match?._id} match={match} />
          ))
          : <Alert variant='warning'>There is no matches to show!</Alert>}
        </>
  )
}
export default SectionMatches
