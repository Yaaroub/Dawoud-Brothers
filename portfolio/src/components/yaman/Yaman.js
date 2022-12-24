import yamansBild from "./AvatarMaker (1).png";
import { useState } from "react";

export default function Yaman() {
  const [info, setInfo] = useState(false);

  const clickinfo = () => {
    setInfo(!info);
  };

  return (
    <div>
      <img onClick={clickinfo} src={yamansBild} alt="Bild" />
      {info ? (
        <>
          <h1>Yaman Al Haj Dawoud</h1>
          <h2>WEB DEVELOPER</h2>
          <ul>
            <li>
              <h4>GitHub</h4>
            </li>
            <li>
              <h4>HTML5</h4>
            </li>
            <li>
              <h4>CSS3</h4>
            </li>
            <li>
              <h4>SASS</h4>
            </li>
            <li>
              <h4>JavaScript</h4>
            </li>
            <li>
              <h4>React</h4>
            </li>
            <li>
              <h4>Node JS</h4>
            </li>
            <li>
              <h4>Express JS</h4>
            </li>
            <li>
              <h4>Jest</h4>
            </li>
            <li>
              <h4>Responsive Webdesign</h4>
            </li>
            <li>
              <h4>Data Bank</h4>
            </li>
          </ul>
        </>
      ) : null}
    </div>
  );
}
