import React from 'react'
import { Alert, Table } from 'react-bootstrap'

const SectionStandings = ({ season }) => {
  const sort = season?.standings?.sort((a, b) => {
    return b.wins - a.wins
  })

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
          {sort.map(stands => (
            <tr key={stands?.team?._id}>
              <td>{stands.team?.name}</td>
              <td>{stands?.wins}</td>
              <td>{stands?.loses}</td>
              <td>{stands.draws}</td>
              <td>{season?.sport?._id === '648f71dea4ba8860dfe3830f' ? stands?.wins * 3 + stands?.draws : null }</td>
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
