// "use client"

// import Lottie from "lottie-react";

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: '95%',
//     }
//   };

//   return (
//     <Lottie {...defaultOptions} />
//   );
// };

// export default AnimationLottie;

// "use client";

// import dynamic from "next/dynamic";

// // Dynamically import Lottie so it only runs on client (avoids SSR crash)
// const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// const AnimationLottie = ({ animationPath, width }) => {
//   const defaultOptions = {
//     loop: true,
//     autoplay: true,
//     animationData: animationPath,
//     style: {
//       width: width || "95%", // allow custom width or fallback
//     },
//   };

//   return <Lottie {...defaultOptions} />;
// };

// export default AnimationLottie;


"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoid SSR mismatch

  return (
    <Lottie
      loop
      autoplay
      animationData={animationPath}
      style={{ width: width || "95%" }}
    />
  );
};

export default AnimationLottie;
