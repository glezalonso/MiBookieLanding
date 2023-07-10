import React, { useState } from 'react'
import { useGetLeagues } from '../../../features/leagues.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionLeaguesBySport = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: leagues, isLoading, isError } = useGetLeagues()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar las ligas!')

  const leaguesBySport = leagues?.filter(league => league?.sport._id === sport?._id)

  const leaguesFilter = leaguesBySport?.filter(league => {
    if (!filter) return league
    return league?.league?.toLowerCase().includes(filter.toLowerCase())
  })
  return (
        <>
        <section >
        <h5 className="h7"> Ligas de {sport?.sport}</h5>
         <div className='m-2 p-2'>
        <FormControl name='filter' placeholder='Liga...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {leaguesFilter?.length > 0
          ? <Table responsive variant="dark table-sm table-borderless" style={{ fontSize: '13px' }} hover>
            <thead>
                <tr>
                  <th>
                    Liga
                  </th>
                  <th>
                   Descripción
                  </th>
                </tr>
            </thead>
            <tbody>
              {leaguesFilter?.map(league => (
                <tr key={league?._id}><td><Link to={`../leagues/${league?._id}`} className='btn btn-dark btn btn-sm w-100 text-start'>{league?.league}</Link></td><td>{league?.description}</td></tr>
              ))}
            </tbody>

        </Table>
          : <Alert variant='warning'>No hay ligas para mostrar!</Alert>
        }
         </section>
        </>
  )
}

export default SectionLeaguesBySport
