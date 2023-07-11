import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useGetSeasons } from '../../../features/seasons.features'
import { useNavigate } from 'react-router-dom'

const SectionStandings = ({ player }) => {
  const { data: season } = useGetSeasons()
  const navigate = useNavigate()

  // counter
  let i = 1

  // SoccerID
  const ID_SOCCER = '648f71dea4ba8860dfe3830f'
  const ID_BASEBALL = '648f7211a4ba8860dfe38319'

  const seasonsByPlayer = season?.filter(season => season?.sport?._id === player?.sport?._id && season?.status === true)

  const sort = seasonsByPlayer?.map(season => season?.standings?.sort((a, b) => {
    if (b.wins !== a.wins) {
      return b.wins - a.wins
    } else {
      return b.draws - a.draws
    }
  }))

  return (
    <>
    <section>
    <h5 className="h7">Posiciones</h5>

    {sort?.length > 0
      ? <div className='table-resposive' style={{ maxHeight: '400px', overflow: 'auto' }}>
      <Table variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover>
        <thead>
            <tr>
            <th>No.</th>
              <th>
               Equipo
              </th>
             <th>
               Ganados
             </th>
             <th>
             Perdidos
             </th>
             {player?.sport?._id !== ID_BASEBALL
               ? <th>
                Empatados
               </th>
               : null}
             {player?.sport?._id === ID_SOCCER
               ? <th>points</th>
               : null}
            </tr>
        </thead>
        <tbody>
          {sort.map(stands => stands.map(stands => (
            <tr key={stands?.team?._id} onClick={() => navigate(`../teams/${stands?.team?._id}`)}>
              <td>{i++}</td>
              <td>{stands.team?.name}</td>
              <td>{stands?.wins}</td>
              <td>{stands?.loses}</td>
              {player?.sport?._id !== ID_BASEBALL
                ? <td>{stands?.draws}</td>
                : null}
              {player?.sport?._id === ID_SOCCER
                ? <td>{player?.sport?._id === ID_SOCCER ? stands?.wins * 3 + stands?.draws : null }</td>
                : null}
            </tr>
          )))}
        </tbody>
      </Table>
      </div>
      : <Alert variant='warning'>No hay posiciones para mostrar!</Alert>}
       </section>
    </>
  )
}
export default SectionStandings
