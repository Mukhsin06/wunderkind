import React, { useState } from 'react'
import youngGirl from "../img/youngGirl.png"
import glassesKid from "../img/glassesKid.png"
import img1 from "../img/img1.png"
import img2 from "../img/img2.png"
import img3 from "../img/img3.png"
import blackGlasses from "../img/blackGlasses.png"
import { fikrlash, testimonials } from '../data/data'
import age1 from "../img/age1.png"
import age2 from "../img/age2.png"
import age3 from "../img/age3.png"
import redVector from "../img/redVector.png"
import laptopGirl from "../img/laptopGirl.png"
import calendar from "../img/calendar.png"
import quote from "../img/quote.png"
import lisa from "../img/lisa.png"
import jimmy from "../img/jimmy.png"
import trophy from "../img/trophy.png"
import video from '../img/video.MOV'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";




const Home = () => {
  const [numberValue, setNumberValue] = useState("+998");

  const formatPhoneNumber = (value) => {
    let numbers = value.replace(/\D/g, ""); // Faqat raqamlarni olish
    if (!numbers.startsWith("998")) {
      numbers = "998"; // Avtomatik +998 qo‘shish
    }
    numbers = numbers.slice(0, 12); // Maksimal 12 ta raqam

    let formatted = "+998 ";

    if (numbers.length > 3) formatted += `(${numbers.slice(3, 5)}) `;
    if (numbers.length > 5) formatted += `${numbers.slice(5, 8)}-`;
    if (numbers.length > 8) formatted += `${numbers.slice(8, 10)}-`;
    if (numbers.length > 10) formatted += `${numbers.slice(10, 12)}`;

    return formatted;
  };

  const fill = (e) => {
    setNumberValue(formatPhoneNumber(e.target.value));
  };

  return (
    <div className='font-nunito'>
      {/* hero  */}
      <section className='py-16'>
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 px-4">
          {/* text panel  */}
          <div className="w-full max-w-[680px]">
            <h1 className='font-bold text-3xl lg:text-5xl text-center lg:text-start mb-2'>Qanday qilib bolalarni Ingliz tili Rus tili, Mental arifmetika va boshqa darslarga qiziqtirish mumkun?
            </h1>
            <h3 className='text-2xl font-bold uppercase text-center lg:text-start mb-2'>o’z joyingizni band qiling</h3>
            <ul className="flex flex-wrap  justify-center gap-5 max-w-[600px] mb-2">
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">1-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">2-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">3-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">4-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">5-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">6-yosh</li>
            </ul>
            <button className='py-2 mb-2 text-[12px] lg:text-base w-full rounded-[7px] bg-main text-white uppercase font-bold'>Bo'sh joylar soni cheklangan shoshiling</button>
            <p className='text-lg text-center lg:text-start'>oylik narx 700.000 so’m , bolalar soniga qarab <span className='font-bold text-main'> 8% dan 10% gacha </span>chegirmalar</p>
          </div>
          <img src={youngGirl} alt="" className='w-[754px] block ml-10' />
        </div>
      </section>
      {/* Darslarni tez o'rganish  */}
      <section className='py-16'>
        <div className="container mx-auto flex flex-col ">
          <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xl lg:text-4xl font-extrabold text-main">
                Darslarni tez va mukammal o‘rganish <br /> Eng yaxshi tarbiyachi Hammassi bizda
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 justify-center gap-4">
              <div className="bg-pink-100 rounded-2xl px-10 py-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <img src={img1} alt="icon" className="w-14 h-14" />
                  <h3 className="font-bold text-lg text-black mb-3 leading-tight">
                    Professional dasturlar bilan <br /> bolalarning ta’lim olishiga ko‘maklashish
                  </h3>
                </div>
                <ul className=" text-gray-700 space-y-2 list-disc text-lg list-inside">
                  <li>Ixtisoslashgan darslar 4-yoshdan 6 yoshgacha</li>
                  <li>Bolalar zerikmasligi va tez o‘rganishi uchun, ularning qiziqishlariga qarab yo‘naltirish</li>
                  <li>Har bir o‘rganuvchi uchun maxsus ta’lim asboblari</li>
                </ul>
              </div>

              <div className="bg-yellow-100 rounded-2xl px-10 py-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">
                  <img src={img2} alt="icon" className="w-14 h-14" />
                  <h3 className="font-bold text-lg text-black mb-3 leading-tight">
                    1-yoshdan 4-yoshgacha <br /> shaxsiy rivojlanish
                  </h3>
                </div>
                <ul className=" text-gray-700 space-y-2 list-disc text-lg list-inside">
                  <li>Bolalar xotirasini kuchaytirish uchun maxsus o‘yinchoqlar</li>
                  <li>Kundalik o‘rgangan narsalarini so‘rash, ularga qiziqish bildirish</li>
                  <li>Bolalarga motivatsiya berish uchun sayohatlar</li>
                </ul>
              </div>


              <div className="bg-blue-100 rounded-2xl px-10 py-6 shadow-md">
                <div className="flex items-start space-x-4 mb-4">

                  <img src={img3} alt="icon" className="w-14 h-14" />
                  <h3 className="font-bold text-lg text-black mb-3 leading-tight">
                    Maxsus Mental <br /> Arifmetika darsligi
                  </h3>
                </div>
                <ul className=" text-gray-700 space-y-2 list-disc text-lg list-inside">
                  <li>Maktab ta’limidan oldin ularni varoqda emas miyyalarida</li>
                  <li>Murakkab sonlarni yechishga tayyorlash</li>
                  <li>Bolalar aqliy o‘sishi uchun ular bilan alohida o‘tkaziladigan darslar</li>
                </ul>
              </div>
              <img src={glassesKid} alt="" className='block' />
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className="container  mx-auto flex flex-col ">
          <div className="lg:px-23 lg:py-20  lg:bg-[#FFDFDF] rounded-tl-[150px] grid grid-cols-1 lg:grid-cols-2 items-center rounded-tr-4xl rounded-bl-4xl rounded-br-4xl">
            <img src={blackGlasses} alt="" className='hidden lg:block' />
            <ul className='flex flex-col gap-5'>
              {
                fikrlash.map((fikr, index) => (
                  <li key={index} className='flex flex-row justify-center lg:justify-betweeb gap-7 items-start'>
                    <img src={fikr.img} alt="" className='20' />
                    <div className="flex flex-col">
                      <h2 className='font-semibold text-base lg:text-start '>{fikr.title}</h2>
                      <p className='opacity-70 text-justify'>{fikr.text}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      {/* yosh  */}
      <section className="py-16 min-h-screen">
        <div className="container mx-auto flex flex-col">
          <div className="block">
            <img src={redVector || "/placeholder.svg"} alt="" className="hidden lg:block left-0 h-[685px]" />
            <img
              src={laptopGirl || "/placeholder.svg"}
              alt=""
              className="hidden lg:block  left-0 w-[685px] h-[685px]"
            />
          </div>
          <div className="relative lg:absolute left-0 lg:left-[50%]">
            <h2 className="text-3xl font-bold text-center mb-4">O'z talabingizni yozing</h2>
            <p className="text-center text-gray-700 mb-10">
              Birinchi bo'lib farzandingizning yoshi va guruhini tanlang
              <br />
              Bu savol talab qilinadi
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition">
                <div className="p-10 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img src={age1 || "/placeholder.svg"} alt="Yosh 1-2" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-gray-600">1-2</p>
              </div>
              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition">
                <div className="p-10 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img src={age2 || "/placeholder.svg"} alt="Yosh 3-4" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-gray-600">3-4</p>
              </div>

              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-6 flex flex-col items-center hover:shadow-xl transition">
                <div className="p-10 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img src={age3 || "/placeholder.svg"} alt="Yosh 5-6" className="w-20 h-20 object-contain" />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-gray-600">5-6</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <h2 className="text-3xl text-center font-bold text-black mb-2">Our Testimonial</h2>
        <p className="text-xl text-center font-semibold text-black mb-12">
          at Smart Academy
        </p>

        <div className="container mx-auto px-4">
          <Swiper
            modules={[Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex mb-10 flex-col items-center text-center p-4 bg-gray-50 rounded-lg shadow-md">
                  <div
                    className={`w-20 h-20 rounded-full shadow mb-4 flex items-center justify-center overflow-hidden ${item.imgBg}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-blue-600 font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 max-w-xs mt-2">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* contact  */}
      <section className='py-0 lg:py-16'>
        <h2 className="text-3xl font-bold text-center  mb-4">
          Aloqa qiling
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Sifatli sayyohlik agentliklari pul qiymatini ta'minlaydi, degan konsensus mavjud edi. Biroq, bu ko‘plab iste'molchilarning yuqori <br /> darajadagi tashvishi bilan birga keldi
        </p>

        <div className="container  mx-auto  flex-col  grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-50">

          <div className="">
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="text"
                placeholder="Message"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <input
                type="tel"
                inputMode="numeric"
                pattern="[0-9\s]+"
                maxLength="19"
                name="data[Telefon]"
                value={numberValue}
                onChange={fill}
                required
                placeholder="+998 (__) ___-__-__"
                className="w-full border border-gray-300 rounded-md py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />                              <button
                type="submit"
                className="bg-[#80D8FE] hover:bg-[#80D8FE]/40 transition text-white py-3 px-8 rounded-md w-full"
              >
                Yuborish
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img src={calendar} alt="" />
          </div>
        </div>
      </section>
      <section className=''>
        <div className="w-full h-[258px] overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d810.612364839323!2d70.0686055664879!3d41.03343889024473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afebec4065cd21%3A0x9aff85a5ffd5e8b0!2sWunderkind!5e0!3m2!1sen!2s!4v1747383969715!5m2!1sen!2s" className="w-full h-full border-0"
            allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>      </div>
      </section>

    </div>
  )
}

export default Home
