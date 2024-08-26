import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'

type Props = {
    children: React.ReactNode;
}

function Layout({ children }: Props) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}

export default Layout