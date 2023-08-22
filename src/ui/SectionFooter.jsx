import React from 'react'
import { Footer } from 'flowbite-react'

const SectionFooter = () => {
    return (
        <>
            <Footer
                container
                className="flex mx-auto bg-transparent justify-center my-3 p-2"
            >
                <Footer.Copyright by="Mi Bookie™" year={2023} />
            </Footer>
        </>
    )
}

export default SectionFooter
