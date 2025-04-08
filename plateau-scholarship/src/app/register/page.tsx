import Link from "next/link";

const page = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-t from-yellow-500 to-green-950 flex justify-center items-center">
      <div className="w-full flex justify-center items-center">
        <form className="w-full max-w-md bg-white border p-4 rounded-lg shadow-lg text-left flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-center font-bold text-black text-2xl mb-3">Register</h3>

          {/* Name Input */}
          <label className="mb-1 font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Full name"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Email Input */}
          <label className="mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Password Input */}
          <label className="mb-1 font-medium text-gray-700">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Institution Input */}
          <label className="mb-1 font-medium text-gray-700">Institution</label>
          <input
            type="text"
            placeholder="Enter institution name"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Local Government Select */}
          <label className="mb-1 font-medium text-gray-700">Local Government</label>
          <select
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
            defaultValue=""
          >
            <option value="" disabled>Select your local government</option>
            <option value="barkin-ladi">Barkin Ladi</option>
            <option value="bassa">Bassa</option>
            <option value="bokkos">Bokkos</option>
            <option value="jos-east">Jos East</option>
            <option value="jos-north">Jos North</option>
            <option value="jos-south">Jos South</option>
            <option value="kanam">Kanam</option>
            <option value="kanke">Kanke</option>
            <option value="langtang-north">Langtang North</option>
            <option value="langtang-south">Langtang South</option>
            <option value="mangu">Mangu</option>
            <option value="mikang">Mikang</option>
            <option value="pankshin">Pankshin</option>
            <option value="qua-an-pan">Qua’an Pan</option>
            <option value="riyom">Riyom</option>
            <option value="shendam">Shendam</option>
            <option value="wase">Wase</option>
          </select>

          {/* Date of Birth Input */}
          <label className="mb-1 font-medium text-gray-700">Date of Birth</label>
          <input
            type="date"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Course of Study Input */}
          <label className="mb-1 font-medium text-gray-700">Course of Study</label>
          <input
            type="text"
            placeholder="Enter your course"
            className="w-full border border-gray-300 p-2 text-black rounded mb-3"
          />

          {/* Submit Button */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
