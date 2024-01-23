"use client";
import Link from "next/link";
import React, { useState } from "react";
import ScoreKuis from "../ScoreKuis";
import QuizCard from "../QuizCard";
import { useSession } from "next-auth/react";
import questions from "../Questions";
import { useAppContext } from "@/app/context/AppWrapper";

const Quiz = () => {
  const { data: session, status }: { data: any; status: string } = useSession();
  const {
    currentQuestion,
    setCurrentQuestion,
    points,
    setPoints,
    Attempts,
    SetAttempts,
    index,
    Pass,
    SetPass,
  } = useAppContext();

  function UbahcurrentQuestionsNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function UbahcurrentQuestionsPrev() {
    setCurrentQuestion(currentQuestion - 1);
  }

  function UbahAttempts() {
    SetAttempts(Attempts + 1);
  }

  function ResetQuiz() {
    setCurrentQuestion(0);
    setUserAnswers(Array(TotalQuestion).fill(""));
    setPoints(0);
    UbahAttempts;
  }
  const TotalQuestion = questions.length;

  const [userAnswers, setUserAnswers] = useState(Array(TotalQuestion).fill(""));

  const correct = points / ScoreKuis;
  const incorrect = TotalQuestion - correct;

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

  if (points >= 70 && currentQuestion < TotalQuestion) {
    SetPass(!Pass);
  }

  return (
    <div className="flex justify-center items-center h-screen bg-[#111827]">
      <div className="bg-teal-500 w-[60rem] h-fit rounded-md p-5 shadow-md text-5xl flex flex-col justify-center items-center">
        {currentQuestion < TotalQuestion ? (
          <>
            <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-white  text-center p-5 w-full">
              Soal {index + 1}
            </h1>
            <div className="w-full bg-white rounded-md border-4 border-sky-400 p-10 mt-1 text-sky-500">
              <QuizCard
                UbahcurrentQuestionsNext={UbahcurrentQuestionsNext}
                UbahcurrentQuestionsPrev={UbahcurrentQuestionsPrev}
                questions={questions}
                userAnswers={userAnswers}
                handleAnswerChange={handleAnswerChange}
                index={index}
                TotalQuestion={TotalQuestion}
                allQuestionsAnswered={allQuestionsAnswered}
                calculatePoints={calculatePoints}
              />
            </div>
          </>
        ) : (
          <>
            <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white text-white  text-center p-5 w-full">
              Quiz completed!
            </h1>
            <div className="w-full bg-white rounded-md border-4 border-sky-400 p-10 mt-1 text-sky-500">
              {/* Display result table here */}
              <ul>
                <li className="flex justify-between">
                  <span>Username:</span>
                  <span>{session?.user?.fullname}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Points:</span>
                  <span>{points}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Questions:</span>
                  <span>{TotalQuestion}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Correct:</span>
                  <span>{correct}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Incorrect:</span>
                  <span>{incorrect}</span>
                </li>
                <li className="flex justify-between">
                  <span>Total Attempts: </span>
                  <span>{Attempts}</span>
                </li>
                <li className={`${Pass ? "text-emerald-500" : "text-red-500"}`}>
                  {Pass ? (
                    "Lulus"
                  ) : (
                    <div>
                      <h1>Anda Belum Lulus</h1>
                      <div className="w-full flex justify-center items-center">
                        <button
                          onClick={ResetQuiz}
                          className="mx-auto text-black bg-yellow-300 hover:bg-yellow-200 rounded-md w-[20rem] p-5 text-2xl"
                        >
                          Reset
                        </button>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
