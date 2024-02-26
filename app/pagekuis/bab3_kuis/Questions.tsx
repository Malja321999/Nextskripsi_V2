"use client";
import React, { useState } from "react";
import ScoreKuis from "../ScoreKuis";
import QuizCard from "../QuizCard";
import ResultQuiz from "./ResultQuiz";
import NavQuestions from "../NavQuestions";
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../lib/firebase/init";
import { useSession } from "next-auth/react";

const Questions = () => {
  const questions = [
    {
      question: "Hasil dari -6 x (-5) x 11 x 8 =....",
      options: ["3984", "-460", "39", "2640"],
      correctAnswer: "2640",
    },
    {
      question: "Hasil dari 180 : (-60 : 15) =....",
      options: ["-45", "45", "60", "5"],
      correctAnswer: "-45",
    },
    {
      question:
        "Diketahui Pembagian Bilangan bulat berikut.p= -48 : 4; q= -72 : (-9); r= 54 : (-6). urutan hasil dari yang terkecil adalah...",
      options: ["p,q,r", "p,r,q", "r,q,p", "r,p,q"],
      correctAnswer: "p,r,q",
    },
    {
      question:
        "diketahui nilai p = 240, q = -4, r = -60 dan s = 3. Hasil dari (p : q) : (r : s) =…",
      options: ["-3", "-2", "2", "3"],
      correctAnswer: "2",
    },
    {
      question:
        "Untuk membantu korban bencana alam, 54 murid sekolah dasar mengumpulkan uang. Setiap orang menyumbang 1.250 rupiah. Berapa uang yang terkumpul seluruhnya?",
      options: ["Rp. 67.400", "Rp. 67.500", "Rp. 67.600", "Rp. 67.700"],
      correctAnswer: "Rp. 67.500",
    },
    {
      question: "Nilai dari (-2)x(-3)x(-4)x(-5)=…",
      options: ["-14", "-120", "14", "120"],
      correctAnswer: "120",
    },
    {
      question:
        "Di sebuah gudang beras terdapat 550 karung beras. Setiap karung beratnya 25 kg. Berapa kg beras yang ada di gudang itu?",
      options: ["13.750 kg", "13.760 kg", "13.770 kg", "13.780 kg"],
      correctAnswer: "13.750 kg",
    },
    {
      question: "Hasil dari (-5)x(-4)x2=…",
      options: ["-40", "30", "20", "40"],
      correctAnswer: "40",
    },
    {
      question:
        "Untuk membantu korban bencana alam, panitia akan membagikan 3.375 kg beras kepada 45 kepala keluarga. Berapa kilogram-kah setiap kepala keluarga menerima beras?",
      options: ["74 kg", "75 kg", "76 kg", "77 kg"],
      correctAnswer: "75 kg",
    },
    {
      question: "Hasil dari (-75) : (-25) =…",
      options: ["3", "4", "-3", "-4"],
      correctAnswer: "3",
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

  const calculatePoints = () => {
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
    const ref = doc(firestore, "DataUsers", `${userEmail}`);
    updateDoc(ref, {
      bab3_kuis: totalPoints,
    })
      .then((response) => {
        console.log("success update bab3_kuis", response);
        alert("success update bab3_kuis");
      })
      .catch((error) => {
        console.log("failed update bab3_kuis", error);
        alert("failed update bab3_kuis");
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
