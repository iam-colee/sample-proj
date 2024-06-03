import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar';
import Footer from '../components/footer/Footer';

export default function MainLayout({ showNavbar = true, showFooter = true }) {
    return (
        <div className='bg-background h-auto w-full p-0 m-0'>
            {showNavbar && <Navbar />}
                <Outlet />
            {showFooter && <Footer />}
        </div>
    )
}
