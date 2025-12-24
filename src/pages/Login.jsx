import React from "react";
import { Link } from "react-router-dom";
import Logo from "../components/logo";

const Login = () => {
  return (
    <div className="w-fullh-screen flex items-center justify-center">
    <div className="absolute top-5 left-5 lg:top-10 lg:left-10">
        <Logo />
    </div>
      <div className="flex h-screen w-full">
        <div className="w-full overflow-hidden hidden md:inline-block">
          <img
            className="w-[50vw]"
            src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/leftSideImage.png"
            alt="leftSideImage"
          />
        </div>

        <div className="w-full flex flex-col items-center justify-center">
          <form className="md:w-96 w-80 flex flex-col items-center justify-center">
            <h2 className="text-4xl text-green-500 font-medium">Sign in</h2>
            <p className="text-sm text-neutral-300/90 mt-3">
              Welcome back! Please sign in to continue
            </p>

            <button
              type="button"
              className="w-full mt-8 bg-neutral-500/10 flex items-center justify-center h-12 rounded-full"
            >
              <img
                src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/login/googleLogo.svg"
                alt="googleLogo"
              />
            </button>

            <div className="flex items-center gap-4 w-full my-5">
              <div className="w-full h-px bg-neutral-500/90"></div>
              <p className="w-full text-nowrap text-sm text-neutral-300/90">
                or sign in with email
              </p>
              <div className="w-full h-px bg-neutral-500/90"></div>
            </div>

            <div className="flex items-center w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
              <svg
                width="16"
                height="11"
                viewBox="0 0 16 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 .55.571 0H15.43l.57.55v9.9l-.571.55H.57L0 10.45zm1.143 1.138V9.9h13.714V1.69l-6.503 4.8h-.697zM13.749 1.1H2.25L8 5.356z"
                  fill="none"
                  className="fill-green-500"
                />
              </svg>
              <input
                type="email"
                placeholder="Email id"
                className="bg-transparent text-neutral-300/80 placeholder-neutral-500/80 outline-none text-sm w-full h-full"
                required
              />
            </div>

            <div className="relative w-full mt-2">
              <a className="absolute w-full flex justify-end text-sm text-green-500 underline pr-2" href="#">
                  Forgot password?
                </a>
              <div className="flex items-center mt-6 w-full bg-transparent border border-gray-300/60 h-12 rounded-full overflow-hidden pl-6 gap-2">
                <svg
                  width="13"
                  height="17"
                  viewBox="0 0 13 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 8.5c0-.938-.729-1.7-1.625-1.7h-.812V4.25C10.563 1.907 8.74 0 6.5 0S2.438 1.907 2.438 4.25V6.8h-.813C.729 6.8 0 7.562 0 8.5v6.8c0 .938.729 1.7 1.625 1.7h9.75c.896 0 1.625-.762 1.625-1.7zM4.063 4.25c0-1.406 1.093-2.55 2.437-2.55s2.438 1.144 2.438 2.55V6.8H4.061z"
                    fill="none"
                    className="fill-green-500"
                  />
                </svg>
                <input
                  type="password"
                  placeholder="Password"
                  className="bg-transparent text-neutral-300/80 placeholder-neutral-500/80 outline-none text-sm w-full h-full"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
            >
              Login
            </button>
            <p className="text-neutral-500/90 text-sm mt-4">
              Don’t have an account?{" "}
              <Link to={"/signup"} className="text-green-500 hover:underline" >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
