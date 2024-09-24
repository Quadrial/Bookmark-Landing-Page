import React from "react";

export const Manager = () => {
  return (
    <>
      <div className="mt-[25px] flex justify-between flex-col items-center gap-10 md:flex-row">
        <div>
          <div className="container max-w-screen-xl flex flex-col justify-between mx-auto">
            <h2 className="text-3xl font-bold">
              A Simple Bookmark <h2></h2>Manager
            </h2>
            <p className="text-lg">
              A clean and simple interface to organize your favourite <p></p>{" "}
              websites. Open a new browser tab and see your sites <p></p> load
              instantly. Try it for free.
            </p>
          </div>

          <div className="max-w-screen-xl flex flex-row mx-auto ">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            >
              Get it on Chrome
            </button>
            <button
              type="button"
              className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-16 "
            >
              Get it on Firefox
            </button>
          </div>
        </div>

        <div>
          <img
            className="flex justify-center"
            src="/images/illustration-features-tab-1.svg"
            alt="BOOKMARK"
          />
        </div>
      </div>

      <div className="flex flex-col text-center  m-10">
        <h2 className="font-bold text-[32px]">Features</h2>
        <p className="text-[18px]">
          Our aim is to make it quick and easy for you to access your <p></p>{" "}
          favourite websites. Your bookmarks sync between your devices<p></p> so
          you can access them on the go.
        </p>
      </div>
    </>
  );
};

export default Manager;
