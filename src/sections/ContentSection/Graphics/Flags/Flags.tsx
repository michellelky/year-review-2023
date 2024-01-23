import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./Flags.css";

export default function Flags() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const useScrollTransform = (outputRange: number[]) => {
    return useTransform(scrollYProgress, [0, 1], outputRange);
  };

  return (
    <div ref={ref} id="flagWrapper">
      <motion.img
        src="src/assets/france.png"
        style={{
          translateX: useScrollTransform([-160, -40]),
          translateY: useScrollTransform([-90, -20]),
          rotate: useScrollTransform([-28, -16]),
          scale: useScrollTransform([1.3, 0.8]),
        }}
      />
      <motion.img
        src="src/assets/italy.png"
        style={{
          rotate: useScrollTransform([10, 0]),
          scale: useScrollTransform([1.4, 1]),
        }}
      />
      <motion.img
        src="src/assets/turkey.png"
        style={{
          translateX: useScrollTransform([-90, -30]),
          translateY: useScrollTransform([40, 10]),
          rotate: useScrollTransform([-8, -4]),
          scale: useScrollTransform([1, 0.8]),
        }}
      />
      <motion.img
        src="src/assets/spain.png"
        style={{
          translateX: useScrollTransform([0, 10]),
          translateY: useScrollTransform([-120, -50]),
          rotate: useScrollTransform([-8, 4]),
          scale: useScrollTransform([1.1, 0.8]),
        }}
      />
      <motion.img
        src="src/assets/greece.png"
        style={{
          translateX: useScrollTransform([60, 30]),
          translateY: useScrollTransform([-70, -10]),
          rotate: useScrollTransform([10, 20]),
          scale: useScrollTransform([1, 0.8]),
        }}
      />
      <motion.img
        src="src/assets/germany.png"
        style={{
          translateX: useScrollTransform([-120, -30]),
          translateY: useScrollTransform([-180, -60]),
          rotate: useScrollTransform([-16, -8]),
          scale: useScrollTransform([1.1, 0.9]),
        }}
      />
    </div>
  );
}
