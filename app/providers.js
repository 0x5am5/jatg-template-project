import { HelloWorldProvider } from "./_contexts/HelloWorldContext";

const Providers = ({ children }) => {
  return <HelloWorldProvider>{children}</HelloWorldProvider>;
};

export default Providers;
