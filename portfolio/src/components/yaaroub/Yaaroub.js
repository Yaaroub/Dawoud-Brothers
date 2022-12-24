import { useState } from "react";
import YaaroubsBild from "./AvatarMaker.png";
import "./Yaaroub.css";
export default function Yaaroub() {
  const [data, setData] = useState(false);

  const clickhandler = () => {
    setData(!data);
  };
  return (
    <div className="yaaroub">
      <img onClick={clickhandler} src={YaaroubsBild} alt="Bild" />
      {data ? (
        <>
          {" "}
          <h1>Yaaroub Al Haj Dawoud</h1>
          <h2>WEB DEVELOPER</h2>
          <h2>26 Jahre alt</h2>
        </>
      ) : null}
    </div>
  );
}
