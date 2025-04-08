

import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-yellow-400 to-green-900 flex justify-center items-center">
    <div className="w-full flex justify-center items-center">
      <form
        className="w-full h-[30vw] sm:w-3/4 md:w-1/2 lg:w-1/3 bg-white border p-8 rounded-lg shadow-lg text-left flex flex-col justify-center"
      >

        {/* Title */}
        <h3 className="text-center font-bold text-2xl mb-6">Login</h3>

        {/* Email Input */}
        <label className="mb-2 font-medium text-gray-700">Email</label>
        <input
          type="email" // Clear error when typing
          placeholder="Enter your email"
          className="w-full border border-gray-300 p-2 rounded mb-1 text-black"
        />

          <p className="text-red-500 text-sm mb-4">Email is required</p>

        {/* Password Input */}
        <label className="mb-2 font-medium text-gray-700 ">Password</label>
        <input
          type="password" // Clear error when typing
          placeholder="Enter your password"
          className="w-full border border-gray-300 p-2  text-black rounded mb-1"
        />
          <p className="text-red-500 text-sm mb-4">Password is required</p>
      </form>
    </div>
  </div>
  )
}

export default page
