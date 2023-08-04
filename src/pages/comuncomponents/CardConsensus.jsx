import React from 'react'
import { Table, Card } from 'react-bootstrap'
import { useAddPickEm } from '../../features/matches.features'
import { useAuthStore } from '../../store/authorization'
import { toast } from 'react-hot-toast'

// Local team sections
import LocalVotes from './LocalVotes'
import LocalSection from './LocalSection'

// Away team sections
import AwaySection from './AwaySection'
import AwayVote from './AwayVote'
import AwayVotes from './AwayVotes'

// draw section only for soccer
import DrawSection from './DrawSection'
import DrawVote from './DrawVote'
import DrawVotes from './DrawVotes'

// utilities
import formatedDate from '../../utils/formatedDate'
import formatedHour from '../../utils/formatedHour'
import LocalVote from './LocalVote'

const CardConsensus = ({ match }) => {
    const id = useAuthStore((state) => state.profile.id)
    const addVote = useAddPickEm()
    const date = formatedDate()
    const hour = formatedHour()
    const fullDate = `${date}T${hour}`
    const ID_SOCCER = '648f71dea4ba8860dfe3830f'

    const handleVote = (option, match) => {
        if (!id) return toast.error('Debes iniciar sesión para comentar')
        addVote.mutate({ body: { option, match, userId: id } })
    }

    return (
        <>
            <Card.Body className="rounded">
                <Table responsive borderless hover size="sm" className="my-1">
                    <tbody>
                        <tr>
                            <td>
                                <AwaySection match={match} />
                            </td>
                            <td>
                                <AwayVotes match={match} />
                            </td>
                            {match?.date > fullDate ? (
                                <td>
                                    <AwayVote
                                        match={match}
                                        handleVote={handleVote}
                                    />
                                </td>
                            ) : null}
                        </tr>
                        {match?.sport?._id === ID_SOCCER ? (
                            <tr>
                                <td>
                                    <DrawSection />
                                </td>
                                <td>
                                    <DrawVotes match={match} />
                                </td>

                                <td>
                                    <DrawVote
                                        match={match}
                                        handleVote={handleVote}
                                    />
                                </td>
                            </tr>
                        ) : null}
                        <tr>
                            <td>
                                <LocalSection match={match} />
                            </td>
                            <td>
                                <LocalVotes match={match} />
                            </td>
                            {match?.date > fullDate ? (
                                <td>
                                    <LocalVote
                                        match={match}
                                        handleVote={handleVote}
                                    />
                                </td>
                            ) : null}
                        </tr>
                    </tbody>
                </Table>
            </Card.Body>
        </>
    )
}

export default CardConsensus
