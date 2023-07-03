import React from 'react'
import { toast } from 'react-hot-toast'
import { Alert } from 'react-bootstrap'
import { useGetMatches } from '../../../features/matches.features'
import formatedDate from '../../../utils/formatedDate'
import Loading from '../../../ui/Loading'
import CardMatch from './CardMatch'

const SectionMatches = () => {
  const { data: matches, isLoading, isError } = useGetMatches()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Failed to load matches!')

  const date = formatedDate()
  const matchesToday = matches?.filter(match => match?.date?.split('T')[0] === date)

  return (
        <>
        {(matchesToday?.length > 0)
          ? matchesToday?.map(match => (
             <CardMatch key={match?._id} match={match} />
          ))
          : <Alert variant='warning'>There is no matches to show!</Alert>}
        </>
  )
}
export default SectionMatches
