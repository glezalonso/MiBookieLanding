import React from 'react'
import { Table } from 'flowbite-react'
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
            <div className="rounded p-1 border-t-2">
                <Table hoverable className="table-auto mt-2 text-xs">
                    <Table.Body>
                        <Table.Row>
                            <Table.Cell className="p-1 m">
                                <AwaySection match={match} />
                            </Table.Cell>
                            <Table.Cell className="p-1 m">
                                <AwayVotes match={match} />
                            </Table.Cell>
                            {match?.date > fullDate ? (
                                <Table.Cell className="p-1 m">
                                    <AwayVote
                                        match={match}
                                        handleVote={handleVote}
                                    />
                                </Table.Cell>
                            ) : null}
                        </Table.Row>
                        {match?.sport?._id === ID_SOCCER ? (
                            <Table.Row>
                                <Table.Cell className="p-1 m">
                                    <DrawSection />
                                </Table.Cell>
                                <Table.Cell className="p-1 m">
                                    <DrawVotes match={match} />
                                </Table.Cell>
                                {match?.date > fullDate ? (
                                    <Table.Cell className="p-1 m">
                                        <DrawVote
                                            match={match}
                                            handleVote={handleVote}
                                        />
                                    </Table.Cell>
                                ) : null}
                            </Table.Row>
                        ) : null}
                        <Table.Row>
                            <Table.Cell className="p-1 m">
                                <LocalSection match={match} />
                            </Table.Cell>
                            <Table.Cell className="p-1 m">
                                <LocalVotes match={match} />
                            </Table.Cell>
                            {match?.date > fullDate ? (
                                <Table.Cell className="p-1 m">
                                    <LocalVote
                                        match={match}
                                        handleVote={handleVote}
                                    />
                                </Table.Cell>
                            ) : null}
                        </Table.Row>
                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default CardConsensus