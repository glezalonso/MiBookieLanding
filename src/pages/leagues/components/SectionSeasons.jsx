import React from 'react'
import { useGetSeasons } from '../../../features/seasons.features'
import { toast } from 'react-hot-toast'
import Loading from '../../../ui/Loading'
import { Table, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SectionSeasons = ({ league }) => {
  const { data: seasons, isLoading, isError } = useGetSeasons()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar las temporadas!')

  const seasonByLeague = seasons?.filter(season => season?.league?._id === league?._id)

  seasonByLeague.sort((a, b) => b.status - a.status)
  return (
        <>
        <section>
        <h5 className="h7">Temporadas disponibles</h5>

        {seasonByLeague?.length > 0
          ? <div className='my-scrollbar table-scroll-y p-1'>
            <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
            <thead>
                <tr>
                    <th>Temporada</th>
                    <th>Estatus</th>
                </tr>
            </thead>
            <tbody>
                {seasonByLeague?.map(season => (
                    <tr key={season?._id}>
                      <td><Link to={`../seasons/${season?._id}`} className='btn btn-dark btn-sm w-100 text-start'>{season?.season}</Link></td>
                      <td>{(season?.status) ? <span className='text-success'>Abierta!</span> : <span className='text-danger'>Cerrada!</span>}</td>
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

export default SectionSeasons
