import { useState } from "react";
import "./style.css";

export default function App() {
  const [position, setPosition] = useState("");
  const clickhandle = (e) => {
    const { top, width, height } = e.target.getBoundingClientRect();
    const left = e.target.offsetLeft
    setPosition({
      left,
      top,
      width,
      height
    });
  };

 
  return (
    <>
      <nav className="menu">
        {Object.values(position).length > 0 && (
          <div
            className="divider"
            style={{
              "--left": position.left + "px",
              "--top": position.top + "px",
              "--width": position.width + "px",
              "--height": position.height + "px"
            }}
          />
        )}
        {Object.values(position).length > 0 && (
          <div
            className="divider1"
            style={{
              "--left": position.left + "px",
              "--top": position.top + "px",
              "--width": position.width + "px",
              "--height": position.height + "px"
            }}
          />
        )}
        <button onClick={clickhandle} >Ana sayfa </button>
        <button onClick={clickhandle} >İletişim</button>
        <button onClick={clickhandle} >Dersler</button>
        <button onClick={clickhandle} >Makaleler</button>
      </nav>
    </>
  );
}
