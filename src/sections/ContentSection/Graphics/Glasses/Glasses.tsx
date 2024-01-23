import { Variants, motion } from "framer-motion";
import "./Glasses.css";

const emojiVariants: Variants = {
  offscreen: {
    x: 0,
    y: 0,
    rotate: 0,
  },
  onscreen: {
    x: 40,
    y: -80,
    rotate: 30,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.6,
      delay: 0.8,
    },
  },
};

export default function Glasses() {
  return (
    <div id="faceWrapper">
      <h3 className="emojiText">🙂</h3>
      <motion.div
        id="shades"
        className="emojiText"
        variants={emojiVariants}
        initial="offscreen"
        whileInView="onscreen"
      >
        <h3>🕶️</h3>
      </motion.div>
    </div>
  );
}
