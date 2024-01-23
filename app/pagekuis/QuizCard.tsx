import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const QuizCard = ({
  UbahcurrentQuestionsNext,
  UbahcurrentQuestionsPrev,
  index,
  questions,
  userAnswers,
  handleAnswerChange,
  TotalQuestion,
  allQuestionsAnswered,
  calculatePoints,
}: any) => {
  return (
    <div>
      <div key={index}>
        <h3>{questions[index].question}</h3>
        {questions[index].options.map((option: string, optionIndex: number) => (
          <div key={optionIndex} className="px-5">
            <input
              className="mr-2 h-6 w-6"
              type="radio"
              id={`${index}-${optionIndex}`}
              name={`question-${index}`}
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
            className="bg-yellow-500 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
          >
            <div className=" relative">
              <MdNavigateNext size={40} />
            </div>
          </button>
        ) : (
          <div>
            {allQuestionsAnswered() ? (
              <button
                onClick={() => calculatePoints()}
                className="relative bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
              >
                <MdNavigateNext size={40} />
              </button>
            ) : (
              <div className="relative bg-rose-500 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center">
                Belum Semua Soal Terjawab
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizCard;
