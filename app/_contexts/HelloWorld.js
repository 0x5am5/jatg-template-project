import { createContext } from "react";

export const HelloWorldContext = createContext();

const HelloWorld = ({ chldren }) => {
  const [helloWorld, setHelloWorld] = useState("Hello, World!");

  return (
    <HelloWorldContext.Provider value={{ helloWorld, setHelloWorld }}>
      {children}
    </HelloWorldContext.Provider>
  );
};

export default HelloWorld;
