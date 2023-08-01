import React from 'react'
import { Table } from 'react-bootstrap'
import { useGetPicksClosed } from '../../features/matches.features'
import { PersonCircle } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const SectionBookies = ({ user }) => {
    const { data: matchesClosed } = useGetPicksClosed(user?._id)
    const act = matchesClosed?.map((match) => {
        let result = ''
        const away = match?.score?.map((away) => away?.away)
        const local = match?.score?.map((local) => local?.local)
        if (Number(away) > Number(local)) {
            result = 'away'
        } else {
            result = 'local'
        }

        const picks = match?.votes?.filter(
            (vote) => vote?.username?._id === user?._id
        )

        const aciertos = picks?.map((votes) => {
            let hits = 0
            if (votes.option === result) {
                hits += 1
            }
            return hits
        })

        return aciertos
    })

    const aciertos = act?.filter((e) => Number(e) === 1)

    return (
        <>
            <section className="bg-light rounded p-1 my-1">
                <Table responsive size="sm" borderless hover className="my-1">
                    <tbody>
                        <tr>
                            <td>
                                <div className="my-2">
                                    <PersonCircle
                                        color="dark"
                                        className="mx-1"
                                    />
                                    <span className="mx-1 text-muted fw-bold">
                                        {user?.username}
                                    </span>
                                </div>
                            </td>

                            <td>
                                <div className="d-flex justify-content-end ">
                                    <div className="my-1 border-start">
                                        {matchesClosed?.length < 1 ? null : (
                                            <>
                                                <p className="mx-2 my-1 text-muted fw-bold">
                                                    Predicción
                                                    <span className="mx-1">
                                                        {Math.round(
                                                            (aciertos?.length *
                                                                100) /
                                                                matchesClosed?.length
                                                        )}
                                                        %
                                                    </span>
                                                </p>
                                            </>
                                        )}
                                    </div>
                                    <div className="my-1">
                                        <Link
                                            to={`../profile/${user?._id}`}
                                            className="btn btn-sm btn-dark"
                                        >
                                            Perfil
                                        </Link>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </>
    )
}

export default SectionBookies
