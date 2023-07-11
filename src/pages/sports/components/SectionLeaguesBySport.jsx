import React, { useState } from 'react'
import { useGetLeagues } from '../../../features/leagues.features'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'
import { Table, FormControl, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SectionLeaguesBySport = ({ sport }) => {
  const [filter, setFilter] = useState('')
  const { data: leagues, isLoading, isError } = useGetLeagues()
  const navigate = useNavigate()

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
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Liga...' onChange={e => setFilter(e.target.value)}/>
        </div>
        {leaguesFilter?.length > 0
          ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
            <Table responsive variant="dark table-sm table-borderless" style={{ fontSize: '13px' }} hover>
            <thead className='border-bottom'>
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
                <tr key={league?._id} onClick={() => navigate(`../leagues/${league?._id}`)}>
                  <td>{league?.league}</td>
                  <td>{league?.description}</td></tr>
              ))}
            </tbody>
        </Table>
        </div>
          : <Alert variant='warning'>No hay ligas para mostrar!</Alert>
        }
         </section>
        </>
  )
}

export default SectionLeaguesBySport
