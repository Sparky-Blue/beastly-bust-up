// const slider = document.querySelector(".slider");
// const sliderX = value(0, styler(slider).set("x"));

// listen(slider, "mousedown touchstart").start(() => {
//   pointer({ x: sliderX.get() })
//     .pipe(({ x }) => x, clampMovement)
//     .start(sliderX);
// });

// listen(document, "mouseup touchend").start(() => {
//   decay({
//     from: sliderX.get(),
//     velocity: sliderX.getVelocity()
//   })
//     .pipe(clampMovement)
//     .start(sliderX);
// });

import posed from "react-pose";

const config = { draggable: "x" };

const SliderPose = posed.div({ config });

export default SliderPose;
