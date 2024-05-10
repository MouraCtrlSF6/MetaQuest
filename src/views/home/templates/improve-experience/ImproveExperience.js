import images from "../../../../utils/images";
import Product from "../pruduct/Product";
import "./ImproveExperience.scss";

function ImproveExperience() {
  function handleProductClick(url) {
    window.open(url);
  }

  return (
    <div className="improve-experience-component">
      <h2>Melhore sua experiência</h2>
      
      <div className="product-list">
        <div className="product-wrapper">
          <Product
            image={images.rectangle53}
            imageUrl={"../../../../assets/"}
            name="Meta Quest 3 Carrying Case"
            price="129.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-3-carrying-case/")}
          ></Product>
        </div>
        <div className="product-wrapper">
          <Product
            image={images.rectangle53_2}
            name="Meta Quest 3 Charging Dock"
            price="129.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-3-charging-dock/")}
          ></Product>
        </div>
        <div className="product-wrapper">
          <Product
            image={images.rectangle53_4}
            name="Meta Quest 3 Active Straps"
            price="39.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-active-straps-touch-plus/")}
          ></Product>
        </div>
        <div className="product-wrapper">
          <Product
            image={images.rectangle53_1}
            name="Silicone Facial Interface"
            price="129.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-3-silicone-facial-interface/")}
          ></Product>
        </div>
        <div className="product-wrapper">
          <Product
            image={images.rectangle53_3}
            name="Facial Interface & Head Strap"
            price="49.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-3-facial-interface-head-strap/?variant=elemental-blue")}
          ></Product>
        </div>
        <div className="product-wrapper">
          <Product
            image={images.rectangle53_5}
            name="Facial Interface & Head Strap"
            price="49.99"
            onClick={() => handleProductClick("https://www.meta.com/quest/accessories/quest-3-facial-interface-head-strap/?variant=blood-orange")}
          ></Product>
        </div>
      </div>
    </div>
  )
} 

export default ImproveExperience;