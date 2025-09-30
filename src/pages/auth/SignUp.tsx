import { Link } from "react-router";

const SignUp = () => {
  return (
    // Image Background
    <div className="flex overflow-hidden justify-center items-center h-screen bg-[url('/ina3.jpg')] bg-cover">
      {/* Blur Container */}
      <div className="w-screen mx-auto flex items-center justify-around">
        {/* Left Side Wrapper */}
        <div className="w-auto self-center max-w-lg">
          {/* Left Side Content */}
          <div className="text-left space-y-4 pt-4">
            <h3 className="text-5xl font-extrabold mb-6 font-serif text-white">
              Artike
            </h3>
            <h2 className="text-white text-6xl font-sans font-bold">
              LET'S MAKE <br />
              MEMORIES <br /> WITH US
            </h2>
            <p className="text-white text-2xl font-sans">
              Join us today and start your journey with Artike!
            </p>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="backdrop-blur-md p-12 px-14  bg-white/30 rounded-xl shadow-lg w-full max-w-lg">
          {/* SignUp Form */}
          <form className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-white mb-2 font-semibold">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label
                className="block text-white mb-2 font-semibold"
                htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label
                className="block text-white mb-2 font-semibold"
                htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <label
                htmlFor="verifyPassword"
                className="block text-white mb-2 font-semibold">
                Verify Password
              </label>
              <input
                type="password"
                id="verifyPassword"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Verify your password"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
              Sign Up
            </button>
          </form>
          <p className="text-white text-center flex gap-2 mt-4 justify-center">
            You have an account?
            <Link to="/signin" className=" block underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
