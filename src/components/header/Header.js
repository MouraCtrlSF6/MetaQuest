import { FaMeta } from "react-icons/fa6";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Header.scss";

function Header() {
  return (  
    <div className="header-component">
      <div className="header-group">
        <div className="option-wrapper">
          <a
            className="option" 
            href="https://about.meta.com/br/"
          ><FaMeta className="meta-logo"/>Meta</a>
        </div>
      </div>

      <div className="header-group">
        <div className="option-wrapper">
          <a
            className="option"  
            href="https://www.meta.com/quest/quest-3/"
          >Meta Quest 3</a>
          <div className="underline"></div>
        </div>
        <div className="option-wrapper">
          <a
            className="option"  
            href="https://www.meta.com/quest/gaming/"
          >Jogos e Apps</a>
          <div className="underline"></div>
        </div>
        <div className="option-wrapper">
          <a
            className="option"  
            href="https://www.meta.com/quest/compare/"
          >Comparação</a>
          <div className="underline"></div>
        </div>
        <div className="option-wrapper">
          <a
            className="option"  
            href="https://www.meta.com/quest/accessories/"
          >Acessórios</a>
          <div className="underline"></div>
        </div>
      </div>
      
      <div className="header-group">
        <div className="option-wrapper">
          <a
            className="option" 
            href="#"
          ><MdOutlineShoppingCart className="cart-logo"/></a>
        </div>
      </div>
    </div>
  )
}

export default Header;