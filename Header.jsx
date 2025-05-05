import { FaBars } from "react-icons/fa";
import { useState } from "react";

export default function MenuOverlay() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-yellow-50 h-25 w-full md:w-[80%]  mt-2 mx-auto flex justify-between items-center px-6 py-4 md:bg-red-300 shadow-md  ">
        <p className="text-2xl text-black md:text- ">★ The cleanic</p>

        <div className="hidden md:flex items-center justify-start gap-18">
          <button className="text-black text-base ">Plans</button>
          <button className="text-black text-base">Services</button>
          <button className="text-black text-base">About</button>
          <div className="flex items-center">
            <button className="text-black text-base ">Login</button>
            <button className="text-base border border-black bg-black text-white rounded-full px-5 py-2 hover:bg-yellow-50 hover:text-black md:ml-40 md:hover:bg-white ">
              Book Now
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsMenuOpen(true)}
          className="text-2xl bg-white font-bold md:hidden"
        >
          <FaBars size={30} />
        </button>
      </div>

      <div className="relative md:mt-0">
        <img
          src="https://static.wixstatic.com/media/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg/v1/fill/w_1617,h_1554,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_8bdf6d31716e47f28f553df74033ed63~mv2.jpg"
          className="w-full h-[600px] object-cover md:mt-1 md:h-[780px] "
          alt="Wix"
        />

        <div className="absolute top-23 left-[10%] text-white md:left-[50%] md:top-[25%] transform md:-translate-x-125">
          <h2 className="text-4xl md:text-5xl font-semibold ">
            Remarkably Cleaner. <br /> Amazingly Simpler.
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed md:text-[18px]">
            Providing spotless cleaning
            <br />
            services for busy<span className="md:ml-4"> </span>people since
            2035.
            <br />
            Always on time, always smiling.
          </p>

          <button className="mt-6 ml-15 bg-white text-black text-[17px] px-12 py-4 rounded-full hover:bg-yellow-50 md:hover:bg-gray-500">
            Book Now
          </button>
        </div>
      </div>

      <div className=" md:ml-10 block  md:transform md:-translate-x-6 -translate-y-1/2 h-2 md:h-1.5 md:max-w-4xl md:absolute left-90 top-153">
        <div className="mt-6 mx-6  mb-10">
          <div className="bg-yellow-100 bg-opacity-95 rounded-lg p-8 shadow-lg w-full max-w-3xl mx-auto">
            <h2 className="text-4xl mb-2 ml-10">Get a Free Estimate</h2>
            <p className="mb-9 text-2xl ml-14 mt-8 text-gray-700">Contact us</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-base">
              <div>
                <label className="block mb-2 text-lg">First Name*</label>
                <input
                  type="text"
                  className="border px-4 py-3  rounded w-full  text-lg "
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Last Name*</label>
                <input
                  type="text"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Email*</label>
                <input
                  type="email"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Address*</label>
                <input
                  type="text"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">City*</label>
                <input
                  type="text"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg">Phone Number*</label>
                <input
                  type="tel"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>

              <div>
                <label className="block mb-2 text-lg">Number of Rooms*</label>
                <input
                  type="number"
                  className="border px-4 py-3 rounded w-full text-lg"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-2 text-lg">Choose Service*</label>
                <select className="bg-yellow-100 border px-4 py-3 rounded w-full text-lg">
                  <option>Deep Cleaning</option>
                  <option>Laundry</option>
                  <option>Move-In/Out</option>
                </select>
              </div>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3  text-lg rounded-full hover:bg-gray-800 ">
              Get a Quote
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-yellow-50 bg-opacity-95 z-50 flex flex-col md:hidden">
          <div className="flex justify-between items-center p-4">
            <button className="text-black ml-9 text-2xl">Login</button>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-black text-5xl font-bold"
            >
              ×
            </button>
          </div>
          <div className="flex flex-col items-center justify-start flex-1 space-y-9">
            <button className="text-black text-2xl">Plans</button>
            <button className="text-black text-2xl">Services</button>
            <button className="text-black text-2xl">About</button>
            <button className="text-2xl border border-black bg-black text-white rounded-4xl px-8 py-3 ">
              Book Now
            </button>
          </div>
        </div>
      )}
    </>
  );
}
