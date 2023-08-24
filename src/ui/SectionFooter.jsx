import React from 'react'
import { Footer } from 'flowbite-react'

const SectionFooter = () => {
    return (
        <>
            <Footer
                container
                className="flex mx-auto bg-transparent justify-center mt-3 p-2"
            >
                <Footer.Copyright by="www.mibookie.app" year={2023} />
            </Footer>
        </>
    )
}

export default SectionFooter
