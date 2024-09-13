import { createContext, useContext, useState } from "react";
import React from "react";

const ShowNewTaskContext = createContext();

export const ShowNewTaskProvider = ({ children }) => {
  const [clickedButton, setClickedButton] = useState(false);

  const handleButtonClick = () => {
    setClickedButton(!clickedButton);
  };

  return (
    <ShowNewTaskContext.Provider value={{ clickedButton, handleButtonClick }}>
      {children}
    </ShowNewTaskContext.Provider>
  );
};

export const useGlobalState = () => useContext(ShowNewTaskContext);
