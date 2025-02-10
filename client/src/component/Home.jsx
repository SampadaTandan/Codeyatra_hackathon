import React from 'react'
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo3.png"
import people from "../assets/images/people.png"
import Background from "../assets/images/background.png"
import bg3 from "../assets/images/bg3.png"
import pic from "../assets/images/2.png"

const Home = () => {
  return (
    
    <div>
        <div
      className="px-6 sm:py-20 py-10"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-screen-xl mx-auto text-center text-balance">
        <h1 className="text-[#0062B6] text-5xl max-sm:text-3xl font-extrabold leading-tight mb-6">
        Connecting Innovators with Investors 
        </h1>
        <p className="text-gray-900 text-lg mb-12">
        Discover a platform where entrepreneurs and investors meet, collaborate, and transform ideas into reality. Use cutting-edge AI to extract key insights and make informed investment decisions based on ROI and environmental impact.
        </p>
        
        <Link to="/select">
  <button
    type="button"
    className="bg-[#0062B6] text-white text-lg tracking-wide px-8 py-2.5 rounded-full hover:bg-[#004C8C] transition-all duration-300"
  >
    Connect Now
  </button>
</Link>
      </div>
    </div>


    <div class=" max-w-6xl max-md:max-w-md mx-auto">
      <div class="grid md:grid-cols-2 items-center md:gap-10 gap-6">
        <div class="max-md:order-1 max-md:text-center">
          {/* <p class="mt-4 text-sm font-bold text-blue-600"><span class="rotate-90 inline-block mr-2 mb-2">|</span> ALL IN ONE MEETING SCHEDULER</p> */}
          <h2 class="text-gray-800 md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]">Why Choose Our Platform?</h2>
          <p class="mt-5 text-base text-gray-500 leading-relaxed">Entrepreneurs, get your business in front of investors who care about ROI and sustainability. Investors, discover new opportunities with the help of our AI-powered platform. We simplify decision-making by providing key insights and data that matter, empowering you to make smarter, faster investment choices.</p>

          {/* <div class="mt-10 flex px-4 py-4 rounded-lg bg-gray-100 overflow-hidden">
            <input type='email' placeholder='Search Something...' class="w-full outline-none bg-transparent text-sm" />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="20px" class="cursor-pointer fill-gray-400">
              <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
            </svg>
          </div> */}
        </div>

        <div class="md:h-[400px] p-2">
          <img src={pic} class="w-full h-full object-contain rounded-lg ml-40" alt="Dining Experience" />
        </div>
      </div>

      {/* <div class="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
        <img src="https://readymadeui.com/google-logo.svg" class="w-28 mx-auto" alt="google-logo" />
        <img src="https://readymadeui.com/facebook-logo.svg" class="w-28 mx-auto" alt="facebook-logo" />
        <img src="https://readymadeui.com/linkedin-logo.svg" class="w-28 mx-auto" alt="linkedin-logo" />
        <img src="https://readymadeui.com/pinterest-logo.svg" class="w-28 mx-auto" alt="pinterest-logo" />
      </div> */}
    </div>

    <div className="bg-gray-100 py-16">
  <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-96 p-4">
    
    <div className="w-full max-lg:max-w-lg flex justify-center lg:justify-start">
      <img src={people} alt="people" className="w-[300px] lg:ml-10" />
    </div>

    <div className="w-full text-center lg:text-left">
      <h2 className="text-gray-800 text-5xl font-extrabold mb-6">Stay Updated</h2>
      <p className="text-lg text-gray-600">
        Subscribe to our newsletter for the latest updates on new businesses, 
        investment trends, and AI-driven insights. Stay informed on innovation, 
        sustainability, and investment opportunities.
      </p>
      <Link to="/select">
        <button
          type="button"
          className="mt-12 bg-transparent text-gray text-base py-3 px-6 border border-black rounded-lg hover:bg-white hover:text-black transition duration-300">
          Subscribe Now
        </button>
      </Link>
    </div>

  </div>
</div>



    <div class="relative  before:absolute before:w-full ">
      <img src={bg3} alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[350px] relative z-50 h-full max-w-6xl mx-auto  flex flex-col justify-center items-center text-center text-gray-800  p-6">
        <h2 class="sm:text-5xl text-2xl font-bold mb-6">About Us</h2>
        <p class="sm:text-lg text-base text-center text-gray">We’re creating a platform that connects visionary entrepreneurs with forward-thinking investors. Using AI, we analyze business descriptions, calculate ROI, and assess environmental impact via the Air Quality Index, helping investors make informed decisions that drive innovation and sustainability.</p>

        
      </div>
    </div>


    <footer class=" tracking-wide bg-gray-50 px-10 pt-12 pb-6">
      <div class="flex flex-wrap justify-between gap-10">
        <div class="max-w-md">
          <a href='javascript:void(0)'>
            <img src={logo} alt="logo" class='w-36' />
          </a>
          <div class="mt-6">
            <p class="text-gray-600 leading-relaxed text-sm">Whether you're an entrepreneur seeking investment or an investor looking for new opportunities, our platform is here to help you grow and thrive. Join today to start making impactful connections.</p>
          </div>
          <ul class="mt-10 flex space-x-5">
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" class="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" data-original="#000000" />
                </svg>
              </a>
            </li>
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 112.196 112.196">
                  <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" data-original="#007ab9" />
                  <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149zm-54.96-36.642c-4.587 0-7.588 3.011-7.588 6.967 0 3.872 2.914 6.97 7.412 6.97h.087c4.677 0 7.585-3.098 7.585-6.97-.089-3.956-2.908-6.967-7.496-6.967zm-6.791 59.77H41.27v-40.33H27.865v40.33z" data-original="#f1f2f2" />
                </svg>
              </a>
            </li>
            {/* <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 152 152">
                  <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stop-color="#fae100" />
                    <stop offset=".15" stop-color="#fcb720" />
                    <stop offset=".3" stop-color="#ff7950" />
                    <stop offset=".5" stop-color="#ff1c74" />
                    <stop offset="1" stop-color="#6c1cd1" />
                  </linearGradient>
                  <g data-name="Layer 2">
                    <g data-name="03.Instagram">
                      <rect width="152" height="152" fill="url(#a)" data-original="url(#a)" rx="76" />
                      <g fill="#fff">
                        <path fill="#ffffff10" d="M133.2 26c-11.08 20.34-26.75 41.32-46.33 60.9S46.31 122.12 26 133.2q-1.91-1.66-3.71-3.46A76 76 0 1 1 129.74 22.26q1.8 1.8 3.46 3.74z" data-original="#ffffff10" />
                        <path d="M94 36H58a22 22 0 0 0-22 22v36a22 22 0 0 0 22 22h36a22 22 0 0 0 22-22V58a22 22 0 0 0-22-22zm15 54.84A18.16 18.16 0 0 1 90.84 109H61.16A18.16 18.16 0 0 1 43 90.84V61.16A18.16 18.16 0 0 1 61.16 43h29.68A18.16 18.16 0 0 1 109 61.16z" data-original="#ffffff" />
                        <path d="m90.59 61.56-.19-.19-.16-.16A20.16 20.16 0 0 0 76 55.33 20.52 20.52 0 0 0 55.62 76a20.75 20.75 0 0 0 6 14.61 20.19 20.19 0 0 0 14.42 6 20.73 20.73 0 0 0 14.55-35.05zM76 89.56A13.56 13.56 0 1 1 89.37 76 13.46 13.46 0 0 1 76 89.56zm26.43-35.18a4.88 4.88 0 0 1-4.85 4.92 4.81 4.81 0 0 1-3.42-1.43 4.93 4.93 0 0 1 3.43-8.39 4.82 4.82 0 0 1 3.09 1.12l.1.1a3.05 3.05 0 0 1 .44.44l.11.12a4.92 4.92 0 0 1 1.1 3.12z" data-original="#ffffff" />
                      </g>
                    </g>
                  </g>
                </svg>
              </a>
            </li> */}
            <li>
              <a href='javascript:void(0)'>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 1227 1227">
                  <path d="M613.5 0C274.685 0 0 274.685 0 613.5S274.685 1227 613.5 1227 1227 952.315 1227 613.5 952.315 0 613.5 0z" data-original="#000000" />
                  <path fill="#fff" d="m680.617 557.98 262.632-305.288h-62.235L652.97 517.77 470.833 252.692H260.759l275.427 400.844-275.427 320.142h62.239l240.82-279.931 192.35 279.931h210.074L680.601 557.98zM345.423 299.545h95.595l440.024 629.411h-95.595z" data-original="#ffffff" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="max-lg:min-w-[140px]">
          <h4 class="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Services</h4>

          <ul class="mt-6 space-y-4">
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Business Analysis</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Investment Opportunities</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>AI Insights</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Startup Support</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Environmental Impact Analysis</a>
            </li>
          </ul>
        </div>

        <div class="max-lg:min-w-[140px]">
          <h4 class="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Platforms</h4>
          <ul class="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>AI-Powered Business Evaluation</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>ROI Calculation Tools</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Air Quality Impact Measurement</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Entrepreneur Profiles</a>
            </li>
          </ul>
        </div>

        <div class="max-lg:min-w-[140px]">
          <h4 class="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Company</h4>

          <ul class="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>About us</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Careers</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Blog</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Partner with Us</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Testimonials</a>
            </li>
          </ul>
        </div>

        <div class="max-lg:min-w-[140px]">
          <h4 class="text-gray-800 font-semibold text-base relative max-sm:cursor-pointer">Additional</h4>

          <ul class="space-y-4 mt-6">
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>FAQ</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Contact Us</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Investor Resources</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Contact</a>
            </li>
            <li>
              <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Legal & Compliance</a>
            </li>
          </ul>
        </div>
      </div>

      <hr class="mt-10 mb-6 border-gray-300" />

      <div class="flex flex-wrap max-md:flex-col gap-4">
        <ul class="md:flex md:space-x-6 max-md:space-y-2">
          <li>
            <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Terms of Service</a>
          </li>
          <li>
            <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Privacy Policy</a>
          </li>
          <li>
            <a href='javascript:void(0)' class='hover:text-gray-800 text-gray-600 text-sm'>Security</a>
          </li>
        </ul>

        <p class='text-gray-600 text-sm md:ml-auto'>© Ecovest. All rights reserved.</p>
      </div>
    </footer>
    </div>
  )
}

export default Home