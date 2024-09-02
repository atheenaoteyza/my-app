import { useState } from "react";

export const Accordion = ({ faq }) => {
  const { question, answer } = faq;
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <h2 id="accordion-flush-heading-1">
        <button
          onClick={() => setToggle(!toggle)}
          type="button"
          className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-900 border-b border-gray-200 dark:border-gray-700 dark:text-white gap-3"
          data-accordion-target="#accordion-flush-body-1"
          aria-expanded="true"
          aria-controls="accordion-flush-body-1"
        >
          <span>{question}</span>
          {!toggle && (
            <svg
              data-accordion-icon
              className="w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
          {toggle && (
            <svg
              data-accordion-icon
              className="rotate-180 w-6 h-6 shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>
      </h2>
      {toggle && (
        <div
          id="accordion-flush-body-1"
          className=""
          aria-labelledby="accordion-flush-heading-1"
        >
          <div className="py-5 border-b border-gray-200 dark:border-gray-700">
            <p className="mb-2 text-gray-500 dark:text-gray-400">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};
