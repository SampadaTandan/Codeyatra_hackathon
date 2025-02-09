// import React from 'react'

// const Login = () => {
//   return (
//     <div>
        


  
//     <>
//       <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
//         <div className="sm:mx-auto sm:w-full sm:max-w-sm">
//           {/* <img
//             alt="Your Company"
//             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           /> */}
//           <h2 className="mt-10 text-center text-2xl font-medium tracking-tight text-gray-900 font-poppins">
//           Log In 
//           </h2>
//         </div>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//           <form action="#" method="POST" className="space-y-6">
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-900 font-poppins">
//                 Email address
//               </label>
//               <div className="mt-2">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   autoComplete="email"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-sans"
//                 />
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center justify-between">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-900 font-poppins">
//                   Password
//                 </label>
//                 <div className="text-sm">
//                   <a href="#" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
//                     Forgot password?
//                   </a>
//                 </div>
//               </div>
//               <div className="mt-2">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   required
//                   autoComplete="current-password"
//                   className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-poppins"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 className="flex w-full justify-center rounded-md bg-[#0062B6] px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-[#004C8C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
//               >
//                Log In
//               </button>
//             </div>
//           </form>

//           <p className="mt-10 text-center text-sm text-gray-500 font-poppins">
//           Don't have a account yet?{' '}
//             <a href="/signup" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
//             Sign Up
//             </a>
//           </p>
//         </div>
//       </div>
//     </>


//     </div>
//   )
// }

// export default Login
import React from 'react';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            {/* <img
//             alt="Your Company"
//             src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
//             className="mx-auto h-10 w-auto"
//           /> */}
          <h2 className="mt-10 text-center text-2xl font-medium tracking-tight text-gray-900 font-poppins">
            Log In 
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900 font-poppins">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-sans"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-900 font-poppins">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 
                             focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm font-poppins"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-[#0062B6] px-3 py-1.5 text-sm font-semibold text-white shadow-sm 
                           hover:bg-[#004C8C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-poppins"
              >
                Log In
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 font-poppins">
            Don't have an account yet?{' '}
            <Link to="/signup" className="font-semibold text-[#0062B6] hover:text-[#004C8C]">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
