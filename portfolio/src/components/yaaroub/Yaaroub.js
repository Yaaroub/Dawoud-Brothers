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
          <ul>
            <li>HTML 5</li>
            <li>CSS 3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node js</li>
            <li>Express js</li>
            <li>Responsive Webdesign</li>
            <li>JEST</li>
          </ul>
        </>
      ) : null}
    </div>
  );
}
