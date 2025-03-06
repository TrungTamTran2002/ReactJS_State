import ListGlass from "./ListGlass";
import React, { useState } from "react";

export default function ExGlass() {
  let [glass, setGlass] = useState(); // Ban đầu chưa có kính

  return (
    <div className="bg-[url('/img_src/glassesImage/background.jpg')] h-screen w-full bg-cover bg-center bg-gray-900/50">
      <h1 className="text-xl text-center py-5 text-white font-bold bg-black/75">
        TRY GLASSES APP ONLINE
      </h1>

      {/* Phần model hiển thị kính */}
      <div className="relative w-1/2 mx-auto mt-5">
        <img
          src="/img_src/glassesImage/model.jpg"
          alt="model"
          className="w-50% mx-auto"
        />

        {/* Nếu đã chọn kính, hiển thị nó lên model */}
        {glass && (
          <img
            src={glass.url} // Hiển thị kính đã chọn
            alt={glass.name}
            className="absolute top-[25%] left-[50%] transform -translate-x-1/2 w-[250px] opacity-80"
          />
        )}
      </div>

      {/* Danh sách kính */}
      <ListGlass handleClick={setGlass} />
    </div>
  );
}
