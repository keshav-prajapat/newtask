import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

const Login = () => {
  return (
    <section className="h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center items-center p-4">
        <img
          src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          alt="Sample"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Right Side: Login Form */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start p-4">
        <h2 className="text-2xl font-semibold mb-4">Sign In</h2>
        <div className="text-center md:text-left mb-4">
          <label className="mr-1">Sign in with</label>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            <BiLogoFacebook size={20} />
          </button>
          <button
            type="button"
            className="mx-1 h-9 w-9 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
          >
            <AiOutlineTwitter size={20} />
          </button>
        </div>
        <div className="my-5 flex items-center before:flex-1 before:border-t before:border-neutral-300 after:flex-1 after:border-t after:border-neutral-300">
          <p className="mx-4 mb-0 text-center font-semibold text-slate-500">Or</p>
        </div>
        <input
          className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="text-sm w-full px-4 py-2 border border-gray-300 rounded mb-4"
          type="password"
          placeholder="Password"
        />
        <div className="mt-4 flex justify-between font-semibold text-sm">
          <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
            <input className="mr-1" type="checkbox" />
            <span>Remember Me</span>
          </label>
          <a
            className="text-blue-600 hover:text-blue-700 hover:underline"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="text-center md:text-left">
          <button
            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
            type="submit"
          >
            Login
          </button>
        </div>
        <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
          Don&apos;t have an account?{" "}
          <a className="text-red-600 hover:underline" href="#">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
