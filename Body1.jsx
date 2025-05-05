import React from "react";

const Test = () => {
  return (
    <div className="p-0 bg-white mt-320 md:absolute top-24 ">
      <div className="w-full px-4 md:px-20">
        <h2 className=" text-2xl text-center   text-gray-800 md:text-4xl md:mr-190 ">
          Shiny Happy Clients
        </h2>

        <div
          className="
            mt-6 
            grid 
            grid-rows-2 
            grid-cols-1 
            gap-7 
            md:grid-rows-1 
            md:grid-cols-4 
            md:gap-4 
          "
        >
          <div className="bg-yellow-100 rounded-lg shadow-lg h-70 p-6">
            <p className="mt-2">★ ★ ★ ★ </p>
            <p className="italic mt-2 text-[22px]">
              “I’m addicted to the Cleanic!”
            </p>
            <p className="mb-4 mt-1">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p>Jane Deirs, AR</p>
          </div>

          <div className="bg-yellow-100 rounded-lg shadow-lg h-70 p-6">
            <p className="mt-2">★ ★ ★ ★ </p>
            <p className="italic mt-3 text-[22px]">
              “My flat looks like a boutique hotel”
            </p>
            <p className="mb-4 mt-1">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p>Eric Laguardia, CA</p>
          </div>

          <div className="bg-yellow-100 rounded-lg shadow-lg h-70 p-6">
            <p className="mt-2">★ ★ ★ ★ </p>
            <p className="italic mt-3 text-[22px]">“Soft perfection”</p>
            <p className="mb-4 mt-3">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p>Lena Rogel, RI</p>
          </div>

          <div className="bg-yellow-100 rounded-lg shadow-lg h-70 p-6">
            <p className="mt-2">★ ★ ★ ★ </p>
            <p className="italic mt-3 text-[22px]">“I’m obsessed”</p>
            <p className="mb-4 mt-3">
              I'm a testimonial. Click to edit me and add text that says
              something nice about you and your services.
            </p>
            <p>Jean McDermott, CT</p>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(65,74,76)] py-16 px-4 h-432 md:h-205 md:mt-30">
        <h2 className="text-center text-3xl font-semibold mb-12 mt-10 text-white md:text-5xl">
          For Anything You Need
          <p className="text-center text-2xl mt-4 font-semibold mb-12">
            Our Stellar Services
          </p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:px-10">
          <div className="shadow-lg overflow-hidden rounded-lg">
            <img
              src="https://asset.trvstatic.com/images/assets/moving-from-apartment-to-home.jpg/Zz1jMjBlNWI3NjFiMDMxMWVkYTUyNzhlZTJiMDdmODZlMQ=="
              alt="Service 1"
              className="w-full h-110 object-cover rounded-lg md:hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://www.360precisioncleaning.com/wp-content/uploads/2018/05/deep-clean-1536x1024.jpeg"
              alt="Service 2"
              className="w-full h-110 object-cover rounded-lg md:hover:scale-105"
            />
          </div>

          <div className="rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://boltlaundry.com/wp-content/uploads/2021/01/Commercial-Laundry-Service-In-Los-Angeles-CA.jpg"
              alt="Service 3"
              className="w-full h-110 object-cover rounded-lg md:hover:scale-105"
            />
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-white text-gray-600 px-7.5 py-3.5 rounded-3xl hover:bg-gray-700 transition md:hover:bg-[rgba(88,74,74,0.97)] md:text-gray-500">
            See All Services
          </button>
        </div>
      </div>

      <div class="bg-yellow-100 h-80 py-23 px-4 text-center mx-auto max-w-full md:w-[85%] md:h-43 md:mt-20">
        <h2 class="text-3xl text-black mb-6 md:-mt-14 md:text-5xl">
          Feature In
        </h2>

        <div class="flex flex-wrap justify-center items-center gap-4 md:gap-25">
          <p class="text-black text-2xl font-bold md:text-3xl">Latch.</p>
          <p class="text-black text-xl font-MV Boli font-bold md:text-3xl">
            Stellamaris
          </p>
          <p class="text-black text-xl font-bold md:text-3xl">Gasparyan</p>
          <p class="text-black text-xl font-bold md:text-3xl">Volve</p>
          <p class="text-black text-xl font-bold md:text-3xl">Loreva</p>
        </div>
      </div>
    </div>
  );
};

export default Test;
