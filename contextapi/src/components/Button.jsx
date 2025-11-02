import React from "react";
import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button = () => {
  const [theme,setTheme] = useContext(ThemeDataContext)
  
  const changeTheme = () => {
    setTheme("dark")
  };

  return (
    <div>
      <button className="bg-black text-white" onClick={changeTheme}>
        Change theme {theme}
      </button>
    </div>
  );
};

export default Button;
