"use client";
import React, { useState } from "react";
import ScoreKuis from "../ScoreKuis";
import QuizCard from "../QuizCard";
import questions from "../Questions";
import { useAppContext } from "@/app/context/AppWrapper";
import ResultQuiz from "../resultquiz/page";

const Quiz = () => {
  const { currentQuestion, setCurrentQuestion, points, setPoints, index } =
    useAppContext();

  function UbahcurrentQuestionsNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function UbahcurrentQuestionsPrev() {
    setCurrentQuestion(currentQuestion - 1);
  }

  const TotalQuestion = questions.length;

  const [userAnswers, setUserAnswers] = useState(Array(TotalQuestion).fill(""));

  const correct = points / ScoreKuis;
  const incorrect = TotalQuestion - correct;
  const [Pass, SetPass] = useState(false);

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

  if (points >= 70 && Pass === false) {
    SetPass(!Pass);
  }
  console.log(currentQuestion);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {currentQuestion < TotalQuestion ? (
        <div className="bg-teal-500 w-[60rem] h-fit  mx-20 rounded-md p-5 shadow-md text-5xl flex flex-col justify-center items-center">
          <h1 className="font-bold bg-sky-700 rounded-md border-4 border-white  text-center p-5 w-full">
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
        </div>
      ) : (
        <ResultQuiz
          Pass={Pass}
          TotalQuestion={TotalQuestion}
          correct={correct}
          incorrect={incorrect}
        />
      )}
    </div>
  );
};

export default Quiz;
