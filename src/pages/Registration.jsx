import React from 'react'
import { Link } from 'react-router-dom'

const Registration = () => {
  return (
    
        <div class="max-w-2xl max-sm:max-w-lg mx-auto p-6 mt-6">
      <div class="text-center mb-12 sm:mb-16">
        <a href="javascript:void(0)"><img
          src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500" alt="logo" class='w-10 inline-block' />
        </a>
        <h4 class="text-slate-600 text-base mt-6">Sign up into your account</h4>
      </div>

      <form>
        <div class="grid sm:grid-cols-2 gap-8">
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">First Name</label>
            <input name="name" type="text" required autocomplete="name" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Last Name</label>
            <input name="lname" type="text" required autocomplete="lname" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter last name" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Email Id</label>
            <input name="email" type="text" required autocomplete="email" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter email" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Mobile No.</label>
            <input name="number" type="number" required autocomplete="number" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter mobile number" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Password</label>
            <input name="password" type="password" required autoComplete="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter password" />
          </div>
          <div>
            <label class="text-slate-900 text-sm font-medium mb-2 block">Confirm Password</label>
            <input name="cpassword" type="password" required autoComplete="password" class="bg-slate-100 w-full text-slate-900 text-sm px-4 py-3 rounded-md focus:bg-transparent outline-blue-500 transition-all" placeholder="Enter confirm password" />
          </div>
        </div>

        <div class="flex items-center justify-between mt-6">
          
          
            {/* <button type="button" class="mx-auto block min-w-32 py-3 px-6 text-sm font-medium tracking-wider rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none cursor-pointer">
            Register
          </button> */}
        <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Register</button>
       

          
        </div>
        <Link to="/login" class= "text-sm text-center text-slate-500 hover:text-slate-700 transition-all"><p>Already have an account?</p></Link>
      </form>
    </div>
    
  )
}

export default Registration
