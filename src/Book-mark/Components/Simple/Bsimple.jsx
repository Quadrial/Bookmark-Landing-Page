import { useState } from "react";
import Image1 from "/images/illustration-features-tab-1.svg";
import Image2 from "/images/illustration-features-tab-2.svg";
import Image3 from "/images/illustration-features-tab-3.svg";

const buttons = [
  {
    name: "Simple Bookmarking",
    heading: "Bookmark in one click",
    content:
      "Organize your bookmarks however you like. Our simple drag and drop interface gives you complete control over how you manage your favourite sites",
    last: "More Info",
    image: Image1,
  },
  {
    name: "Speedy Searching",
    heading: "Intelligent search",
    content:
      "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
    last: "More Info",
    image: Image2,
  },
  {
    name: "Easy Sharing",
    heading: "Share your bookmarks",
    content:
      "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
    last: "More Info",
    image: Image3,
  },
];

export const Bsimple = () => {
  const [currentHome, setCurrentHome] = useState(0);

  return (
    <>
      <main className="flex flex-col">
        <section className="flex justify-center gap-6">
          {buttons.map((button, index) => (
            <>
              <main
                key={index}
                className="text-[15px] md:text-[18px] lg:text-[18px] hover:text-red-500 underline underline-offset-[15px] decoration-4 decoration-red-500"
              >
                <button
                  onClick={() => setCurrentHome(index)}
                  className={`btc ${
                    index === currentHome
                      ? " text-black underline underline-offset-[15px] decoration-4 decoration-red-500"
                      : ""
                  }`}
                >
                  {button.name}
                </button>
              </main>
            </>
          ))}
        </section>

        <main className="mt-10 flex flex-col md:flex-row lg:flex-row justify-between items-center gap-10">
          <img
            src={buttons[currentHome].image}
            alt={buttons[currentHome].name}
          />
          <figure>
            <div className="text-[32px]">{buttons[currentHome].heading}</div>
            <div className="mt-5">{buttons[currentHome].content}</div>
            <button className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              {buttons[currentHome].last}
            </button>
          </figure>
        </main>
      </main>
    </>
  );
};
