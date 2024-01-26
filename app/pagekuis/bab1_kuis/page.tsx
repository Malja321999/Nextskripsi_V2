"use client";
import { useAppContext } from "@/app/context/AppWrapper";
import { useState } from "react";
import NavQuestions from "../NavQuestions";
import Questions from "../Questions";

const Bab1_1 = () => {
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
  const TotalQuestion = questions.length;
  const [userAnswers, setUserAnswers] = useState(Array(TotalQuestion).fill(""));
  const { currentQuestion, setCurrentQuestion, points, setPoints, index } =
    useAppContext();
  const allQuestionsAnswered = () => {
    return userAnswers.every((answer: any) => answer !== "");
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="ml-[7rem]">
        <Questions
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          points={points}
          setPoints={setPoints}
          index={index}
          questions={questions}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          allQuestionsAnswered={allQuestionsAnswered}
        />
      </div>
    </div>
  );
};

export default Bab1_1;
