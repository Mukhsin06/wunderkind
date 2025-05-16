import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const MainLayout = () => {
    return (
        <div className='flex flex-col min-h-screen body '>
            <Header></Header>
            <div className='grow mt-30 '>
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout
