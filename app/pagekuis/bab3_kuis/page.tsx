"use client";
import QuizCard from "../QuizCard";
import { useState } from "react";

const Bab3_Kuis = () => {
  const [darkMode, setDarkMode] = useState(false);
  const questions = [
    {
      question: "1 +  1 = ...",
      options: ["1", "2", "3", "4"],
      correctAnswer: "2",
    },
    {
      question: "2 + 1 = ...",
      options: ["1", "2", "3", "4"],
      correctAnswer: "3",
    },
    {
      question: "3 + 1 = ...",
      options: ["1", "2", "3", "gila banget nih bisa juga"],
      correctAnswer: "4",
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const lastQuestion: number = questions.length;

  const [score, setScore] = useState(0);

  const handleNextQuestion = (isCorrect: any) => {
    if (isCorrect) {
      setScore(score + 10);
    }

    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#111827]">
      {currentQuestion < lastQuestion ? (
        <QuizCard
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          lastQuestion={lastQuestion}
          question={questions[currentQuestion].question}
          options={questions[currentQuestion].options}
          correctAnswer={questions[currentQuestion].correctAnswer}
          onNext={handleNextQuestion}
        />
      ) : (
        <div className="bg-teal-500 w-[60rem] rounded-md p-5 shadow-md text-5xl text-center">
          <h1>Quiz completed!</h1>
          <p>Your score:{score}</p>

          {/* Display result table here */}
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setScore(0);
            }}
            className="bg-sky-700 rounded-md shadow-md cursor-pointer text-center font-bold w-fit p-2 mt-5"
          >
            Start Again
          </button>
        </div>
      )}
    </div>
  );
};

export default Bab3_Kuis;
