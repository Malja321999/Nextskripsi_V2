import Image from "next/image";
import React from "react";
import LOGOZ from "../../asset/logoz.png";

const logoz = () => {
  return (
    <div>
      <Image src={LOGOZ} alt="logoz"></Image>
    </div>
  );
};

export default logoz;
