const Foter = () => {
  return (
    <>
      <div className="md:bg-yellow-50 md:">
        <div>
          <img
            className="w-350 md:w-100 md:h-160 md:pt-30 md:mb-30 md:ml-23 "
            src="https://static.wixstatic.com/media/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg/v1/fill/w_480,h_429,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f9b8a34209ad45ccaa1f966670cd5bf9~mv2.jpg"
            alt="Image inside div"
          />

          <div className="max-w-xl mx-auto p-6 border  bg-yellow-50 md:-mt-175 md:w-[48rem] md:mr-30 md:h-170 ">
            <h2 className="text-3xl mt-8 mr-35 mb-6 text-center">
              Why Choose
              <br /> The Cleanic
            </h2>

            <div className="mb-4">
              <h3 className="text-2xl ">★Qualified Team</h3>
              <p className="text-gray-600 text-lg mt-2 ">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl">★Eco-Friendly Materials</h3>
              <p className="text-gray-600 text-lg mt-2">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="text-2xl">★Same Day Availability</h3>
              <p className="text-gray-600 text-lg mt-2">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl">★Outstanding Support</h3>
              <p className="text-gray-600 text-lg mt-2">
                I'm a paragraph. Click here to add your own text and edit me.
                It's easy.
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <button className="px-12 mr-19 py-4 bg-black text-white rounded-full  transition md:-mt-2">
                Get To Know Us
              </button>
            </div>
          </div>

          <div class="w-[375px] h-[250px] overflow-hidden md:mt-0 md:h-200 md:w-315">
            <img
              src="https://static.wixstatic.com/media/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg/v1/fill/w_480,h_344,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_c333bdc72fb24b2aac15fd8e1a3207cc~mv2.jpg"
              alt="Image"
              class="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-yellow-100 p-6 md:h-80">
        <div className="max-w-6xl mx-auto md:grid md:grid-cols-3 md:gap-8">
          <div>
            <h1 className="text-lg mb-4 md:ml-8">★ The Cleanic</h1>
            <button className="px-13 py-4 bg-black text-white rounded-full transition mb-8 md:mt-22 md:ml-15">
              Book Now
            </button>

            <div className="mb-8 md:-mt-52 md:absolute left-160 ">
              <h2 className="text-lg md:p-2">Operating Hours</h2>
              <p>Mon - Fri: 8am - 8pm</p>
              <p>Saturday: 9am - 7pm</p>
              <p>Sunday: 9am - 8pm</p>
            </div>
          </div>

          <div>
            <h3 className=" md:ml-40 md:mt-49">Follow us for cleaning tips</h3>
            <div className="flex justify-start gap-8 mt-6 flex-wrap md:mt-6 md:ml-40">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="Instagram Logo"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                  alt="Facebook Logo"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                  alt="YouTube Logo"
                  className="w-6 h-6"
                />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://i2.wp.com/www.mockofun.com/wp-content/uploads/2020/04/tiktok-logo-png-6041.jpg"
                  alt="TikTok Logo"
                  className="w-6 h-6"
                />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg mb-2 mt-10 md:mt-2 md:p-2">Contact</h3>
            <p> The Cleanic</p>
            <p>500 Terry Francine Street</p>
            <p>San Francisco, CA 94158</p>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>

          <div className="mt-8 md:absolute left-110 md:mt-3">
            <h3 className="text-xl mb-2 md:p-2">Legal</h3>
            <div className="flex flex-col gap-2">
              <a href="/privacy-policy" className="">
                Privacy Policy
              </a>
              <a href="/terms-conditions" className="">
                Terms & Conditions
              </a>
              <a href="/refund-policy" className="">
                Refund Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foter;
