import React from "react";

export const Download = () => {
  return (
    <>
      <section className="mt-28 text-center ">
        <h2 className="font-bold text-2xl ">Download the extension</h2>
        <p className=" text-[18px]">
          We’ve got more browsers in the pipeline. Please do let us know if
          <br></br> you’ve got a favourite you’d like us to prioritize.
        </p>
      </section>

      <section className="mt-10 flex flex-col gap-10 justify-center md:flex-row items-center">
        <section className="p-5 bg-slate-100 rounded-[15px] border  w-[270px] text-center flex-row items-center">
          <img
            className="ml-[60px]"
            src="/images/logo-chrome.svg"
            alt="BOOKMARK"
          />
          <p className="mt-5"> Add to Chrome</p>
          <p className="mt-5"> Minimum version 62</p>
          <button
            type="button"
            className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Add & Install Extension
          </button>
        </section>

        <div className="mt-[50px]">
          <section className="p-5 bg-slate-100 rounded-[15px] border  w-[270px] text-center flex-row items-center">
            <img
              className="ml-[60px]"
              src="/images/logo-firefox.svg"
              alt="BOOKMARK"
            />
            <p className="mt-5">Add to Firefox</p>
            <p className="mt-5">Minimum version 55</p>
            <button
              type="button"
              className="mt-10bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Add & Install Extension
            </button>
          </section>
        </div>

        <div className="mt-[100px]">
          <section className="p-5 bg-slate-100 rounded-[15px] border  w-[270px] text-center flex-row items-center">
            <img
              className="ml-[60px]"
              src="/images/logo-opera.svg"
              alt="BOOKMARK"
            />
            <p className="mt-5">Add to Opera</p>
            <p className="mt-5"> Minimum version 46</p>
            <button
              type="button"
              className="mt-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Add & Install Extension
            </button>
          </section>
        </div>
      </section>
    </>
  );
};

export default Download;
