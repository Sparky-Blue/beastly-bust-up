import posed from "react-pose";
import { tween, easing } from "popmotion";

const config = {
  start: { scaleY: 1, opacity: 1 },
  inHand: {
    scaleY: 0,
    opacity: 0,
    transition: props =>
      tween({
        ...props,
        duration: 1000,
        ease: props.key === "opacity" ? easing.linear : easing.anticipate
      })
  }
};

const CardPose = posed.div(config);

export default CardPose;
