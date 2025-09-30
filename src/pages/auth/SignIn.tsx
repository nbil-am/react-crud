import { Link } from "react-router";

const Login = () => {
  return (
    // Image Background
    <div className="flex overflow-hidden justify-center items-center h-screen bg-[url('/ina2.jpg')] bg-cover">
      {/* Blur Container */}
      <div className="w-screen mx-auto flex items-center justify-around">
        {/* Left Side Wrapper */}
        <div className="w-auto self-start max-w-lg">
          {/* Left Side Content */}
          <div className="text-left space-y-4 pt-4">
            <h3 className="text-5xl font-extrabold mb-6 font-serif text-white">
              Artike
            </h3>
            <h2 className="text-white text-6xl font-sans font-bold">
              LET'S SEE <br />
              YOUR MEMORIES
            </h2>
            <p className="text-white text-2xl font-sans">
              See your memories and create new ones with Artike!
            </p>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="backdrop-blur-md p-12 px-14  bg-white/30 rounded-xl shadow-lg w-full max-w-lg">
          {/* Login Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-white mb-2 font-semibold" htmlFor="email">
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
              <label className="block text-white mb-2 font-semibold" htmlFor="password">
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
              />
              <Link
                to="/forgot-password"
                className="text-right block underline text-white">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200">
              Log In
            </button>
          </form>
          <p className="text-white text-center flex gap-2 mt-4 justify-center">
            Don't have an account?<Link to="/signup" className=" block underline">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
