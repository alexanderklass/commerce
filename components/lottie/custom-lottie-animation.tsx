import Lottie from "lottie-react";

export default function CustomLottieAnimation(data: any) {
  return <Lottie autoPlay={true} loop={true} animationData={data} />;
}
