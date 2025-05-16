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
        <div className="container flex justify-center lg:justify-between items-center">
          {/* text panel  */}
          <div className="w-full max-w-[680px]">
            <h1 className='font-bold text-6xl text-center lg:text-start mb-2'>Qanday qilib bolalarni Ingliz tili Rus tili, Mental arifmetika va boshqa darslarga qiziqtirish mumkun?
            </h1>
            <h3 className='text-2xl font-bold uppercase text-center lg:text-start mb-2'>o’z joyingizni band qiling</h3>
            <ul className="flex flex-wrap  justify-center lg:justify-startgap-6 max-w-[600px] mb-2">
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">1-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">2-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">3-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">4-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">5-yosh</li>
              <li className="cursor-pointer font-semibold text-xl py-3 px-5 bg-white rounded-xl shadow-md hover:shadow-2xl ease-in-out duration-300">6-yosh</li>
            </ul>
            <button className='py-5 mb-2 w-full rounded-2xl bg-orange-600 text-white uppercase font-bold'>Bo'sh joylar soni cheklangan shoshiling</button>
            <p className='text-lg text-center lg:text-start'>oylik narx 700.000 so’m , bolalar soniga qarab <span className='font-bold text-main'> 8% dan 10% gacha </span>chegirmalar</p>
          </div>
          <img src={youngGirl} alt="" className='w-[754px] hidden lg:block ml-8' />
        </div>
      </section>
      {/* Darslarni tez o'rganish  */}
      <section className='py-16'>
        <div className="container">
          <div class="bg-white py-12 px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-12">
              <h2 class="text-4xl font-extrabold text-green-500">
                Darslarni tez va mukammal o‘rganish <br /> Eng yaxshi tarbiyachi Hammassi bizda
              </h2>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-4 justify-center gap-6">
              <div class="bg-pink-100 rounded-2xl p-6 shadow-md">
                <div class="flex items-start space-x-4 mb-4">
                  <img src={img1} alt="icon" class="w-14 h-14" />
                  <h3 class="font-bold text-base text-black mb-3 leading-tight">
                    Professional dasturlar bilan <br /> bolalarning ta’lim olishiga ko‘maklashish
                  </h3>
                </div>
                <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Ixtisoslashgan darslar 4-yoshdan 6 yoshgacha</li>
                  <li>Bolalar zerikmasligi va tez o‘rganishi uchun, ularning qiziqishlariga qarab yo‘naltirish</li>
                  <li>Har bir o‘rganuvchi uchun maxsus ta’lim asboblari</li>
                </ul>
              </div>

              <div class="bg-yellow-100 rounded-2xl p-6 shadow-md">
                <div class="flex items-start space-x-4 mb-4">
                  <img src={img2} alt="icon" class="w-14 h-14" />
                  <h3 class="font-bold text-lg text-black mb-3 leading-tight">
                    1-yoshdan 4-yoshgacha <br /> shaxsiy rivojlanish
                  </h3>
                </div>
                <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Bolalar xotirasini kuchaytirish uchun maxsus o‘yinchoqlar</li>
                  <li>Kundalik o‘rgangan narsalarini so‘rash, ularga qiziqish bildirish</li>
                  <li>Bolalarga motivatsiya berish uchun sayohatlar</li>
                </ul>
              </div>


              <div class="bg-blue-100 rounded-2xl p-6 shadow-md">
                <div class="flex items-start space-x-4 mb-4">

                  <img src={img3} alt="icon" class="w-14 h-14" />
                  <h3 class="font-bold text-lg text-black mb-3 leading-tight">
                    Maxsus Mental <br /> Arifmetika darsligi
                  </h3>
                </div>
                <ul class="text-sm text-gray-700 space-y-2 list-disc list-inside">
                  <li>Maktab ta’limidan oldin ularni varoqda emas miyyalarida</li>
                  <li>Murakkab sonlarni yechishga tayyorlash</li>
                  <li>Bolalar aqliy o‘sishi uchun ular bilan alohida o‘tkaziladigan darslar</li>
                </ul>
              </div>
              <img src={glassesKid} alt="" className='hidden lg:block'/>
            </div>
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className="container">
          <div className="px-23 py-20 bg-[#FFDFDF] rounded-tl-[150px] grid grid-cols-1 lg:grid-cols-2 items-center rounded-tr-4xl rounded-bl-4xl rounded-br-4xl">
            <img src={blackGlasses} alt="" className='hidden lg:block' />
            <ul className='flex flex-col gap-5'>
              {
                fikrlash.map((fikr, index) => (
                  <li className='flex flex-col lg:flex-row justify-center lg:justify-betweeb gap-4 items-center'>
                    <img src={fikr.img} alt="" className='20' />
                    <div className="flex flex-col">
                      <h2 className='font-semibold text-xl'>{fikr.title}</h2>
                      <p className='opacity-70'>{fikr.text}</p>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>
      {/* yosh  */}
      <section className='py-16 relative min-h-screen'>
        <div className="container">
          <div className="hidden lg:block">
          <img src={redVector} alt="" className='absolute left-0 h-[685px]' />
          <img src={laptopGirl} alt="" className='absolute left-0 w-[685px] h-[685px]' />
          </div>
          <div className="absolute left-0 lg:left-[50%]">
            <h2 className="text-3xl font-bold text-center mb-4">
              O‘z talabingizni yozing
            </h2>
            <p className="text-center text-gray-700 mb-10">
              Birinchi bo‘lib farzandingizning yoshi va guruhini tanlang<br />
              Bu savol talab qilinadi
            </p>

            <div className="flex flex-row justify-center items-center gap-6">
              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-15 flex flex-col items-center hover:shadow-xl transition">
                <div className="py-6 px-3 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img
                    src={age1}
                    alt="Yosh 1-2"
                    className="size-20 object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-sm text-gray-600">1-2</p>
              </div>

              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-15 flex flex-col items-center hover:shadow-xl transition">
                <div className="py-6 px-3 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img
                    src={age2}
                    alt="Yosh 3-4"
                    className="size-20 object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-sm text-gray-600">3-4</p>
              </div>

              <div className="bg-white shadow-lg cursor-pointer rounded-xl p-15 flex flex-col items-center hover:shadow-xl transition">
                <div className="py-6 px-3 rounded-full border-2 border-gray-200 flex items-center justify-center mb-4">
                  <img
                    src={age3}
                    alt="Yosh 5-6"
                    className="size-20 object-contain"
                  />
                </div>
                <p className="text-2xl font-semibold">Yosh</p>
                <p className="text-sm text-gray-600">5-6</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20  relative">
        <div className="max-w-screen lg:max-w-[1200px] bg-[#FFF1D7] p-20 mx-auto rounded-t-[150px] text-center">
          <div className="mb-4 font-semibold flex justify-center text-orange-400 items-center gap-2">
            <img src={trophy} alt="Trophy" className="w-6 h-6" />
            <span>Creta Class Has Industry-Leading Renewals Of Above 80%</span>
          </div>

          <h2 className="text-3xl font-bold mb-10">
            Don’t Just Take Our Word For It
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            {/* Testimonial 1 */}
            <div className="bg-pink-100 p-10 w-[527px] h-[324px] rounded-xl flex gap-10 shadow-md relative border border-dashed border-black">
              <p className="text-xl  text-justify font-semibold flex items-end">
                Like well-made animations, Creta Class is well designed to cater
                to kids’ feature. My son is 4 years old, and he is immersed in its
                interesting and simple exercises.
              </p>
              <div className="flex flex-col items-start gap-2">
                <img
                  src={lisa}
                  alt="Lisa"
                  className="w-30 h-40  border-2 border-pink-400 object-cover"
                />
                <span className="font-bold w-30 text-end">- Lisa</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-pink-100 p-10 w-[527px] h-[324px] rounded-xl flex gap-10 shadow-md relative border border-dashed border-black">
              <p className="text-xl text-justify font-semibold flex items-end">
                Like well-made animations, Creta Class is well designed to cater
                to kids’ feature. My son is 4 years old, and he is immersed in its
                interesting and simple exercises.
              </p>
              <div className="flex flex-col items-start gap-2">
                <img
                  src={jimmy}
                  alt="Jimmy"
                  className="w-30 h-40  border-2 border-pink-400 object-cover"
                />
                <span className="font-bold  w-30 text-end">- Jimmy</span>
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
        <div className="container">
          <ul className='flex flex-col gap-10 text-center mx-auto'>
            <ul className='flex flex-row gap-7 justify-end'>
              {testimonials.slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full object-cover shadow mb-4 ${item.imgBg}`}
                  >
                    <img
                      src=""
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-blue-600 font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 max-w-xs">{item.description}</p>
                </div>
              ))}
            </ul>
            <ul className='flex flex-row gap-7 justify-start'>
              {testimonials.slice(0, 3).map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div
                    className={`w-20 h-20 rounded-full object-cover shadow mb-4 ${item.imgBg}`}
                  >
                    <img
                      src=""
                      alt={item.name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-blue-600 font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-600 max-w-xs">{item.description}</p>
                </div>
              ))}
            </ul>

          </ul>
        </div>
      </section>

      {/* contact  */}
      <section className='py-20'>
        <h2 className="text-3xl font-bold text-center  mb-4">
          Aloqa qiling
        </h2>
        <p className="text-gray-700 text-center mb-10">
          Sifatli sayyohlik agentliklari pul qiymatini ta'minlaydi, degan konsensus mavjud edi. Biroq, bu ko‘plab iste'molchilarning yuqori <br /> darajadagi tashvishi bilan birga keldi
        </p>

        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center justify-between gap-50">

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
                className="bg-orange-500 hover:bg-orange-600 transition text-white py-3 px-8 rounded-md w-full"
              >
                Yuborish
              </button>
            </form>
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src={calendar}
              alt="Calendar illustration"
              className="max-w-2xl w-full object-contain hidden lg:block"
            />
          </div>
        </div>
      </section>
      <section className='py-16'>
        <div className="w-full h-[258px] overflow-hidden">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d810.612364839323!2d70.0686055664879!3d41.03343889024473!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38afebec4065cd21%3A0x9aff85a5ffd5e8b0!2sWunderkind!5e0!3m2!1sen!2s!4v1747383969715!5m2!1sen!2s"     className="w-full h-full border-0"
 allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>      </div>
      </section>

    </div>
  )
}

export default Home
