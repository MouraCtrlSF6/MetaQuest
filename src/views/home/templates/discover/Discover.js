import Button from "../../../../components/button/Button";
import "./Discover.scss";

function Discover() {
  function handleButtonClick() {
    
  }

  return (
    <div className="discover-component">
      <div className="discover-grid-column">
        <p>
          Descubra o MetaQuest:
          <strong>Um novo mundo ao seu alcance</strong>
        </p>
        <p>
          Tudo o que você precisa sem <br/> 
          esvaziar o seu bolso.
        </p>
        
        <div className="button-wrapper">
          <Button
            text="Adquira o seu"
            onClick={() => handleButtonClick()}
          ></Button>
        </div>
      </div>      

      <div className="discover-grid-column background"></div>
    </div>
  )
}

export default Discover;