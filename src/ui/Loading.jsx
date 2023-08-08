import React from 'react'
import { Spinner } from 'flowbite-react'

const Loading = () => {
    return (
        <>
            <div className="flex justify-center my-5">
                <Spinner color="warning" />
            </div>
        </>
    )
}

export default Loading
