import { FaSun } from "react-icons/fa";

type Props = {};

const DarkAndLightBtn = (props: Props) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-sm">LIGHT</p>
      <FaSun className="text-2xl" />
    </div>
  );
};

export default DarkAndLightBtn;
