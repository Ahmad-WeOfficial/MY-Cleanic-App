

import React, { useState, useEffect } from "react";

const Body = () => {
  const images = [
    "https://static.wixstatic.com/media/c837a6_7dfebfa0673449d691f77fc9d369962d~mv2.jpg/v1/crop/x_788,y_789,w_701,h_669/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_Sofa_in_the_corner_of_the_room_fabric_beige_sofa_42bb10dc-9912-4cea-98d2-c3.jpg",
    "https://static.wixstatic.com/media/c837a6_35b2191e3ad84e1c96308b04f9716011~mv2.jpg/v1/crop/x_227,y_264,w_1593,h_1520/fill/w_420,h_420,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_magazine-worthy_cinematic_close-up_from_above__0c5d8bf8-d4c5-4931-8d80-b0.jpg",
    "https://static.wixstatic.com/media/c837a6_e500340d84704dc8b4e668423995dd8e~mv2.jpg/v1/crop/x_93,y_135,w_839,h_800/fill/w_210,h_210,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/templatesdrive_A_photograph_of_a_office_building_very_clean_win_cf603486-9623-46e5-8ef1-e6.jpg",
  ];

  const descriptions = ["Couch Cleaning", "Carpet Cleaning", "Window Cleaning"];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-white py-16 px-4 text-center md:mt-520 md:px-40">
      <h2 className="text-3xl text-black mb-6 md:text-5xl">Before&After</h2>
      <p className="text-lg font-semibold mb-3 md:text-2xl">
        {descriptions[currentIndex]}
      </p>

      <div className="flex flex-col md:flex-row md:justify-center md:items-center md:gap-x-5 md:mt-6">
        <div className="text-center">
          <img
            src={images[currentIndex]}
            alt="Before"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto md:h-127 md:w-125"
          />
          <p className="mt-2 text-lg font-medium text-gray-700">Before</p>
        </div>

        <div className="flex flex-row items-center gap-77 md:absolute md:left-0 md:right-0 md:mx-auto md:justify-center md:gap-250">
          <button
            onClick={goToPrev}
            className="text-3xl font-bold text-gray-600 hover:text-gray-900 transition"
          >
            &lt;
          </button>
          <button
            onClick={goToNext}
            className="text-3xl font-bold text-gray-600 hover:text-gray-900 transition"
          >
            &gt;
          </button>
        </div>

        <div className="text-center">
          <img
            src={images[currentIndex]}
            alt="After"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mx-auto md:h-127 md:w-125"
          />
          <p className="mt-2 text-lg font-medium text-gray-700">After</p>
        </div>
      </div>





{/* <div className='flex justify-center min-h-screen text-white bg-no-repeat bg-cover bg-[url("https://static.wixstatic.com/media/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg/v1/fill/w_320,h_892,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg")]'>
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center justify-center py-12 mt-[4rem] gap-4">
            <p className="text-[1.4rem]">How It Works</p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
              className="w-[4rem]"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
              className="w-[3rem]"
            />
            <p className="text-center text-[1.1rem]">
              Choose your desired <br /> cleaning service
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
              className="w-[4rem]"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
              className="w-[3rem]"
            />
            <p className="text-center text-[1.1rem]">
              Use the Cleanic App <br /> for laundry pickup
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
              className="w-[4rem]"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
              className="w-[3rem]"
            />
            <p className="text-center text-[1.1rem]">
              Leave us the keys and we'll
              <br /> take care of the rest
            </p>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
              className="w-[4rem]"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
              className="w-[3rem]"
            />
            <p className="text-center text-[1.1rem]">
              Welcome back to your <br /> home clean home!
            </p>
          </div>

          </div>
          </div>
 */}

<div className='flex justify-center min-h-screen mt-15 text-white bg-no-repeat bg-cover bg-[url("https://static.wixstatic.com/media/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg/v1/fill/w_320,h_892,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_fd16501d8d69465c8b186e3b560f72dc~mv2.jpg")] px-4   md:flex md:justify-center  md:w-310 md:mt-17 md:h-30 md:-ml-40 '>

  <div className="flex flex-col items-center md:flex-row md:items-center  ">
    <div className="flex flex-col items-center justify-center mt-[4rem] gap-4 md:flex-row">
      <p className="text-[1.4rem] md:text-4xl">How It Works</p>
      <img
        src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
        className="w-[4rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
        className="w-[3rem]"
      />
      <p className="text-center text-[1.1rem]">
        Choose your desired <br /> cleaning service
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
        className="w-[4rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
        className="w-[3rem]"
      />
      <p className="text-center text-[1.1rem]">
        Use the Cleanic App <br /> for laundry pickup
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
        className="w-[4rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
        className="w-[3rem]"
      />
      <p className="text-center text-[1.1rem]">
        Leave us the keys and we'll
        <br /> take care of the rest
      </p>
      <img
        src="https://cdn-icons-png.flaticon.com/128/14026/14026234.png"
        className="w-[4rem]"
      />
      <img
        src="https://cdn-icons-png.flaticon.com/128/10571/10571068.png"
        className="w-[3rem]"
      />
      <p className="text-center text-[1.1rem]">
        Welcome back to your <br /> home clean home!
      </p>
    </div>
  </div>
</div>


<div className="h-290 bg-[rgb(65,74,76)] py-[8rem] md:w-310 md:h-210 md:-ml-40 ">
        <div className="flex flex-col justify-center items-center gap-5 md:mr-190 md:mt-45">
          <h1 className="text-center text-white text-[1.8rem] font-light leading-tight -mt-15 md:text-4xl md:font-bold ">
            Our Plans & <br /> Special Discounts
          </h1>
          <p className="text-center text-white text-[0.900rem] md:text-lg font-light " >
            I'm a paragraph. Click here to add <br /> your own text and edit me.
            It's easy.
            <br /> I'm a paragraph. Click here to add <br /> your own text and
            edit me. It's easy.
          </p>
          <button className="bg-white  text-black py-2 w-[13rem] rounded-full md:py-4 md:hover:hover:bg-[rgb(75,73,75)]">
            Choose Your Plan
          </button>
          </div>
          </div>
          <div className="px-6 -mt-[46rem] md:h- md:w-120 md:ml-115">
  <div className="bg-[rgb(247,233,142)] h-[18rem] rounded-t-3xl flex flex-col items-center justify-center">
    <h1 className="text-[1.3rem] text-center">The Bi-Monthly Plan</h1>
    <p className="text-[4rem]">$280</p>
    <p>Every month</p>
    <br />
    <button className="bg-black hover:bg-yellow-200 text-white w-[12rem] py-3 rounded-full ">
      Select
    </button>
  </div>

  
  <div className="bg-white h-[20rem] py-6 mt-0 flex flex-col items-center justify-center gap-6">

    {[...Array(5)].map((_, index) => (
      <p key={index} className="text-[1.5rem] text-center">→I’m a benefit</p>
    ))}
  </div>

  
</div>


    </div>
  );
};

export default Body;






