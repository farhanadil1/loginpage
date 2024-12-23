import React, { useState, useEffect } from "react";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Retrieve saved theme from localStorage
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
    <div className="min-h-screen bg-gradient-to-r from-slate-200 to-slate-100 dark:bg-gradient-to-tr dark:from-slate-900 dark:to-slate-500 text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <div className="h-[50px] w-[50px]">
      <button
        onClick={toggleDarkMode}
        className="bg-slate-500  rounded-lg shadow-lg hover:bg-slate-500 dark:bg-white dark:hover:bg-white transition duration-300"
      >
        <svg className="flex justify-center" width="48px" height="48px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-labelledby="nightModeIconTitle" stroke="#000000" stroke-width="1" stroke-linecap="square" stroke-linejoin="miter" fill="none" color="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title id="nightModeIconTitle">Night Mode</title> <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"></path> <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z"></path> <path d="M12 5V3M12 21v-2"></path> <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z"></path> </g></svg>
      </button>
      </div>
      
      <div className='h-[450px] mt-[-35px] flex justify-center rounded-2xl drop-shadow-2xl transform transition-all duration-500'>
      {showLogin ? (
        // Login Card
        <div className="relative dark:bg-gray-300 bg-white h-[450px] mx-52 my-16 flex justify-center rounded-2xl drop-shadow-2xl">
          <div className="h-full w-[50%] bg-blue-400 rounded-l-2xl rounded-r-[150px]">
            <div className="flex dark:text-slate-900 justify-center mt-36 text-[40px] font-medium text-white ">
              Hello, Welcome!
            </div>
            <div className="flex dark:text-slate-900 justify-center text-gray-100 font-semibold">
              Don't have an account?
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowLogin(false)} // Toggle to signup
                className="mt-6 dark:text-slate-900 text-white border-blue-300 rounded-[8px] border-4 pb-1 w-36 text-[20px] hover:bg-blue-300 hover:drop-shadow-xl transition-transform duration-300"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="h-full w-[50%] dark:bg-gray-300 bg-white rounded-r-2xl">
            <div className="flex justify-center mt-10 text-[32px] font-medium text-black">
              Login
            </div>
            <div className="flex justify-center mt-8">
              <input
                placeholder="Username or Email"
                required
                className="bg-gray-200 dark:text-black dark:bg-white focus:border-blue-400 focus:border-2 focus:outline-none px-3 rounded-[8px] w-[350px] h-8 enabled:border-blue-300"
              />
            </div>
            <div className="flex justify-center mt-8 ">
              <input
                placeholder="Enter your password"
                type="password"
                required
                className="relative dark:text-black dark:bg-white bg-gray-200 focus:border-blue-400 focus:border-2 focus:outline-none px-3 rounded-[8px] w-[350px] h-8 enabled:border-blue-300"
              />

            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-blue-400 rounded-[8px] w-[350px] h-10 text-white font-semibold text-[18px] hover:drop-shadow-lg hover:border-2 hover:bg-blue-200 hover:text-black hover:border-blue-400  transition-transform duration-300">
                Login
              </button>
            </div>
            <div className='flex dark:text-black justify-center mt-2 font-medium text-[14px]'>or login with social platforms</div>
            <div className='flex space-x-[-14px] mt-4 mx-16 '>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="https://myaccount.google.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 102 102">
  <path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path><path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path><path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path><path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 102 102">
  <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.github.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 110 110">
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
  </svg></a></div>

            </div>
          </div>
        </div>
        
        
      ) : (
        // Signup Card
        <div className="bg-white dark:bg-gray-300 h-[450px] mx-52 my-16 flex justify-center rounded-2xl drop-shadow-2xl">
          <div className="h-full w-[50%] dark:bg-gray-300 bg-white rounded-l-2xl">
            <div className="flex justify-center mt-6 text-[32px] font-medium text-black">
              Registration
            </div>
            <div className="flex justify-center mt-8">
              <input
                placeholder="Enter your name"
                className="bg-gray-200 dark:text-black dark:bg-white focus:border-blue-400 focus:border-2 focus:outline-none px-3 rounded-[8px] w-[350px] h-8 enabled:border-blue-300"
              />
            </div>
            <div className="flex justify-center mt-8">
              <input
                placeholder="Enter your @email"
                className="bg-gray-200 dark:text-black dark:bg-white focus:border-blue-400 focus:border-2 focus:outline-none px-3 rounded-[8px] w-[350px] h-8 enabled:border-blue-300"
              />
            </div>
            <div className="flex justify-center mt-8">
              <input
                placeholder="Enter your password"
                type="password"
                className="bg-gray-200 dark:text-black dark:bg-white focus:border-blue-400 focus:border-2 focus:outline-none px-3 rounded-[8px] w-[350px] h-8 enabled:border-blue-300"
              />
            </div>
            <div className="flex justify-center mt-8">
              <button className="bg-blue-400 rounded-[8px] w-[350px] h-10 text-white font-semibold text-[18px] hover:drop-shadow-lg hover:border-2 hover:bg-blue-200 hover:text-black hover:border-blue-400  transition-transform duration-300">
                Register
              </button>
            </div>
            <div className='flex justify-center mt-2 font-medium text-[14px] dark:text-black'>or Signup with social platforms</div>
            <div className='flex space-x-[-12px] mt-4 mx-16 '>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="https://myaccount.google.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 102 102">
  <path fill="#f5bc00" d="M43.6,20.1H42V20H24v8h11.3c-1.6,4.7-6.1,8-11.3,8c-6.6,0-12-5.4-12-12s5.4-12,12-12c3.1,0,5.8,1.2,8,3l5.7-5.7	C34,6.1,29.3,4,24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#6c19ff" d="M43.6,20.1L43.6,20.1L42,20H24v8h11.3c-0.8,2.2-2.2,4.2-4.1,5.6c0,0,0,0,0,0l6.2,5.2C37,39.2,44,34,44,24	C44,22.7,43.9,21.4,43.6,20.1z"></path><path fill="#3ddab4" d="M24,44c5.2,0,9.9-2,13.4-5.2l-6.2-5.2c-2,1.5-4.5,2.4-7.2,2.4c-5.2,0-9.6-3.3-11.3-7.9l-6.5,5	C9.5,39.6,16.2,44,24,44z"></path><path fill="#f55376" d="M6.3,14.7l6.6,4.8C14.7,15.1,19,12,24,12c3.1,0,5.8,1.2,8,3l5.7-5.7C34,6.1,29.3,4,24,4	C16.3,4,9.7,8.3,6.3,14.7z"></path><path fill="#2100c4" d="M26.6,35.7l6.8,6c1.5-0.8,2.9-1.8,4.1-2.9l-6.2-5.2C29.9,34.6,28.3,35.3,26.6,35.7z"></path><path fill="#eb0000" d="M9.2,10.6c-1.1,1.2-2.1,2.6-2.9,4.1l3.9,2.9l2.6,1.9c0.6-1.6,1.6-3,2.8-4.1L9.2,10.6z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 102 102">
  <linearGradient id="Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1" x1="9.993" x2="40.615" y1="9.993" y2="40.615" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2aa4f4"></stop><stop offset="1" stop-color="#007ad9"></stop></linearGradient><path fill="url(#Ld6sqrtcxMyckEl6xeDdMa_uLWV5A9vXIPu_gr1)" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M26.707,29.301h5.176l0.813-5.258h-5.989v-2.874c0-2.184,0.714-4.121,2.757-4.121h3.283V12.46 c-0.577-0.078-1.797-0.248-4.102-0.248c-4.814,0-7.636,2.542-7.636,8.334v3.498H16.06v5.258h4.948v14.452 C21.988,43.9,22.981,44,24,44c0.921,0,1.82-0.084,2.707-0.204V29.301z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 100 100">
  <radialGradient id="yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1" cx="19.38" cy="42.035" r="44.899" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fd5"></stop><stop offset=".328" stop-color="#ff543f"></stop><stop offset=".348" stop-color="#fc5245"></stop><stop offset=".504" stop-color="#e64771"></stop><stop offset=".643" stop-color="#d53e91"></stop><stop offset=".761" stop-color="#cc39a4"></stop><stop offset=".841" stop-color="#c837ab"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8ma_Xy10Jcu1L2Su_gr1)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><radialGradient id="yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2" cx="11.786" cy="5.54" r="29.813" gradientTransform="matrix(1 0 0 .6663 0 1.849)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#4168c9"></stop><stop offset=".999" stop-color="#4168c9" stop-opacity="0"></stop></radialGradient><path fill="url(#yOrnnhliCrdS2gy~4tD8mb_Xy10Jcu1L2Su_gr2)" d="M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20	c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20	C42.014,38.383,38.417,41.986,34.017,41.99z"></path><path fill="#fff" d="M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5	s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"></path><circle cx="31.5" cy="16.5" r="1.5" fill="#fff"></circle><path fill="#fff" d="M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12	C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"></path>
  </svg></a></div>
              <div className='hover:scale-110 transition-transform duration-300 hover:drop-shadow-lg'><a href="http://www.github.com" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 110 110">
      <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
  </svg></a></div>

            </div>
          </div>
          <div className="h-full w-[50%] bg-blue-400 rounded-r-2xl rounded-l-[150px] ">
            <div className="flex justify-center mt-36 dark:text-slate-800 text-[40px] font-medium text-white">
              Welcome Back!
            </div>
            <div className="flex justify-center dark:text-slate-800 text-gray-100 font-semibold">
              Already have an account?
            </div>
            <div className="flex justify-center">
              <button
                onClick={() => setShowLogin(true)} // Toggle to login
                className="mt-6 text-white border-blue-300 rounded-[8px] border-4 pb-1 w-36 text-[20px] hover:bg-blue-300 hover:drop-shadow-xl transition-transform duration-300"
              >
                Login
              </button>
            </div>
          </div>
          </div>
        
      )}
    </div>
    </div>
    </div>
   
  );
};

export default App;
