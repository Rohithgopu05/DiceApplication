import {} from "react-icons/fa6";
import "./Winner.css";
import { FaStar, FaTrophy } from "react-icons/fa";
export const Winnerpopup = ({ Winner, name, score }) => {
  return (
    <>
      <div className="WinMain">
        <div className="winpop">
          <h1>{` ${name} won the game `}</h1>
          <h1>
            <FaTrophy />
          </h1>
          <h1>{`  Score : ${score}`}</h1>
          <button onClick={Winner}>
            {" "}
            <FaStar />
            <FaStar />
            Congratulations <FaStar />
            <FaStar />
          </button>
        </div>
      </div>
    </>
  );
};
