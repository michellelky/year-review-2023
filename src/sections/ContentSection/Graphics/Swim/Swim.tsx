import { useRef } from "react";
import {
  MotionValue,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import "./Swim.css";

function Wave({ top }: { top: MotionValue<number> }) {
  const ocean = "#a7d7e1";

  return (
    <motion.div id="waveBlock" style={{ top }} transition={{ delay: 0.4 }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 3200">
        <path
          fill={ocean}
          fillOpacity="1"
          d="M0,128L40,138.7C80,149,160,171,240,181.3C320,192,400,192,480,170.7C560,149,640,107,720,101.3C800,96,880,128,960,138.7C1040,149,1120,139,1200,138.7C1280,139,1360,149,1400,154.7L1440,160L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
        <rect width="1440" height="3200" y="300" fill={ocean}></rect>
      </svg>
    </motion.div>
  );
}

export default function Swim() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const translateY = useTransform(scrollYProgress, [0, 1], [500, 100]);
  const top = useSpring(translateY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const useScrollTransform = (outputRange: number[]) => {
    const transform = useTransform(scrollYProgress, [0, 1], outputRange);
    return useSpring(transform, {
      stiffness: 90,
      damping: 40,
    });
  };

  return (
    <div id="swimWrapper" ref={ref}>
      <motion.img
        src="/images/ring-buoy-1F6DF.svg"
        id="buoy"
        style={{
          translateX: useScrollTransform([180, -100]),
          translateY: useScrollTransform([460, -200]),
          rotate: useScrollTransform([360, 0]),
        }}
      />
      <Wave top={top} />
    </div>
  );
}
