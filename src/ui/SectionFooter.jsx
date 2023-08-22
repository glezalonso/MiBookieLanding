import React from 'react'
import { Footer } from 'flowbite-react'

const SectionFooter = () => {
    return (
        <>
            <Footer container className=" bg-transparent  my-3 p-2">
                <Footer.Copyright
                    className=" mx-auto flex self-center"
                    by="Mi Bookie™"
                    year={2023}
                />
            </Footer>
        </>
    )
}

export default SectionFooter
