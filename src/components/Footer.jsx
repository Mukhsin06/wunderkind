import React from 'react'
import logo from '../img/logo.png'
import { FaInstagram, FaTelegram, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import map from '../img/google-maps.png'


const Footer = () => {
  return (
    <div>
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white py-12 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-2 items-center md:grid-cols-4 gap-10">
        <div className="flex flex-col items-start gap-4">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black text-xl font-bold shadow-md hover:rotate-6 transition-transform duration-300">
            <img src={logo} alt="logo" className='rounded-full' />
          </div>
          <p className="text-gray-400 text-sm">Wunderkind o'quv markazi — farzandingizning kelajagi uchun ilk qadam.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Manzil</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Toshkent Viloyati</li>
            <li>Angren shahar</li>
            <li>Qarabo‘g‘ mahallasi, Navoi ko‘chasi</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Ish vaqtlari</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Dushanba - Juma: 07:00 - 18:00</li>
            <li>Shanba: Yopiq</li>
            <li>Yakshanba: Yopiq</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Aloqa</h3>
          <ul className="text-gray-300 text-sm space-y-1">
            <li><FaPhone className="inline mr-2" />+998 90 142 05 05</li>
            <li><FaPhone className="inline mr-2" />+998 99 077 30 505</li>
          </ul>
          <div className="flex gap-4 items-center">
          <div className="flex gap-4 mt-4">
            <a href="https://www.instagram.com/wunderkind_bolalarbogchasi/" className="hover:scale-110 transition-transform">
              <FaInstagram className="w-6 h-6 text-pink-400" />
            </a>
            <a href="https://t.me/+Og0Hsr9WtMQxNDRi?fbclid=PAZXh0bgNhZW0CMTEAAafUl1-c_dhvdhE-NZ-gXZgnxxt5qh5zGxf3P3FgBgJtaBZqGbf77Z-7CsiGqQ_aem_BGM2awvaEiuoS7oWSndreQ" className="hover:scale-110 transition-transform">
              <FaTelegram className="w-6 h-6 text-blue-400" />
            </a>
          </div>
          <div className="flex gap-4 text-gray-400 mt-3">   
            <a href="https://www.google.com/maps/place/Wunderkind/@41.0331946,70.0670321,19z/data=!4m6!3m5!1s0x38afebec4065cd21:0x9aff85a5ffd5e8b0!8m2!3d41.0332674!4d70.0688989!16s%2Fg%2F11mwzb223g?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"><img src={map} alt="" className='w-6 h-6'/></a>
            <a href="https://www.google.com/maps/place/41%C2%B001'24.8%22N+70%C2%B004'09.7%22E/@41.0231164,70.0676441,18z/data=!4m4!3m3!8m2!3d41.0235556!4d70.0693611?entry=ttu&g_ep=EgoyMDI1MDUxMy4xIKXMDSoASAFQAw%3D%3D"><img src={map} alt="" className='w-6 h-6'/></a>
          </div>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Wunderkind. Barcha huquqlar himoyalangan.
      </div>
    </footer>

    </div>
  )
}

export default Footer
