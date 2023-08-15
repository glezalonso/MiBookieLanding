import React from 'react'
import TagOdds from './TagOdds'
import TagOU from './TagOU'
import { sport } from '../../const/sportconst'

const CardOdds = ({ match }) => {
    return (
        <div className=" bg-zinc-950 rounded p-1 mt-1 border-t-2">
            <div className="flex justify-center gap-2">
                <TagOdds icon={'1'} match={match?.oddHome} />
                {match?.sport?._id === sport.ID_SOCCER ? (
                    <TagOdds icon={'x'} match={match?.oddDraw} />
                ) : null}
                <TagOdds icon={'2'} match={match?.oddAway} />
            </div>
            {match?.oddOverUnder?.length > 0 ? <TagOU match={match} /> : null}
        </div>
    )
}

export default CardOdds
