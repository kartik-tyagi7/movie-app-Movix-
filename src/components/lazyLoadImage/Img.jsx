import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage className={className || "absolute top-0 left-0 w-full h-full rounded-[12px] overflow-hidden object-cover"} alt="" effect="blur" src={src} />
  );
};

export default Img;
