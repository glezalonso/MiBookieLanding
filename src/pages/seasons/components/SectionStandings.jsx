import React from 'react'
import { Alert, Table } from 'react-bootstrap'

const SectionStandings = ({ season }) => {
  // counter
  let i = 1

  // SoccerID
  const ID_SOCCER = '648f71dea4ba8860dfe3830f'
  const sort = season?.standings?.sort((a, b) => {
    if (b.wins !== a.wins) {
      return b.wins - a.wins
    } else {
      return b.draws - a.draws
    }
  })

  return (
    <>
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
             {season?.sport?._id === ID_SOCCER
               ? <th>points</th>
               : null}
            </tr>
        </thead>
        <tbody>
          {sort.map(stands => (
            <tr key={stands?.team?._id}>
              <td>{i++}</td>
              <td>{stands.team?.name}</td>
              <td>{stands?.wins}</td>
              <td>{stands?.loses}</td>
              <td>{stands.draws}</td>
              {season?.sport?._id === ID_SOCCER
                ? <td>{season?.sport?._id === ID_SOCCER ? stands?.wins * 3 + stands?.draws : null }</td>
                : null}

            </tr>
          ))}
        </tbody>
      </Table>
      </div>
      : <Alert variant='warning'>There is no standings to show</Alert>}
    </>
  )
}
export default SectionStandings
