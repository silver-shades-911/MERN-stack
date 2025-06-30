import React from "react";

const Signup = () => {
  return (
    <div className="h-screen w-full flex flex-col pt-10 gap-y-8">
      {/* heading and img  */}
      <div className="flex flex-col items-center">
        <img src="2 leady talkings.svg" alt="" className="w-50" />
        <h1 className="text-3xl text-black font-bold">Signup</h1>
      </div>

      {/* form */}
      <div className="flex flex-col justify-center px-5">
        <form className="flex flex-col gap-y-2 p-3 bg-gray-100 rounded-md">
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm font-normal">What is your name?</legend>
            <input type="text" className="input" placeholder="Type fullname here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm font-normal">Username</legend>
            <input type="text" className="input" placeholder="Type username here" />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm font-normal">Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Create your password"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-sm font-normal">Confirm Password</legend>
            <input
              type="password"
              className="input"
              placeholder="Type password again"
            />
          </fieldset>
          <div className="flex flex-col gap-y-1">
            <label htmlFor="gender" className="text-sm font-normal">Gender</label>
            <div id="gender" className="flex gap-x-5 ">
              <span className="flex gap-x-1 ">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio"
                  defaultChecked
                  id="boy"
                  value="boy"
                />
                <label htmlFor="boy" className="text-sm">Men</label>
              </span>

              <span className="flex gap-x-1">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio"
                  id="girl"
                  value="girl"
                />
                <label htmlFor="girl" className="text-sm">Women</label>
              </span>
            </div>
          </div>

          <div className="flex gap-x-2 mt-5 justify-center items-center">
            <input
              type="checkbox"
              className="checkbox validator size-5"
              required
              title="Required"
              id="termsAndConditions"
            />
            <label htmlFor="termsAndConditions" className="text-sm">
              I agree with <span>Terms & Conditons.</span>
            </label>
            {/* <p className="absolute top-50  validator-hint">Required</p> */}
          </div>
        </form>
      </div>

      {/* buttons */}
      <div className="flex flex-col justify-center items-center gap-y-3 mt-5">
        <button className="  btn btn-soft bg-[#7161ef] text-white text-xl font-normal">
          Signup
        </button>
        <p className="text-sm ">
          Already have an accound? <a className="link link-primary">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
