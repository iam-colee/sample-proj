import React from 'react'
import { Outlet } from 'react-router-dom'

export default function RootLayout({ showNavbar = true, showFooter = true }) {
    return (
        <div className='bg-background h-auto w-full p-0 m-0'>
            {showNavbar && <Navbar />}
                <main className='2xl:container mx-auto p-4 lg:p-8'>
                    <Outlet />
                </main>
            {showFooter && <Footer />}
        </div>
    )
}
