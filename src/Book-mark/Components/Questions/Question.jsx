import { useState } from "react";

export const Question = () => {
  // Track the open state of each dropdown individually using an array
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle the dropdown by setting the current index
  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "What is Bookmark?",
      answer:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      question: "How can I request a new browser?",
      answer:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
    {
      question: "What about other Chromium browsers?",
      answer:
        "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
    },
  ];

  return (
    <>
      <section className="mt-10 text-center">
        <h2 className="font-bold text-2xl">Frequently Asked Questions</h2>
        <p className="text-[18px]">
          Here are some of our FAQs. If you have any other questions
          <br />
          you’d like answered, please feel free to email us.
        </p>
      </section>

      <section className="mt-10 flex flex-col text-center items-center justify-center content-center">
        {questions.map((item, index) => (
          <div className="w-full max-w-lg my-4" key={index}>
            <button
              onClick={() => toggleDropdown(index)}
              className="flex justify-between items-center w-full py-2 px-4 border-b-2 border-gray-300 text-left text-lg font-medium relative"
              type="button"
            >
              {item.question}
              <svg
                className="w-4 h-4 ml-3 transition-transform transform"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                style={{
                  transform:
                    openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {/* Dropdown content */}
            {openIndex === index && (
              <div className="mt-2 shadow-lg rounded-lg p-4 mx-auto max-w-lg text-left">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}

        <button
          type="button"
          className="mt-20 ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          More Info
        </button>
      </section>
    </>
  );
};

export default Question;
