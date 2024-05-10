import { CiTwitter } from "react-icons/ci";
import { FaMeta } from "react-icons/fa6";
import { PiInstagramLogoThin, PiYoutubeLogoLight } from "react-icons/pi";
import { SlSocialFacebook } from "react-icons/sl";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer-component">
      <div className="footer-grid-column">
        <div className="footer-grid-column-line">
          <a
            className="option" 
            href="https://about.meta.com/br/"
          ><FaMeta className="meta-logo"/>Meta</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option" 
            href="https://www.instagram.com/meta/"
          ><PiInstagramLogoThin className="instagram-logo"/></a>
          <a
            className="option" 
            href="https://twitter.com/Meta"
          ><CiTwitter className="twitter-logo"/></a>
          <a
            className="option" 
            href="https://www.facebook.com/Meta"
          ><SlSocialFacebook className="facebook-logo"/></a>
          <a
            className="option" 
            href="https://www.youtube.com/META"
          ><PiYoutubeLogoLight className="youtube-logo"/></a>
        </div>

      </div>
      <div className="footer-grid-column">
        <div className="footer-grid-column-line">
          <span className="option">Site terms and policies</span>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://transparency.meta.com/pt-br/policies/community-standards/"
          >Community Standarts</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://www.facebook.com/privacy/policy/?entry_point=about_fb"
          >Privacy policy</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://www.facebook.com/terms.php/"
          >Terms</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://www.facebook.com/privacy/policies/cookies/?entry_point=cookie_policy_redirect&entry=0"
          >Cookie policy</a>
        </div>
      </div>
      <div className="footer-grid-column">
        <div className="footer-grid-column-line">
          <span className="option">Smart glasses</span>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="#"
          >Shop Ray-Ban Meta smart glasses</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://www.meta.com/smart-glasses/?utm_content=20523"
          >Ray-Ban Stories</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://about.meta.com/br/reality-labs/ray-ban-stories/privacy/"
          >Privacy information</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://www.meta.com/help/smart-glasses/articles/legal-and-privacy-information/supported-countries-ray-ban-meta-smart-glasses/?utm_content=60536"
          >Supported countries</a>
        </div>
      </div>
      <div className="footer-grid-column">
        <div div className="footer-grid-column-line">
          <span className="option">About Us</span>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://about.meta.com/br/company-info/"
          >About Meta</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://about.meta.com/br/media-gallery/"
          >Media gallery</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://about.meta.com/br/brand/resources/"
          >Brand resources</a>
        </div>
        <div className="footer-grid-column-line">
          <a
            className="option"
            href="https://investor.fb.com/home/default.aspx"
          >For investor</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;