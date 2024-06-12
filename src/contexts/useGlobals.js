import { createContext, useContext } from "react";

export const GlobalsContext = createContext();

export default function useGlobals() {
  const context = useContext(GlobalsContext);

  if (!context) {
    throw new Error("useGlobals must be used within a GlobalsProvider");
  }

  return context;
}
