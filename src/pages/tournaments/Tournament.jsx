import React from 'react'
import { useParams } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useGetRoundsTour } from '../../features/rounds.features'
import trophytour from '../../icons/trophytour.svg'
import SectionMini from './components/SectionMini'
import Loading from '../../ui/Loading'

const Tournament = () => {
    const { id } = useParams()
    const { data: round, isLoading, isError } = useGetRoundsTour(id)

    if (isLoading) return <Loading />
    if (isError) return toast.error('Hubo un error al los torneos!')

    return (
        <>
            <main className="container mx-auto min-h-screen p-1 md:w-11/12    2xl:w-3/4">
                <h1 className=" flex items-center  gap-1 my-2 mx-1 text-lg font-semibold text-gray-800">
                    <img src={trophytour} alt="trofeo" className="h-7 w-7" />
                    Mini Torneos
                </h1>
                <section className="grid grid-cols-8 gap-2">
                    {round?.map((match) => (
                        <SectionMini key={match?._id} round={match} />
                    ))}
                </section>
            </main>
        </>
    )
}
export default Tournament
