import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import { Alert, FormControl } from 'react-bootstrap'
import { useGetMatchesToday } from '../../../features/matches.features'
import Loading from '../../../ui/Loading'
import CardMatch from './CardMatch'

const SectionMatches = () => {
  const [filter, setFilter] = useState('')

  const { data: matches, isLoading, isError } = useGetMatchesToday()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar los partidos!')

  matches.sort((a, b) => b.status - a.status)

  const matchFilter = matches?.filter(match => {
    if (!filter) return match
    return match?.local?.name?.toLowerCase().includes(filter.toLowerCase()) || match?.away?.name?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>

        <h5 className="h7">Partidos de hoy ({matches?.length})</h5>
        <div className='m-2 p-2'>
        <FormControl name='filter' style={{ fontSize: '13px' }} placeholder='Busca tu equipo...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {(matchFilter?.length > 0)
          ? matchFilter?.map(match => (
             <CardMatch key={match?._id} match={match} />
          ))
          : <Alert variant='warning'>No hay partidos para mostrar!</Alert>}

        </>
  )
}
export default SectionMatches
