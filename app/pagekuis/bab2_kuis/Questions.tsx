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
      question:
        "Manakah kelompok bilangan yang merupakan bilangan positif dibawah ini?",
      options: [
        "Positif : -12; 7 ; 0 ; -0,6",
        "Positif : -12; 7 ; 0,6 ; 1,2",
        "Positif : -12; -3 ; 7 ; 0",
        "Positif : -12; 7 ; 0 ; 0,6",
      ],
      correctAnswer: "Positif : -12; 7 ; 0 ; 0,6",
    },
    {
      question:
        "Bilangan manakah yang memiliki nilai yang sama dengan 3/5 dibawah ini ?",
      options: ["0,4", "0,7", "0,6", "0.10"],
      correctAnswer: "0,6",
    },
    {
      question:
        "Perbandingan pasangan bilangan +1 ; -3 ; -2 dengan menggunakan tanda pertidaksamaanyang benar adalah...",
      options: ["1 > -3 > -2", "1 > - 2 > -3", "-2 < 1 > - 3", "-3 < -2 > +1"],
      correctAnswer: "1 > - 2 > -3",
    },
    {
      question:
        "Manakah bilangan-bilangan berikut ini yang memiliki nilai mutlak 9 dan 0 berturut-turut?",
      options: ["-9 dan 0", "0 dan 9/10", "9 dan 1/0", "9/0 dan 1/0"],
      correctAnswer: "-9 dan 0",
    },
    {
      question:
        "Manakah di antara bilangan berikut yang merupakan bilangan terkecil?",
      options: ["-1", "-5", "6", "1"],
      correctAnswer: "-5",
    },
    {
      question:
        "Suatu saat suhu di kota Tokyo 6°C dibawah nol, sedangkan suhu di kota banjarmasin 25°C di atas nol, penulisan suhu kedua kota tersebut berturut turut adalah…..",
      options: [
        "-6°C dan -25°C",
        "-6°C dan 25°C",
        "6°C dan -25°C",
        "6°C dan 25°C",
      ],
      correctAnswer: "-6°C dan 25°C",
    },
    {
      question:
        "Perhatikan urutan Bilangan-bilangan bulat berikut. Urutan Bilangan dari terkecil yang benar adalah….",
      options: [
        "4323, 3231, -2892, -41237",
        "-3382, -2313, 2232, 2167",
        "3222, 3322, -2222, 4431",
        "-5423, -3232, 4222, 5555",
      ],
      correctAnswer: "-5423, -3232, 4222, 5555",
    },
    {
      question:
        "Diketahui suhu udara di kota A -11°C. suhu dikota B adalah 15°C. suhu dikota C adalah -24°C. suhu dikota D adalah 23°C. urutan kota dari yang paling dingin adalah…",
      options: ["Kota A-B-D-C", "Kota C-A-B-D", "Kota C-B-D-A", "Kota C-D-B-A"],
      correctAnswer: "Kota C-A-B-D",
    },
    {
      question:
        "Diketahui bahaw A adalah titik 0 km. Titik 3 km sebelah utara A dinyatakan sebagai +3 km. Bagaimana menyatakan titik 5 km di sebelah selatan?",
      options: ["(- 5)", "+5", "5", "3/5"],
      correctAnswer: "(- 5)",
    },
    {
      question:
        "Perhatikan dua buah bilangan berikut: M = 5abcd N = 8cde Jika setiap huruf pada bilangan diatas mewakili sebuah angka, maka diantara pilihan di bawah ini yang benar adalah...",
      options: ["M > N", "M < N", "M = N", "M ≤ N"],
      correctAnswer: "M > N",
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
