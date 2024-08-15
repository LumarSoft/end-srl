"use client";

import { useEffect, useState } from "react";

export const OpenHomeAnimation = () => {
  const [animationEnded, setAnimationEnded] = useState(false);

  useEffect(() => {
    if (animationEnded) {
      document.body.style.overflowY = "auto";
    }
  }, [animationEnded]);

  return (
    <div
      className={`${animationEnded ? "hidden" : "scale-out-center"}`}
      onAnimationEnd={() => setAnimationEnded(!animationEnded)}
    >
      <img src="/svgs/avionBlanco.png" alt="" />
    </div>
  );
};
