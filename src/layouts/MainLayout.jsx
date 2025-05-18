import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'


const MainLayout = ({ children }) => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Header></Header>
            <div className='grow pt-15 '>
                {children}
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
