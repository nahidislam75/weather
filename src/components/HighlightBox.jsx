import React from "react";

const HighlightBox = ({ title, value, Icon1 }) => {
  return (
    <div className="bg-gray-700 text-white p-4 rounded-md w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div>
        <div className="text-lg">{title}</div>
        <div className="flex items-center justify-between mt-2">
          <Icon1 className="text-3xl" />
          <p className="text-3xl">{value}</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightBox;
