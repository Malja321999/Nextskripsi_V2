"use client";
import React, { useState } from "react";
import ScoreKuis from "./ScoreKuis";
import QuizCard from "./QuizCard";
import ResultQuiz from "./resultquiz/page";
import NavQuestions from "./NavQuestions";

const Questions = ({
  questions,
  userAnswers,
  setUserAnswers,
  currentQuestion,
  setCurrentQuestion,
  points,
  setPoints,
  index,
  allQuestionsAnswered,
}: any) => {
  function UbahcurrentQuestionsNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function UbahcurrentQuestionsPrev() {
    setCurrentQuestion(currentQuestion - 1);
  }

  const TotalQuestion = questions.length;

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
    setCurrentQuestion(TotalQuestion);
  };

  if (points >= 70 && Pass === false) {
    SetPass(!Pass);
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      {currentQuestion < TotalQuestion ? (
        <div>
          {!allQuestionsAnswered() && index === TotalQuestion - 1 ? (
            <div className="mb-2 text-5xl w-full bg-rose-500 rounded-md shadow-md cursor-pointer text-center font-bold p-2 flex justify-center items-center text-white">
              Belum Semua Soal Terjawab
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex justify-between items-center w-[82rem]">
            <div className="bg-teal-500 w-[60rem] h-fit  rounded-md p-5 shadow-md text-5xl flex flex-col justify-center items-center">
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
            {index < TotalQuestion && (
              <div>
                <NavQuestions
                  questions={questions}
                  userAnswers={userAnswers}
                  setUserAnswers={setUserAnswers}
                  currentQuestion={currentQuestion}
                  setCurrentQuestion={setCurrentQuestion}
                  allQuestionsAnswered={allQuestionsAnswered}
                  calculatePoints={() => calculatePoints()}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div>
          <ResultQuiz
            Pass={Pass}
            TotalQuestion={TotalQuestion}
            correct={correct}
            incorrect={incorrect}
          />
        </div>
      )}
    </div>
  );
};

export default Questions;
