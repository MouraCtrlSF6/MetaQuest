import { useEffect, useRef } from 'react';
import "./Product.scss";

function Product({
  image,
  price,
  name,
  onClick
}) {
  const ref = useRef(null);

  useEffect(() => {
    if(!ref.current) {
      return;
    }
  }, [])

  return (
    <div className="product-component">
      <div className="image" ref={ref}>
        <img src={image} alt="Not found"/>
        <span>${price}</span>
      </div>
      <div className="description">
        <span>{name}</span>
        <span onClick={() => onClick()}>Comprar</span>
      </div>
    </div>
  )
}

export default Product;