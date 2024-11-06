import { useNavigate } from "react-router-dom";
import errorimg from "../assets/errorimage.png";

const Error = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/");
  };
  return (
    <div className="flex gap-3 p-12 justify-center ">
      <div>
        <img className="h-[500px] w-[500px]" src={errorimg} alt="" />
      </div>
      <div className="flex flex-col items-center gap-3 justify-center">
        <p className="text-6xl text-center font-bold">
          Opp&apos;s Sorry Nothing Is Here
        </p>
        <p className="text-2xl text-gray-600 text-center">
          Look Like this Page is missing. If you need Any Help Please Go to Home
          Page
        </p>
        <button onClick={clickHandler} className="btn btn-outline">
          Home
        </button>
      </div>
    </div>
  );
};

export default Error;
