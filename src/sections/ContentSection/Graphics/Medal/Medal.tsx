import { Variants, motion } from "framer-motion";
import "./Medal.css";

const CONFETTI = 40;
const zoomVariants: Variants = {
  offscreen: {
    scale: 0.5,
    opacity: 0,
    translateY: "150%",
  },
  onscreen: {
    scale: 1.1,
    opacity: 1,
    rotate: 10,
    translateY: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};

export default function Medal() {
  const createConfetti = () => {
    const arr = [];

    for (let i = 0; i < CONFETTI; i++) {
      const colors = ["bluey", "gum", "star", "meadow"];
      const size = Math.random() * 24;
      const dur = Math.random() + 3;
      const delay = Math.random();

      arr.push(
        <div
          key={i}
          className="confetti"
          style={{
            width: size * 0.5,
            height: size,
            backgroundColor: `var(--color-${
              colors[Math.floor(Math.random() * colors.length)]
            })`,
            left: `${Math.random() * 100}%`,
            transform: `rotate(${Math.random() * 360}deg) skew(${delay}deg)`,
            animation: `rain infinite ${dur}s ease-in-out ${delay}s`,
          }}
        />,
      );
    }
    return arr;
  };

  return (
    <div id="partyWrapper">
      <motion.img
        src="images/sports-medal-1F3C5.svg"
        variants={zoomVariants}
        initial="offscreen"
        whileInView="onscreen"
      />
      {createConfetti()}
    </div>
  );
}
