import React from "react";

const Signup = () => {
  return (
    <div className="h-auto w-full flex flex-col pt-10 gap-y-8 md:px-4 container mx-auto mb-10">
      {/* heading and img  */}
      <div className="flex flex-col items-center">
        <img src="2 leady talkings.svg" alt="" className="w-50  md:hidden" />
        <h1 className="text-3xl text-black font-bold  lg:hidden">Login</h1>
        <h1 className="hidden text-3xl text-black font-bold lg:block">
          Welcome Back
        </h1>
      </div>
      {/* form */}
      <div className=" flex flex-col justify-center px-5 md:flex-row md:items-center md:gap-x-2 md:p-2 md:bg-[#efd9ce] md:rounded-md lg:p-20 ">
        <div className=" hidden md:w-1/2 md:flex flex-col justify-center items-center gap-y-5 lg:w-3/4">
          <img
            src="2 leady talkings.svg"
            alt=""
            className="hidden w-70 md:block lg:w-90"
          />

          {/* heading and some lines for images support  */}
          <div className=" px-5 flex flex-col gap-y-2 lg:px-20">
            <h1 className="text-4xl font-bold text-gray-50 ">
              Want to chat with friends and Family?
            </h1>
            <p className="text-xl/7  text-white ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt fuga
              veniam illum id architecto
            </p>
          </div>
        </div>

        {/* form  */}
        <form className="flex flex-col gap-y-2 p-3 bg-gray-100 rounded-md md:w-1/2 md:bg-white lg:justify-center-safe lg:items-center-safe 2lg:w-1/4 lg:gap-y-3">
          <h1 className="hidden text-2xl text-black font-bold lg:block">
            Login
          </h1>
          <fieldset className="fieldset lg:w-3/4">
            <legend className="fieldset-legend text-sm font-normal">
              Username
            </legend>
            <input
              type="text"
              className="input"
              placeholder="Type username here"
            />
          </fieldset>
          <fieldset className="fieldset lg:w-3/4">
            <legend className="fieldset-legend text-sm font-normal">
              Password
            </legend>
            <input
              type="password"
              className="input"
              placeholder="Create your password"
            />
          </fieldset>

          {/* signup button in form for screen > lx   */}

          <div className="hidden lg:flex flex-col justify-center items-center gap-y-3 mt-5 lg:w-3/4">
            <button className="  btn btn-soft bg-[#7161ef] text-white font-normal rounded-lg">
              Login
            </button>
            <p className="text-sm ">
              New here, Want to create account?{" "}
              <a className="link link-primary">Signup</a>
            </p>
          </div>
        </form>
      </div>
      {/* buttons */}
      <div className="flex flex-col justify-center items-center gap-y-3 mt-5 lg:hidden">
        <button className="  btn btn-soft bg-[#7161ef] text-white text-xl font-normal rounded-xl">
          Login
        </button>
        <p className="text-sm ">
          New here, Want to create account?{" "}
          <a className="link link-primary">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
