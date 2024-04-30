import styles from "../../Styles/home/justOffer.module.css";
import Slider from "react-slick";
import { OfferBox } from "./OfferBox";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const db = [
  {
    img:
      `${require('../../assets/images/code/code400.png')}`,
    title: "Order medicines and get FLAT 400 OFF*",
    code: "CARE4U"
  },
  {
    img:
      `${require('../../assets/images/code/code25percent.png')}`,
    title: "Flat 25% OFF above 1999",
    code: "SAVEBIG25"
  },
  {
    img:
      `${require('../../assets/images/code/code25percent.png')}`,
    title: "Order medicines worth Rs.1000 and get 25% off",
    code: "GET1000"
  },
  {
    img:
      `${require('../../assets/images/code/code400cb.png')}`,
    title: "Get cashback of Rs.400 on orders above Rs 1499.",
    code: "SAVE400"
  },
  {
    img:
      `${require('../../assets/images/code/coupleOffer.png')}`,
    title: "Get FLAT Rs.1000 OFF on buying same medicine twice",
    code: "GRAND1000"
  },
  {
    img:
      `${require('../../assets/images/code/code400cb.png')}`,
    title: "Get FLAT Rs.400 cashback on CureCart above 1000.*",
    code: "FIT400"
  }
];

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <IoIosArrowForward
      className={className}
      style={{
        ...style,
        display: "block",
        color: "black",
        height: "2rem",
        marginRight: "1rem",
        background: "none",
        width: "2rem",
        zIndex: 50
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
        color: "black",
        height: "2rem",
        width: "2rem",
        zIndex: 50
      }}
      onClick={onClick}
    />
  );
}

const JustOffer = () => {
  var settings = {
    dots: false,
    speed: 500,
    infinite: true,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    swipeToSlide: true,    
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };
  return (
    <div className={styles.container}>
      <div className={styles.first}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img
              width="80%"
              src="https://assets.pharmeasy.in/web-assets/dist/67890676.svg"
              alt=""
            />
          </div>
          <div
            style={{ fontWeight: "bold", color: "#55585e", fontSize: "20px" }}
          >
            Offers Just For You
          </div>
        </div>
        <div style={{ color: "teal", fontSize: "19px" }}>See All Offers</div>
      </div>
      <div className={styles.second}>
        <Slider {...settings}>
          {db.map((el, idx) => {
            return <OfferBox key={idx} props={el} />;
          })}
        </Slider>
      </div>
    </div>
  );
};

export { JustOffer };
