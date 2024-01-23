import { useRef } from "react";
import { useInView } from "framer-motion";
import "./Transport.css";
import Airplane from "./Airplane";

export default function Transport() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div id="travelWrapper" ref={ref}>
      <Airplane />
      <div id="busShaker">
        <img
          id="bus"
          src="/src/assets/bus-1F68C.svg"
          style={{ animationPlayState: isInView ? "running" : "paused" }}
        />
      </div>
    </div>
  );
}
