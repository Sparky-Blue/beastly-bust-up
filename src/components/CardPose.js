import posed from "react-pose";
import { tween, easing } from "popmotion";

const config = {
  exit: {
    scaleY: 0,
    opacity: 0,
    transition: props =>
      tween({
        ...props,
        duration: 1000,
        ease: props.key === "opacity" ? easing.anticipate : easing.linear
      })
  },
  enter: {
    scaleY: 1,
    opacity: 1,
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
