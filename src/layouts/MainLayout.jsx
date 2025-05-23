import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'


const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen body '>
            <Header></Header>
            <div className='grow mt-30 '>
                <Outlet />
            </div>
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
