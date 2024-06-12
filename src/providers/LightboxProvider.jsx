import { Lightbox } from "../components";
import { LightboxContext } from "../contexts/useLightbox";
import PropTypes from "prop-types";
import { useState } from "react";

export default function LightboxProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  return (
    <LightboxContext.Provider
      value={{
        setImageUrl,
        open() {
          setIsOpen(true);
        },
      }}
    >
      <Lightbox src={imageUrl} isOpen={isOpen} close={() => setIsOpen(false)} />
      {children}
    </LightboxContext.Provider>
  );
}

LightboxProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
