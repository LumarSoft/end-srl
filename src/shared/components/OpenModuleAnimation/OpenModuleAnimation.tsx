"use client";

import { useEffect, useState } from "react";

export const OpenHomeAnimation = () => {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    // Desactivar scroll cuando la animación comienza
    document.body.style.overflow = animationEnded ? "auto" : "";

 
    
    // Limpiar el estilo al desmontar el componente
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [animationEnded]);

  return (
    <div
      className={`${animationEnded ? "hidden" : "scale-out-center"}`}
      onAnimationEnd={() => setAnimationEnded(true)}
    >
      <img src="/svgs/avionBlanco.png" alt="" />
    </div>
  );
};
