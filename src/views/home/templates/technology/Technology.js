import images from "../../../../utils/images";
import "./Technology.scss";

function Technology() {
  return (
    <div className="technology-component">
      <div className="technology-grid-column background">
        <img
          src={images.technology}
          alt="Not found"
        />
      </div>
      <div className="technology-grid-column">
        <p>
          <strong>Tecnologia de outra realidade</strong>
          <span>
            com um preço dentro da sua <br/> 
            realidade.
          </span>
        </p>

        <span className="price">$499.99</span>
      </div>
    </div>
  )
}

export default Technology;