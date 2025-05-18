import React, { useState } from 'react'
import { Link, useLocation } from 'react-router'
import logo from "../img/logo.png"
import phone from "../img/phone-call.png"
import hamburger from '../img/hamburger.svg'

const Header = () => {
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='py-6 shadow-md fixed z-10 w-full bg-white font-nunito'>
            <div className="container flex justify-between items-center">
                {/* logo  */}
                <Link to="/"><img src={logo} alt="logo" className='w-18 rounded-full' /> </Link>
                {/* nav */}
                <ul className='gap-6 items-center hidden lg:flex'>
                    <Link to="/"><li className={`${location.pathname === '/' ? 'bg-main text-white' : ''} py-3 px-6 border-2 rounded-2xl text-mainText font-nunito font-extrabold text-base uppercase border-main hover:bg-main hover:text-white ease-in-out duration-200 transition-all`}>Bosh sahifa</li></Link>
                    <Link to="/about"><li className={`${location.pathname === '/about' ? 'bg-main text-white' : ''} py-3 px-6 border-2 rounded-2xl text-mainText font-nunito font-extrabold text-base uppercase border-main hover:bg-main hover:text-white ease-in-out duration-200 transition-all`}>Biz haqimizda</li></Link>
                    <Link to="/kurslar"><li className={`${location.pathname === '/kurslar' ? 'bg-main text-white' : ''} py-3 px-6 border-2 rounded-2xl text-mainText font-nunito font-extrabold text-base uppercase border-main hover:bg-main hover:text-white ease-in-out duration-200 transition-all`}>Kurslar</li></Link>
                </ul>
                <div className="hidden lg:flex gap-6 items-center ">
                    <div className="flex items-center gap-3  lg px-4 py-2 w-fit">
                        <div className="text-main text-3xl">
                            <img src={phone} alt="" className='w-14' />
                        </div>
                        <div className="leading-tight">
                            <p className="text-gray-500 text-sm">Mon-Sat: 12:30–20:30</p>
                            <p className="text-main font-bold text-lg">+918069490088</p>
                        </div>
                    </div>
                    <button className='text-white rounded-2xl cursor-pointer py-2.5 px-6 font-medium text-xl leading-[30px] bg-main hover:opacity-70 ease-in-out duration-200'>Murojat uchun</button>
                </div>
                <button
                    onClick={() => setIsOpen(true)}
                    className="p-3 block lg:hidden bg-blue-900 text-white rounded-md shadow hover:opacity-40 transition"
                >
                    <img src={hamburger} alt="" className='w-8' />
                </button>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black/40 bg-opacity-50 z-40"
                />
            )}

            <div
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-semibold">Menu</h2>
                    <button onClick={() => setIsOpen(false)}>
                        x
                    </button>
                </div>
                <div className="p-5">
                <ul className='gap-3 flex flex-col'>
                    <Link to="/"><li className='text-maintext font-nunito font-extrabold text-base uppercase '>Bosh sahifa</li></Link>
                    <Link to="/about"><li className='text-maintext font-nunito font-extrabold text-base uppercase '>Biz haqimizda</li></Link>
                    <Link to="/kurslar"><li className='text-maintext font-nunito font-extrabold text-base uppercase '>Kurslar</li></Link>
                </ul>
                <div className="flex items-center gap-3  lg px-4 py-2 w-fit">
                        <div className="text-main text-3xl">
                            <img src={phone} alt="" className='w-14' />
                        </div>
                        <div className="leading-tight">
                            <p className="text-main font-bold text-lg">+918069490088</p>
                        </div>
                    </div>
                <button className='text-white rounded-2xl w-full cursor-pointer py-2.5 px-6 font-medium text-xl leading-[30px] bg-main hover:opacity-70 ease-in-out duration-200'>Murojat uchun</button>
</div>
            </div>

        </header>
    )
}

export default Header
