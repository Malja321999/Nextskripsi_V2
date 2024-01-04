import { url } from "inspector";
import React from "react";
import foto from "../asset/FF7.jpg";
const Paraf = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${foto.src})`,
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
        }}
        className="w-screen h-screen bg-scroll flex justify-between items-center"
      >
        <div className="overscroll-contain text-justify text-white w-100 my-10 mx-[20px] p-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi minus
          facere, doloribus illo alias esse sint inventore voluptate, excepturi
          dolorum sit dolor vero tempore ad repudiandae iste dolores, saepe
          dolorem quisquam eum? Ut voluptatibus rem mollitia id nulla tempora
          eligendi veniam eum laboriosam corporis numquam quae hic aliquid,
          eaque fugiat quia maiores officiis rerum repellendus voluptates
          consequuntur? Adipisci reprehenderit deleniti doloribus fugit
          inventore, placeat perspiciatis eligendi molestiae doloremque corrupti
          fugiat at itaque voluptate error cum repellat vel, quam natus? Cum
          possimus excepturi, repellat mollitia placeat autem eos veniam dolorem
          tenetur laudantium est pariatur dicta praesentium! Dignissimos
          voluptatum corporis asperiores reprehenderit.
        </div>
      </div>
    </>
  );
};

export default Paraf;
