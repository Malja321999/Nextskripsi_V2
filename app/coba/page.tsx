"use client";
import React, { useState } from "react";

const Quiz: React.FC = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const handleDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    event.dataTransfer.setData("text/plain", index.toString());
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const handleDrop = (
    event: React.DragEvent<HTMLDivElement>,
    targetIndex: number
  ) => {
    event.preventDefault();
    const draggedIndex = parseInt(event.dataTransfer.getData("text/plain"));
    const newNumbers = [...numbers];
    const draggedNumber = newNumbers[draggedIndex];
    newNumbers.splice(draggedIndex, 1);
    newNumbers.splice(targetIndex, 0, draggedNumber);
    setNumbers(newNumbers);
  };

  return (
    <div className="h-screen w-screen justify-center items-center">
      <div>Center</div>
    </div>
  );
};

export default Quiz;e
