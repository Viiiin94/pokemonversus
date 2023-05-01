import React from "react";

interface IScrollButton {
  onClick: () => void;
}

const TopScrollButton = (props: IScrollButton) => {
  return (
    <div className="w-6 h-6 fixed bottom-10 right-10 bg-cyan-900">
      <button onClick={props.onClick} className="text-gray-200">
        top
      </button>
    </div>
  );
};

export default TopScrollButton;
