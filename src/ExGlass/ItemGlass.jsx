import React from "react";

export default function ItemGlass({ dataGlass, handleClick }) {
  return (
    <div>
      <button
        className="border-2 border-gray-300 p-2 cursor-pointer"
        onClick={handleClick} // Gọi hàm khi click vào button
      >
        <img src={dataGlass.url} alt={dataGlass.name} />
      </button>
    </div>
  );
}
