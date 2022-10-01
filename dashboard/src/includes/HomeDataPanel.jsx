import React from 'react'

export default function HomeDataPanel({title, data, children}) {
    return (
        <>
            <section className='dataPanel container'>
                <h2>{title}</h2>
                {children}
            </section>
        </>
    )
}
