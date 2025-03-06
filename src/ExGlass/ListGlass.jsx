import React from "react";
import { listGlass } from "./dataGlass";
import ItemGlass from "./ItemGlass";

export default function ListGlass({ handleClick }) {
  // Nhận handleClick từ ExGlass
  let renderGlass = () => {
    return listGlass.map((item, index) => {
      return (
        <ItemGlass
          key={index}
          dataGlass={item}
          handleClick={() => handleClick(item)} // Gọi đúng hàm từ ExGlass
        />
      );
    });
  };

  return (
    <div>
      {/* Danh sách kính */}
      <div className="bg-amber-50 border border-2 p-5 rounded-lg mt-5">
        <div className="grid grid-cols-6 gap-4 p-5">{renderGlass()}</div>
      </div>
    </div>
  );
}
