
import Button from "../../components/button/Button";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./Home.scss";
import Discover from "./templates/discover/Discover";
import Explore from "./templates/explore/Explore";
import ImproveExperience from "./templates/improve-experience/ImproveExperience";
import MetaQuest from "./templates/metaquest/MetaQuest";
import Technology from "./templates/technology/Technology";

function Home() {  
  function handleAcquireYoursClick() {}

  return (
    <div className="home-component">

      TESTE

      <div className="page-container">

        <div className="header-container">
          <Header></Header>
        </div>

        <div className="body-container">
          <Discover></Discover>
          <Technology></Technology>
          <Explore></Explore>
          <MetaQuest></MetaQuest>
          <ImproveExperience></ImproveExperience>

          <div className="acquire-yours-container">
            <div className="button-wrapper">
              <Button  
                text="Adquira o seu"
                onClick={() => handleAcquireYoursClick()}
              ></Button>
            </div>
          </div>

          <Footer></Footer>
        </div>
      
      </div>
    </div>
  )
}

export default Home;