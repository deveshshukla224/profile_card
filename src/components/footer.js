import twitter_icon from '../images/Twitter Icon.png'
import linkedin_icon from '../images/Linkedin Icon.png'
import facebook_icon from '../images/Facebook Icon.png'
import github_icon from '../images/GitHub Icon.png'
function Footer() {
return(
    <div className="footer">
        <img src={twitter_icon} alt="twitter"/>
        <img src={linkedin_icon} alt="linkedIn"/>
        <img src={facebook_icon} alt="facebook"/>
        <img src={github_icon} alt="github"/>
    </div>
);
}

export default Footer;
