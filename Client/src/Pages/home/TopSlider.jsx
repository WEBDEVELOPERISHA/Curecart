import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { PRIMARY } from "../../Styles/BrandColor";
import slider1 from "../../assets/images/slider/silder1.png"
import slider2 from "../../assets/images/slider/slider2.png"
import slider3 from "../../assets/images/slider/slider3.png"
import slider4 from "../../assets/images/slider/slider4.png"
import styles from "./css/TopSilder.module.css"
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "white",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowBack
      className={className}
      style={{
        ...style,
        display: "block",
        marginLeft: "1rem",
        background: "none",
        color: "white",
        height: "2rem",
        width: "2rem",
        zIndex: 50,
      }}
      onClick={onClick}
    />
  );
}
const TopSlider = () => {
  var settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div style={{ backgroundColor: PRIMARY, height: "286px" }}>
      <div
        style={{
          // backgroundColor: "whitesmoke",
          paddingBottom: "30px",
          width: "98%",
          height: 'auto',
          margin: "auto",
        }}
      >
        <Slider  {...settings}>
          <div className={styles.parallax}>
            <img
              className={styles.parallax_img}
              src={slider1}
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "1536px", height: "281px" }}
              src={slider2}
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "1536px", height: "281px" }}
              src={slider3}
              alt=""
            />
          </div>
          <div>
            <img
              style={{ width: "1536px", height: "281px" }}
              src={slider4}
              alt=""
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export { TopSlider };
