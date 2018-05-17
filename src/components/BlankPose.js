import posed from "react-pose";
import { tween, easing } from "popmotion";

const config = {
  exit: { opacity: 1 },
  enter: {
    opacity: 1
  }
};

const BlankPose = posed.div(config);

export default BlankPose;
