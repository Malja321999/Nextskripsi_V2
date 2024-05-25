"use client";
import React, { useState } from "react";
import ScoreKuis from "../ScoreKuis";
import QuizCard from "../QuizCard";
import ResultQuiz from "./ResultQuiz";
import NavQuestions from "../NavQuestions";
import { collection, doc, getDocs, query, updateDoc, where } from "firebase/firestore";
import { firestore } from "../../lib/firebase/init";
import { useSession } from "next-auth/react";
import { ref } from "firebase/database";

const Questions = () => {
  const questions = [
    {
      question: "Hasil dari 72 +(-28) adalah…",
      options: ["46", "44", "-44", "-46"],
      correctAnswer: "44",
    },
    {
      question: "Hasil dari -31 + (-65) adalah…",
      options: ["-94", "-34", "-96", "96"],
      correctAnswer: "-96",
    },
    {
      question: "Hasil 63 + (-178) + 89=…",
      options: ["-26", "-24", "24", "26"],
      correctAnswer: "-26",
    },
    {
      question: "Jika -11 + (-8) - (-18) = n, nilai n =....",
      options: ["37", "1", "-1", "-37"],
      correctAnswer: "-1",
    },
    {
      question:
        "Diketahui suhu di kota X adalah -27°C dan suhu dikota Y 12°C. jika dikota X turun 5°C dan di kota Y naik 2°C. berapa selisih kedua di kedua kota tersebut?",
      options: ["46°C", "44°C", "42°C", "38°C"],
      correctAnswer: "44°C",
    },
    {
      question: "Diketahui -71 + p + (-96) = 25, nilai p adalah…",
      options: ["-142", "-142", "182", "192"],
      correctAnswer: "192",
    },
    {
      question:
        "Jika suhu awal 6°C kemudian turun 12°C, maka suhu akhir angka menunjukan....",
      options: ["18°C", "6°C", "-18°C", "-6°C"],
      correctAnswer: "-6°C",
    },
    {
      question:
        "Diketahui m = -184-(-62) + (-94) dan n = 73 + (-82) - (-126), nilai m - n adalah....",
      options: ["-343", "-333", "-99", "99"],
      correctAnswer: "-333",
    },
    {
      question:
        "Diketahui a, b, c. anggota Bilangan bulat dengan a<b<c. pernyataan yang benar adalah....",
      options: [
        "a - b > b - c",
        "b - a< - c + a",
        "-b - c < a - b",
        "-a + b < b -",
      ],
      correctAnswer: "-b - c < a - b",
    },
    {
      question:
        "Pada pagi hari, suhu di puncak suatu gunung -1°C, kemudian pada malam hari suhunya turun 6°C jadi suhu pada malam hari adalah....",
      options: ["-7°C", "-5°C", "5°C", "7"],
      correctAnswer: "-7°C",
    },

    // Add more questions here
  ];

  const TotalQuestion = questions.length;
  const [userAnswers, setUserAnswers] = useState(Array(TotalQuestion).fill(""));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [points, setPoints] = useState(0);
  const index = currentQuestion;
  const allQuestionsAnswered = () => {
    return userAnswers.every((answer: any) => answer !== "");
  };

  function UbahcurrentQuestionsNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  function UbahcurrentQuestionsPrev() {
    setCurrentQuestion(currentQuestion - 1);
  }
  console.log(points);
  const correct = points / ScoreKuis;
  console.log(correct);
  const incorrect = TotalQuestion - correct;
  const [Pass, SetPass] = useState(false);
  const { data: session }: { data: any } = useSession();
  const userEmail = session?.user?.email;

  const handleAnswerChange = ({ index, selectedOption }: any) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const calculatePoints = async () => {
    let totalPoints = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        totalPoints += 10;
      } else if (userAnswers[i] !== questions[i].correctAnswer) {
        console.log(
          "wrong answer",
          `nomor:${i + 1}`,
          userAnswers[i],
          questions[i].correctAnswer
        );
      }
    }
    const db = query(
      collection(firestore, "users"),
      where("email", "==", `${userEmail}`)
    );
    const querySnapshot = await getDocs(db);
    const docRef = querySnapshot.docs[0].ref;
    updateDoc(docRef, {
      bab2_kuis: totalPoints,
    })
      .then((response) => {
        console.log("success update bab2_kuis", response);
        alert("success update bab2_kuis");
      })
      .catch((error) => {
        console.log("failed update bab2_kuis", error);
        alert("failed update bab2_kuis");
      });
    setPoints(totalPoints);
    setCurrentQuestion(TotalQuestion);
  };

  if (points >= 70 && Pass === false) {
    SetPass(!Pass);
  }

  console.log(points);

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
            points={points}
          />
        </div>
      )}
    </div>
  );
};

export default Questions;
