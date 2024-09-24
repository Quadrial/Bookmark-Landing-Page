import React from "react";

export const Footer = () => {
  return (
    <>
      <section>
        <section className="p-10 mt-10 text-center bg-blue-500">
          <p className="text-[18px]">35,000+ already joined</p>
          <p className="text-2xl">
            Stay up-to-date with what<br></br> we’re doing
          </p>

          <div className="mt-6 flex flex-col justify-center gap-5 md:flex-row items-center">
            <div className="w-[250px] flex flex-col bg-red-500 ">
              <input
                className="border rounded-[5px] border-red-700"
                placeholder="example@email.com"
              />
              <label className="border rounded-[5px] border-red-700">
                Whoops, make sure it's an email
              </label>
            </div>

            <button
              type="button"
              className="h-10 bg-white hover:bg-blue-700 text-red-500 border border-red-500 font-bold py-2 px-4 rounded"
            >
              Contact Us
            </button>
          </div>
        </section>
        <section className="bg-slate-700 flex flex-col items-center justify-between mx-auto p-6 md:flex-row px-12 lg:px-[300px]">
          <section className="text-center md:text-start lg:text-start flex flex-col md:flex-row lg:flex-row gap-5 text-white">
            <img
              src="/images/logo-bookmark.svg"
              className=""
              alt="BOOKMARK"
            />
            <p>Features</p>
            <p>Pricing</p>
            <p>Contact</p>
          </section>

          <main>
            <div className="flex items-center gap-10 mx-auto p-4">
              <img
                src="/images/icon-twitter.svg"
                className="h-8 text-white"
                alt="BOOKMARK"
              />
              <img
                src="/images/icon-facebook.svg"
                className="h-8 text-white"
                alt="BOOKMARK"
              />
            </div>
          </main>
        </section>
      </section>
    </>
  );
};

export default Footer;
