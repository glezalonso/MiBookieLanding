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

  seasonsByFilter.sort((a, b) => b.status - a.status)

  return (
        <>
        <section >
        <h5 className="h7">Temporadas de {sport?.sport} </h5>
        <div className='m-2 p-3'>
        <FormControl name='filter' placeholder='Temporada...' onChange={e => setFilter(e.target.value)}/>
        </div>
          {seasonsByFilter?.length > 0
            ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
          <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover>
            <thead>
              <tr>
                <th>
                 Tempoarada
                </th>
                <th>
                 Liga
                </th>
                <th>
                 Estatus
                </th>
              </tr>
            </thead>
            <tbody>
              {seasonsByFilter?.map(season => (
                <tr key={season?._id} >
                <td><Link to={`../seasons/${season?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.season}</Link></td>
                <td><Link to={`../leagues/${season?.league?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.league?.league}</Link></td>
                <td>{(season?.status) ? <span className='text-success'>Abierta</span> : <span className='text-danger'>Cerrada</span>}</td>
                </tr>
              ))}

            </tbody>

          </Table>
          </div>
            : <Alert variant='warning'>No hay temporadas para mostrar!</Alert>}
          </section>
        </>
  )
}

export default SectionSeasonsBySport
