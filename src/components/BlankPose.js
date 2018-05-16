import posed from "react-pose";
import { tween, easing } from "popmotion";

const config = {
  exit: { opacity: 0 },
  enter: {
    opacity: 0
  }
};

const BlankPose = posed.div(config);

export default BlankPose;
