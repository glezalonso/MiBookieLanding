import React from 'react'
import { Table, Alert, Col } from 'react-bootstrap'

const SectionLineUps = ({ match }) => {
  return (
    <>
    <Col md={5} className='border rounded mx-auto p-3 fs-4'>
      <section>
    <h5 className="h7">Away Lineup</h5>
    { match?.lineup?.length > 0

      ? <Table responsive variant="dark table-sm" style={{ fontSize: '13px' }} striped>
      <thead>
          <tr>
              <th>Player</th>
              <th>Position</th>

          </tr>
      </thead>
      <tbody>
          { match?.lineup?.map(away => away?.away?.map(player => (
          <tr key={player?.playerId?._id}><td>{player?.playerId?.fullName}</td><td>{player?.playerId?.position}</td>

          </tr>

          )))}
    </tbody>
      </Table>
      : <Alert variant='warning'>There are no lineups to show!</Alert>}
      </section>
    </Col>
    <Col md={5} className='border rounded mx-auto p-3 fs-4'>
      <section>
    <h5 className="h7">Local Lineup</h5>
    { match?.lineup?.length > 0

      ? <Table responsive variant="dark table-sm" style={{ fontSize: '13px' }} striped>
      <thead>
          <tr>
              <th>Player</th>
              <th>Position</th>

          </tr>
      </thead>
      <tbody>
          { match?.lineup?.map(local => local?.local?.map(player => (
          <tr key={player?.playerId?._id}><td>{player?.playerId?.fullName}</td><td>{player?.playerId?.position}</td>

          </tr>

          )))}
    </tbody>
      </Table>
      : <Alert variant='warning'>There are no lineups to show!</Alert>}
      </section>
    </Col>
    </>
  )
}

export default SectionLineUps
