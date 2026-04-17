import "./Input.css";
export const InputField = ({ input }) => {
  return (
    <>
      <div className="inputscore">
        <input onChange={input} type="number" placeholder={`TargetScore `} />
      </div>
    </>
  );
};
