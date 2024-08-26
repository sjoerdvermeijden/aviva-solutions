import React from 'react'

import Header from '../Header/Header'

type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <>
            <div className="overlay"></div>
            <Header />
            {children}
        </>
    )
}

export default Layout