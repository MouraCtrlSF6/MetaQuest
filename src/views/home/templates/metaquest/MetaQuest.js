import { GoCpu, GoPerson } from "react-icons/go";
import { SlEnergy } from "react-icons/sl";
import "./MetaQuest.scss";

function MetaQuest() {
  return (
    <div className="metaquest-component">
      <div className="info-container">
        <span>
          <p><GoCpu /></p>
          <p>
            Equipado com o chip Qualcomm Snapdragon XR2 Gen 2 <br/> 
            e 12GB de RAM,prometendo um desempenho robusto <br/> 
            para  multitarefa e produtividade.
          </p>
        </span>
        <span>
          <p><GoPerson /></p>
          <p>
            A tecnologia de ponta do Meta Quest 3 garante uma <br/>  
            aventura virtual fluida e cativante, elevando cada sessão <br/> 
            a um novo patamar de excelência.
          </p>
        </span>
        <span>
          <p><SlEnergy /></p>
          <p>
            O Meta Quest 3 redefine a liberdade em realidade <br/>  
            virtual com uma bateria de longa duração que oferece <br/> 
            até 3 horas de imersão total.
          </p>
        </span>
      </div>
    </div>
  )
}

export default MetaQuest;