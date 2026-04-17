import "./Button.css";
export const Button = ({ icon, name, Buttonfunction }) => {
  return (
    <>
      <div className="Buttoncls">
        <button onClick={Buttonfunction}>
          {icon}
          {name}
        </button>
      </div>
    </>
  );
};
