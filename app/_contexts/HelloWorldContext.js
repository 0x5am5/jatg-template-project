"use client";
import { createContext, useContext, useState } from "react";

const HelloWorldContext = createContext();

export const HelloWorldProvider = ({ children }) => {
  const [helloWorld, setHelloWorld] = useState("Hello, World!");

  return (
    <HelloWorldContext.Provider value={{ helloWorld, setHelloWorld }}>
      {children}
    </HelloWorldContext.Provider>
  );
};

export const useHelloWorld = () => useContext(HelloWorldContext);
