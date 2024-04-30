import { useNavigate } from "react-router-dom";
import styles from "../../Styles/home/offerCards.module.css";

const OfferCards = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1.5" }}>
          <div style={{ backgroundColor: "#cff0ea" }}>
            <div className={styles.discount}></div>
            <div className={styles.heading}>Order Medicines</div>
          </div>
          <div>
            <button
              onClick={() => navigate("/orderMed")}
              className={styles.btn}
            >
              Order Now
            </button>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div style={{ backgroundColor: "#ccedff", height: "61%" }}></div>
          <img
            style={{ marginTop: "-120px" }}
            width="100%"
            src="https://assets.pharmeasy.in/web-assets/dist/7c645a8d.png?dim=186x0&dpr=1&q=100"
            alt=""
          />
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ flex: "1.5" }}>
          <div style={{ backgroundColor: "#fdf2d2" }}>
            <div className={styles.discount}></div>
            <div className={styles.heading}>Healthcare Products</div>
          </div>
          <div>
            <button
              style={{ backgroundColor: "#fc8019" }}
              onClick={() => navigate("/orderMed")}
              className={styles.btn}
            >
              Order Now
            </button>
          </div>
        </div>
        <div style={{ flex: "1" }}>
          <div style={{ backgroundColor: "#fdf2d2", height: "61%" }}></div>
          <img
            style={{ marginTop: "-120px" }}
            width="100%"
            src="https://assets.pharmeasy.in/web-assets/dist/c7c7095b.png?dim=186x0&dpr=1&q=100"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export { OfferCards };
