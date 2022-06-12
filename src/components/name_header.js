import email_icon from '../images/Icon.png'
function Name_Header() {
return(
    <div style={{width:"100%"}}>
    <h3 className="name">Laura Smith</h3>
    <h4 className="position">Frontend Developer</h4>
    <h4 className="website">laurasmith.website</h4>
        <button className="email_section"><img id="email_icon" src={email_icon} alt="email_icon"/> Email</button>
    </div>
);
}

export default Name_Header;
