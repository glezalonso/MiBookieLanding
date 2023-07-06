import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useGetSeasons } from '../../../features/seasons.features'

const SectionStandings = ({ player }) => {
  const { data: season } = useGetSeasons()

  // counter
  let i = 1

  // SoccerID
  const ID_SOCCER = '648f71dea4ba8860dfe3830f'

  const seasonsByPlayer = season?.filter(season => season?.sport?._id === player?.sport?._id && season?.status === true)

  const sort = seasonsByPlayer?.map(season => season?.standings?.sort((a, b) => {
    return b.wins - a.wins && b.draws - a.draws
  }))

  return (
    <>
    <section>
    <h5 className="h7">Standings</h5>

    {sort?.length > 0
      ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <Table responsive variant='dark table-sm' style={{ fontSize: '13px' }} >
        <thead>
            <tr>
            <th>Rank</th>
              <th>
                Team
              </th>
             <th>
               wins
             </th>
             <th>
              loses
             </th>
             <th>
              draws
             </th>
             {player?.sport?._id === ID_SOCCER
               ? <th>points</th>
               : null}
            </tr>
        </thead>
        <tbody>
          {sort.map(stands => stands.map(stands => (
            <tr key={stands?.team?._id}>
              <td>{i++}</td>
              <td>{stands.team?.name}</td>
              <td>{stands?.wins}</td>
              <td>{stands?.loses}</td>
              <td>{stands.draws}</td>
              {player?.sport?._id === ID_SOCCER
                ? <td>{player?.sport?._id === ID_SOCCER ? stands?.wins * 3 + stands?.draws : null }</td>
                : null}
            </tr>
          )))}
        </tbody>
      </Table>
      </div>
      : <Alert variant='warning'>There are no standings to show</Alert>}
       </section>
    </>
  )
}
export default SectionStandings
