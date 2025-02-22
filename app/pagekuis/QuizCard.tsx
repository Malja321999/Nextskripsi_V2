import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Image from "next/image";

const QuizCard = ({
  UbahcurrentQuestionsNext,
  UbahcurrentQuestionsPrev,
  index,
  questions,
  userAnswers,
  handleAnswerChange,
  TotalQuestion,
}: any) => {
  return (
    <div>
      <div key={index}>
        <h3 className="mb-5 text-2xl">
          {questions[index].question}{" "}
          {questions[index].g && (
            <span className="w-fit ml-5 p-2 border-2 border-blue-500 bg-white font-bold flex justify-center items-center text-center">
              <Image
                width={800}
                height={300}
                className="w-100"
                src={"/g6.png"}
                alt="g6"
              />
            </span>
          )}
        </h3>
        {questions[index].options.map((option: string, optionIndex: number) => (
          <div key={optionIndex} className="px-5 mt-2 w-fit text-2xl">
            <input
              className="mr-2 h-6 w-6"
              type="radio"
              id={`${index}-${optionIndex}`}
              name={`input-${optionIndex}`}
              value={option}
              checked={userAnswers[index] === option}
              onChange={() =>
                handleAnswerChange({ index, selectedOption: option })
              }
            />
            <label htmlFor={`${index}-${optionIndex}`}>{option}</label>
          </div>
        ))}
      </div>

      {/* Next button */}
      <div className="flex justify-between mt-5 text-base w-full gap-20 text-white font-bold">
        {index > 0 ? (
          <button
            onClick={() => UbahcurrentQuestionsPrev()}
            className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
          >
            <span className="-left-1 relative">
              <MdNavigateBefore size={40} />
            </span>
          </button>
        ) : (
          <div></div>
        )}
        {/* Next button */}
        {index < TotalQuestion - 1 ? (
          <button
            onClick={() => UbahcurrentQuestionsNext()}
            className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
          >
            <div className=" relative">
              <MdNavigateNext size={40} />
            </div>
          </button>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
