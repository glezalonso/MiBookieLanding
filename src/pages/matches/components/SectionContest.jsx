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
            <div className="bg-dark text-light d-flex rounded justify-content-center  vw-50 mx-auto ">
                <Table variant="dark" borderless className="my-2">
                    <tbody>
                        <tr>
                            <td className="d-flex justify-content-end">
                                <img
                                    style={{
                                        width: '80px',
                                        height: '80px',
                                    }}
                                    src={match?.away?.poster}
                                    alt={match.away?.name}
                                />
                            </td>
                            <td>
                                <div className="d-flex justify-content-center my-2 ">
                                    <At width={'50px'} height={'50px'} />
                                </div>
                            </td>
                            <td className='d-flex className="justify-content-start"'>
                                <img
                                    style={{
                                        width: '80px',
                                        height: '80px',
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
                                        size="sm"
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
                                        size="sm"
                                        variant="warning mx-4"
                                        onClick={() =>
                                            handleVote('local', match?._id)
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
