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
            <li>GitHub</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SASS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Jest</li>
            <li>Responsive Webdesign</li>
            <li>Data Bank</li>
          </ul>
        </>
      ) : null}
    </div>
  );
}
