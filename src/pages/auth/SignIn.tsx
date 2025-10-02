import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
const loginSchema = z.object({
  nameail: z
    .string().min(4, "Email or username must be at least 4 characters long"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});



type loginSchemaType = z.infer<typeof loginSchema>;

const Login = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { register, handleSubmit, formState } = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const fetchLogin = async ({ nameail, password }: loginSchemaType) => {
  try {
    const response = await fetch("http://localhost:8000/api/user/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
      },
      body: JSON.stringify({ nameail, password }),
      credentials: "include",
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to log in");
    }
    console.log("Login successful:", data);
    return data;
  } catch (error) {
    setErrorMessage(error instanceof Error ? error.message : String(error));
    return console.error("Error logging in:", error);
  }
};


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
        <div className="backdrop-blur-md p-12 px-14  bg-white/30 rounded-xl shadow-lg w-full max-w-xl">
          {/* Login Form */}
          <form className="space-y-4" onSubmit={handleSubmit(fetchLogin)}>
            <p className="text-red-700 font-semibold font-mono text-sm">
              {errorMessage}
            </p>
            <div>
              <p className="text-red-500">
                {formState.errors.nameail?.message}
              </p>
              <label
                className="block text-white mb-2 font-semibold"
                htmlFor="email">
                Email or Username
              </label>
              <input
                type="text"
                id="email"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email or username"
                {...register("nameail")}
                required
              />
            </div>
            <div>
              <p className="text-red-500">
                {formState.errors.password?.message}
              </p>
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
                {...register("password")}
                required
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
            Don't have an account?
            <Link to="/signup" className=" block underline">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
