import { Link } from "react-router";

const SignUp = () => {
  return (
    // Image Background
    <div className="flex overflow-hidden justify-center items-center h-screen bg-[url('https://i.pinimg.com/originals/e7/50/c3/e750c3d85e680359757e84924c37a817.png')] bg-cover">
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
              <Link
                to="/forgot-password"
                className="text-right block underline text-white">
                Forgot Password?
              </Link>
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
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
