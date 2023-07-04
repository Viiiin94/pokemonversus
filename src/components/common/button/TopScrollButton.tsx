import { VscFoldUp } from "react-icons/vsc";

interface IScrollButton {
  onClick: () => void;
}

const TopScrollButton: React.FC<IScrollButton> = ({
  onClick,
}: IScrollButton) => {
  return (
    <div
      onClick={onClick}
      className="w-6 h-6 fixed bottom-10 right-10 flex justify-center items-center cursor-pointer"
    >
      <VscFoldUp size={25} className=" " />
    </div>
  );
};

export default TopScrollButton;
