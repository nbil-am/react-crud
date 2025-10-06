import { Link } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

const registerSchema = z
  .object({
    full_name: z.string().min(4, "Name must be at leastt 4 characters long"),
    username: z.string().min(4, "Name must be at leastt 4 characters long"),
    email: z.email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 8 characters long"),
    password_confirmation: z
      .string()
      .min(6, "Password must be at least 8 characters long"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Passwords do not match",
  });

type registerSchemaType = z.infer<typeof registerSchema>;

const SignUp = () => {
  const { register, formState, handleSubmit } = useForm<registerSchemaType>({
    resolver: zodResolver(registerSchema),
  });
  const fetchSignUp = async (data: registerSchemaType) => {
    try {
      const response = await fetch("http://localhost:8000/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
          "X-Requested-With": "XMLHttpRequest",
        },
        body: JSON.stringify(data),
        credentials: "include",
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to sign up");
      }
      const responseData = await response.json();
      console.log("Sign up successful:", responseData);
      window.location.reload();

      return responseData;
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };
  return (
    // Image Background

    <div className="flex overflow-hidden bg-center justify-center items-center h-screen bg-[url('/ina3.jpg')] bg-cover">
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
          <form className="space-y-4" onSubmit={handleSubmit(fetchSignUp)}>
            <div>
              <p className="text-red-500">
                {formState.errors.full_name?.message}
              </p>
              <label
                htmlFor="full_name"
                className="block text-white mb-2 font-semibold">
                Full Name
              </label>
              <input
                type="text"
                id="full_name"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                {...register("full_name")}
              />
            </div>
            <div>
              <p className="text-red-500">
                {formState.errors.username?.message}
              </p>
              <label
                htmlFor="username"
                className="block text-white mb-2 font-semibold">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full p-2 rounded border-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your username"
                {...register("username")}
              />
            </div>
            <div>
              <p className="text-red-500">{formState.errors.email?.message}</p>
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
                {...register("email")}
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
                {...register("password_confirmation")}
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
