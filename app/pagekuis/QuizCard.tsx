"use client";
import { useState } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const QuizCard = ({
  question,
  options,
  correctAnswer,
  onNext,
  currentQuestion,
  setCurrentQuestion,
  lastQuestion,
}: any) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [NotYetAnswer, setNotYetAnswer] = useState(true);

  const handleAnswerSelect = (option: any) => {
    setSelectedAnswer(option);
  };

  const handleNextClick = () => {
    if (selectedAnswer !== null) {
      onNext(selectedAnswer === correctAnswer);
      setSelectedAnswer(null);
    } else {
      setNotYetAnswer(!NotYetAnswer);
    }
  };

  return (
    <div className="bg-teal-500 w-[60rem] h-fit rounded-md p-5 shadow-md text-5xl">
      <div>
        <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-center p-5">
          Soal {currentQuestion + 1}
        </h1>
        <ul className="bg-white rounded-md border-4 border-sky-400 p-10 mt-5 text-sky-500">
          <p>{question}</p>
          {options.map((option: any) => {
            return (
              <li className="px-5" key={option}>
                <input
                  className="mr-2 h-6 w-6"
                  type="radio"
                  key={option}
                  checked={selectedAnswer === option}
                  onClick={() => handleAnswerSelect(option)}
                />
                {option}
              </li>
            );
          })}
        </ul>
        {/* Next and Previous button */}
        <div className="flex justify-between mt-5 text-base w-50 gap-10">
          {currentQuestion > 0 ? (
            <button
              onClick={() => setCurrentQuestion(currentQuestion - 1)}
              className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
            >
              <span className="-left-1 relative">
                <MdNavigateBefore size={40} />
              </span>
            </button>
          ) : (
            <div></div>
          )}
          {currentQuestion < lastQuestion ? (
            <button
              onClick={handleNextClick}
              className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 flex justify-center items-center"
            >
              <span className=" relative">
                <MdNavigateNext size={40} />
              </span>
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
