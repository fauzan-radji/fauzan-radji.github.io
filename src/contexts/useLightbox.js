import { createContext, useContext } from "react";

export const LightboxContext = createContext();

export default function useLightbox() {
  const context = useContext(LightboxContext);

  if (!context) {
    throw new Error("useLightbox must be used within a LightboxProvider");
  }

  return context;
}
