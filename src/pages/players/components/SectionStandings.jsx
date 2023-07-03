import React from 'react'
import { Alert, Table } from 'react-bootstrap'
import { useGetSeasons } from '../../../features/seasons.features'

const SectionStandings = ({ player }) => {
  const { data: season } = useGetSeasons()

  const seasonsByPlayer = season?.filter(season => season?.sport?._id === player?.sport?._id && season?.status === true)

  const sort = seasonsByPlayer?.map(season => season?.standings?.sort((a, b) => {
    return b.wins - a.wins && b.draws - a.draws
  }))

  return (
    <>
    {sort?.length > 0
      ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <Table responsive variant='dark' style={{ fontSize: '15px' }} >
        <thead>
            <tr>
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
             <th>
              points
             </th>
            </tr>
        </thead>
        <tbody>
          {sort.map(stands => stands.map(stands => (
            <tr key={stands?.team?._id}>
              <td>{stands.team?.name}</td>
              <td>{stands?.wins}</td>
              <td>{stands?.loses}</td>
              <td>{stands.draws}</td>
              <td>{player?.sport?._id === '648f71dea4ba8860dfe3830f' ? stands?.wins * 3 + stands?.draws : null }</td>
            </tr>
          )))}
        </tbody>
      </Table>
      </div>
      : <Alert variant='warning'>There is no standings to show</Alert>}
    </>
  )
}
export default SectionStandings
