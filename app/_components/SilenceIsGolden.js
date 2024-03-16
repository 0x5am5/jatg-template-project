"use client";

import { useHelloWorld } from "../_contexts/HelloWorldContext";

const SilenceIsGolden = ({ children }) => {
  const { helloWorld } = useHelloWorld();
  console.log("Silence is golden:", helloWorld);
  return <div>{children}</div>;
};

export default SilenceIsGolden;
