import React from 'react'
import { Button, Table } from 'react-bootstrap'
import { At } from 'react-bootstrap-icons'
import { useAddPickEm } from '../../../features/matches.features'
import { useAuthStore } from '../../../store/authorization'
import { toast } from 'react-hot-toast'

const SectionContest = ({ match }) => {
    const { profile } = useAuthStore((state) => state)
    const addVote = useAddPickEm()

    const handleVote = (option, match) => {
        if (!profile) return toast.error('Debes iniciar sesión para comentar')
        addVote.mutate({ body: { option, match, username: profile } })
    }

    return (
        <>
            <div className="bg-dark text-light d-flex rounded justify-content-center p-3 vw-50 mx-auto gap-3">
                <Table variant="dark" borderless>
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-end">
                                <img
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                    }}
                                    src={match?.away?.poster}
                                    alt={match.away?.name}
                                />
                            </td>
                            <td>
                                <div className="d-flex justify-content-center my-2 m-0">
                                    <At width={'50px'} height={'50px'} />
                                </div>
                            </td>
                            <td className='d-flex className="justify-content-start"'>
                                <img
                                    style={{
                                        width: '100px',
                                        height: '100px',
                                    }}
                                    src={match?.local?.poster}
                                    alt={match.local?.name}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex justify-content-end">
                                    <Button
                                        variant="warning mx-4"
                                        onClick={() =>
                                            handleVote('away', match?._id)
                                        }
                                    >
                                        Votar
                                    </Button>
                                </div>
                            </td>
                            <td></td>
                            <td>
                                <div className="d-flex justify-content-start">
                                    <Button
                                        variant="warning mx-4"
                                        onClick={() =>
                                            handleVote('away', match?._id)
                                        }
                                    >
                                        Votar
                                    </Button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}

export default SectionContest
