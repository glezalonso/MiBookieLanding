import React from 'react'

const About = () => {
    return (
        <>
            <main className="container mx-auto min-h-screen p-1 lg:w-4/6">
                <article className="max-w-full bg-white my-3 p-4 rounded-lg hover:shadow-xl ">
                    <h1 className="text-gray-950 font-bold my-2 font-sans text-lg">
                        Condiciones de uso.
                    </h1>
                    <p className="text-gray-600 break-words">
                        Si decides hacer uso de cualquier información en este
                        sitio web, incluyendo cualquier publicación de usuarios,
                        te recomendamos encarecidamente que verifiques
                        cuidadosamente las leyes locales antes de hacerlo. Es tu
                        responsabilidad exclusiva comprender las leyes locales y
                        cumplirlas estrictamente. <br />
                        <strong>Mi Bookie</strong> no proporciona ningún consejo
                        o orientación sobre la legalidad de las apuestas
                        deportivas en línea u otras actividades de juego en
                        línea dentro de tu jurisdicción, y tú eres responsable
                        de cumplir con las leyes que te apliquen en tu localidad
                        relevante.
                        <br />
                        <strong>Mi Bookie</strong> no asume ninguna
                        responsabilidad asociada con tu uso de este sitio web o
                        el uso de cualquier información contenida en él. Como
                        condición para utilizar este sitio web, aceptas eximir
                        al propietario de este sitio web de cualquier reclamo
                        que surja de tu uso.
                    </p>
                </article>
            </main>
        </>
    )
}

export default About
