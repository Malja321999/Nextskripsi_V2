"use client";
import Link from "next/link";
import React, { useState, useMemo } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

const Quiz = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correctAnswer: "Paris",
    },
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const lastQuestion: number = questions.length;

  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  console.log(userAnswers);
  const [points, setPoints] = useState(0);
  const correct = points / 20;
  const incorrect = questions.length - points / 20;
  const [done, setDone] = useState(true);

  const handleAnswerChange = ({ index, selectedOption }: any) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const calculatePoints = () => {
    let totalPoints = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        totalPoints += 20;
      }
    }
    setPoints(totalPoints);
    setCurrentQuestion(currentQuestion + 1);
  };

  const allQuestionsAnswered = () => {
    return userAnswers.every((answer) => answer !== "");
  };

  const index = currentQuestion;

  return (
    <div className="flex justify-center items-center h-screen bg-[#111827]">
      {currentQuestion < lastQuestion ? (
        <div className="bg-teal-500 w-[60rem] h-fit rounded-md p-5 shadow-md text-5xl flex flex-col justify-center items-center">
          <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-center p-5 w-full">
            Soal {currentQuestion + 1}
          </h1>
          {/*  {done && (
            <div className="relative bg-rose-500 rounded-md shadow-md cursor-pointer text-center font-bold p-2 w-fit text-white m-5">
              Masih ada soal yang belum dijawab
            </div>
          )} */}

          <div
            key={index}
            className="w-full bg-white rounded-md border-4 border-sky-400 p-10 mt-1 text-sky-500"
          >
            <h3>{questions[index].question}</h3>
            {questions[index].options.map((option, optionIndex) => (
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
          <div className="flex justify-between mt-5 text-base w-full gap-20">
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
            {/* Next button */}
            {currentQuestion < lastQuestion - 1 ? (
              <button
                onClick={() => setCurrentQuestion(currentQuestion + 1)}
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
      ) : (
        <div className="bg-teal-500 w-[60rem] rounded-md p-5 shadow-md text-5xl text-center flex flex-col gap-5 justify-center items-center">
          <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-center p-5">
            Quiz completed!
          </h1>
          {/* Display result table here */}
          <h2>Results</h2>
          <p>Your score:{points}</p>
          <p>Correct: {correct}</p>
          <p>Incorrect: {incorrect}</p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setUserAnswers(Array(questions.length).fill(""));
              setPoints(0);
            }}
            className="mt-7 text-black bg-yellow-300 hover:bg-yellow-200 rounded-md w-[20rem] p-5 text-2xl"
          >
            Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
