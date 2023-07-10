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
     <section >
     <h5 className="h7">Posiciones</h5>

    {sort?.length > 0
      ? <div style={{ maxHeight: '400px', overflow: 'auto' }}>
      <Table responsive variant='dark table-sm table-borderless' style={{ fontSize: '13px' }} hover >
        <thead>
            <tr>
              <th>
              No.
                </th>
              <th>
                Equipo
              </th>
             <th>
              Ganados
             </th>
             <th>
            Perdidos
             </th>
             <th>
              Empatados
             </th>
             {season?.sport?._id === ID_SOCCER
               ? <th>Puntos</th>
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
      : <Alert variant='warning'>No hay posiciones para mostrar!</Alert>}
       </section>
    </>
  )
}
export default SectionStandings
