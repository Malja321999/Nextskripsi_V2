"use client";
import React, { useState } from "react";
import ScoreKuis_UjianAkhir from "../ScoreKuis_UjianAkhir";
import QuizCard from "../QuizCard";
import ResultQuiz from "./ResultQuiz";
import NavQuestions from "../NavQuestions";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../../lib/firebase/init";
import { useSession } from "next-auth/react";
import TimerUjianAkhir from "../TimerUjianAkhir";

const Questions = () => {
  const questions = [
    {
      question:
        "Diketahui bahwa A adalah titik 0 km. Titik ”20 km sebelah utara A” dinyatakan sebagai +20 km. Bagaimana menyatakan titik ” 80 km di sebelah selatan A”?...",
      options: ["-80 km", "-40 km", "+40 km", "+80 km"],
      correctAnswer: "+80 km",
    },
    {
      question:
        "Apabila “rugi 400 rupiah” dinyatakan sebagai -400 rupiah, menyatakan apa +600 rupiah?...",
      options: [
        "Untung 600 rupiah",
        "Untung 300 rupiah",
        "Rugi 300 rupiah",
        "Tidak untung dan rugi 1000 rupiah",
      ],
      correctAnswer: "Untung 600 rupiah",
    },
    {
      question:
        "Diberikan bilangan-bilangan. -42 ; -12 ; -8 ; 0 ; 6 ; 28 ; 25 ; Mana yang merupakan bilangan positif? Mana yang negatif?...",
      options: [
        "Positif : 42 ; 6 ; 0 ; -12. Negatif : -8 ; 25 ; -42.",
        "Positif : -8 ; 6 ; 0 ; -12. Negatif : 28 ; 25 ; -42.",
        "Positif : 6 ; 28 ; 25. Negatif : -24 ; -12 ; -8.",
        "Positif : 6 ; 28 ; -8. Negatif : -42; + ; -12 ; 25.",
      ],
      correctAnswer: "Positif : 6 ; 28 ; 25. Negatif : -24 ; -12 ; -8.",
    },
    {
      question:
        "Papan pengumuman lomba lari cepat 100 m menunjukkan bahwa kecepatan angin buritan adalah 2 m per detik dinyatakan sebagai “2 m /detik. ” Apa artinya 6 m /detik”?...",
      options: [
        "Ada angin buritan dengan kecepatan 6 m/detik",
        "Ada angin haluan dengan kecepatan 12 m/detik",
        "Ada angain buirtan dengan kecepatan 12 m/detik",
        "Ada angin haluan dengan kecepatan 6 m/detik",
      ],
      correctAnswer: "Ada angin buritan dengan kecepatan 6 m/detik",
    },
    {
      question:
        "Bagaimana menyatakan ”16°C lebih rendah dibandingkan suhu tertinggi kemarin” jika berdasarkan suhu tertinggi hari ini,  ”12°C lebih tinggi dibandingkan suhu tertinggi kemarin” dinyatakan sebagai 12°C maka ...",
      options: ["-16°C", "-12°C", "-8°C", "10°C"],
      correctAnswer: "-12°C",
    },
    {
      question: "Berada di titik manakah bilngan bulat -3?...",
      g: true,
      options: ["A", "B", "C", "D"],
      correctAnswer: "A",
    },
    {
      question:
        "Berdasarkan garis bilangan pada nomor 6. Bilangan bulat apa yang bersesuian dengan titik D?...",
      options: ["-3", "-2", "-1", "1"],
      correctAnswer: "-3",
    },
    {
      question:
        "Di sajikan  bilangan bulat 6 dan -8. Manah peryataan pertidaksamaan dibawah ini yang benar berdasarkan perbandingan dua bilangan bulat tersebut...",
      options: ["6 = -8", "6 > -8", "6 < -8", "-8 > 6"],
      correctAnswer: "6 > -8",
    },
    {
      question:
        "Ketika kita sajikan 16 dan -24 pada garis bilangan, bilangan manakah yang terletak lebih jauh dari titik asal?...",
      options: ["8", "12", "16", "24"],
      correctAnswer: "24",
    },
    {
      question:
        "Berturut-turut, tentukan nilai-nilai mutlak dari -14 dan 10...",
      options: ["14 dan 10", "1 dan 2", "7 dan -5", "7 dan 5"],
      correctAnswer: "14 dan 10",
    },
    {
      question: "Jika m = -6 dan n = -8 maka nilai dari m - n adalah...",
      options: ["8", "6", "4", "2"],
      correctAnswer: "2",
    },
    {
      question:
        "Pada malam hari, suhu di puncak suatu gunung -10°C, kemudian pada siang hari suhunya naik 24°C jadi suhu pada siang hari adalah...",
      options: ["12", "14", "20", "34"],
      correctAnswer: "14",
    },
    {
      question: "Diketahui -24 + y + (-52) = 60, nilai y adalah...",
      options: ["46", "136", "172", "200"],
      correctAnswer: "136",
    },
    {
      question:
        "Seorang pedagang mempunyai 107 ekor kambing Kemudian ia membeli lagi 141 ekor kambing Seminggu kemudian 115 ekor kambing laku terjual Berapa banyak kambing yang belum terjual...",
      options: ["103", "116", "124", "133"],
      correctAnswer: "133",
    },
    {
      question:
        "Suhu di suatu ruangan pendingin adalah -10 derajat celcius. Suhu di dalam ruangan 48 derajat celcius. Selisih suhu ruangan pendingin dengan suhu ruangan adalah...",
      options: ["58°C", "57°C", "55°C", "54°C"],
      correctAnswer: "58°C",
    },
    {
      question:
        "Untuk membantu korban bencana alam, 40 murid sekolah dasar mengumpulkan uang. Setiap orang menyumbang 25.000 rupiah. uang yang terkumpul...",
      options: [
        "1.000.000 rupiah",
        "750.000 rupiah",
        "500.000 rupiah",
        "125.000 rupiah",
      ],
      correctAnswer: "1.000.000 rupiah",
    },
    {
      question:
        "Diketahui nilai p = 48, q = -8, r = -12 dan s = 6. Hasil dari (p x q) - (r x s) adalah ...",
      options: ["-387", "-78", "67", "456"],
      correctAnswer: "456",
    },
    {
      question:
        "Pada saat hari raya idul adha, panitia akan membagikan 1.350 kg daging kepada 105 orang. Berapa kilogram-kah setiap orang menerima daging?...",
      options: ["-6", "9", "10", "42"],
      correctAnswer: "9",
    },
    {
      question: "Jika p = 5.200 : 10 dan q = 1.300 : 25 hasil p : q adalah...",
      options: ["-19", "-18", "10", "20"],
      correctAnswer: "10",
    },
    {
      question:
        "Seorang siswa mengerjakan 28 soal dari 50 soal ujian. 4 jawabannya ternyata salah dan sisanya benar. Jika jawaban benar bernilai 2, jawaban salah bernilai -1 dan tidak menjawab bernilai 0. Maka nilai ujian siswa tersebut adalah...",
      options: ["57", "49", "44", "-1"],
      correctAnswer: "44",
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
  const correct = points / ScoreKuis_UjianAkhir;
  console.log(correct);
  const incorrect = TotalQuestion - correct;
  const [Pass, SetPass] = useState(false);
  const { data: session }: { data: any } = useSession();
  const userEmail = session?.user?.email;

  console.log(ScoreKuis_UjianAkhir);

  const handleAnswerChange = ({ index, selectedOption }: any) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = selectedOption;
    setUserAnswers(newAnswers);
  };

  const calculatePoints = async () => {
    let totalPoints = 0;
    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        totalPoints += ScoreKuis_UjianAkhir;
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
      ujian_akhir: totalPoints,
    })
      .then((response) => {
        console.log("success update ujian_akhir", response);
        alert("success update ujian_akhir");
      })
      .catch((error) => {
        console.log("failed update ujian_akhir", error);
        alert("failed update ujian_akhir");
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
                  TimerUjianAkhir={TimerUjianAkhir}
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
