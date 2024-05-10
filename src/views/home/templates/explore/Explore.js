import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import images from "../../../../utils/images";
import "./Explore.scss";

function Explore() {
  const scrollableRowContainerRef = useRef(null);

  function handleScrollLeftClick() {
    if (scrollableRowContainerRef.current) {
      scrollableRowContainerRef.current.scrollLeft -= 300;
    }
  }

  function handleScrollRightClick() {
    if (scrollableRowContainerRef.current) {
      scrollableRowContainerRef.current.scrollLeft += 300;
    }
  }

  return (
    <div className="explore-component">
      <div className="explore-grid-row">
        <p>
          <strong>Explore mundos incríveis e viva aventuras épicas</strong>
          <span>
            Jogos imersivos e experiências
            inovadoras esperam por você
          </span>
        </p>
      </div>
      <div className="explore-grid-row" ref={scrollableRowContainerRef}>
        <div className="scrollable-row">
          {(
            function() {
              return Object
                .keys(images)
                .map((image) => {
                  const regExp = /rectangle((4[5-9])|50)$/gi;

                  if(!regExp.test(image)) {
                    return null;
                  }

                  return <img 
                    src={images[image]}
                    alt="Not found"
                  />
                })
                .filter((image) => image != null);
            }()
          )}
        </div>
      </div>
      <div className="scroll-buttons">
        <button
          type="button"
          className="btn-scroll "
          onClick={() => handleScrollLeftClick()}
        ><IoIosArrowBack /></button>
        <button
          type="button"
          className="btn-scroll scroll-right"
          onClick={() => handleScrollRightClick()}
        ><IoIosArrowForward /></button>
      </div>
    </div>
  )
}

export default Explore;