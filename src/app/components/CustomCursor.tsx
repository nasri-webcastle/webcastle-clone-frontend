"use client";
import { useEffect, useState } from "react";

type CustomCursorProps = {
  text: string;
  visible: boolean;
};

const CustomCursor: React.FC<CustomCursorProps> = ({ text, visible }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className={`fixed z-[9999] pointer-events-none transition-all duration-200 ease-in-out ${
        visible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      }`}
      style={{
        left: position.x - 40,
        top: position.y - 40,
        width: 80,
        height: 80,
        borderRadius: "9999px",
        backgroundColor: "#239b56",
        color: "white",
        fontWeight: "bold",
        fontSize: "13px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        transition: "transform 0.1s ease",
      }}
    >
      {text}
    </div>
  );
};

export default CustomCursor;
