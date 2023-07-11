import React, { useState } from 'react'
import { Table, FormControl } from 'react-bootstrap'
import { useGetLeagues } from '../../../features/leagues.features'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../ui/Loading'
import { toast } from 'react-hot-toast'

const SectionLeagues = () => {
  const [filter, setFilter] = useState('')
  const { data: leagues, isLoading, isError } = useGetLeagues()
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError) return toast.error('Hubo un error al cargar las ligas')

  const leaguesByFilter = leagues?.filter(league => {
    if (!filter) return league
    return league?.league?.toLowerCase().includes(filter.toLowerCase())
  })

  return (
        <>
        <section>
        <h5 className="h7">Ligas</h5>
        <div className='m-2 p-2'>
        <FormControl style={{ fontSize: '13px' }} name='filter' placeholder='Liga...' onChange={e => setFilter(e.target.value)}/>
        </div>
        <div className='table-responsive rounded '>
        <Table variant="dark table-sm table-borderless" style={{ fontSize: '13px' }} hover>
          <thead className='border-bottom'>
            <tr>
              <th>Liga</th>
            </tr>
          </thead>
            <tbody>
            {leaguesByFilter?.map(league => (
                <tr key={league?._id} onClick={() => navigate(`../leagues/${league?._id}`)}>
                   <td>{league?.league}</td>
                </tr>
            ))}
            </tbody>
        </Table>
        </div>
        </section>
        </>
  )
}
export default SectionLeagues
