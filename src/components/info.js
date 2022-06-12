import profile_pic from '../images/Rectangle 90.png';
import About from '../components/about'
import Interest from '../components/interest'
import Name_Header from "./name_header";
import Footer from "./footer";
function Info() {
    return (
        <div className='main-section'>
            <img src={profile_pic} alt="profile_pic"/>
            <Name_Header/>
            <About/>
            <Interest/>
            <Footer/>
    </div>
    );
}
export default Info;
