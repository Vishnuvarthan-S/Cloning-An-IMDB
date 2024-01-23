import NavigationBar from "./navBar";
import CustomCard from "./card1";
import Footer from "./Footer";
import './DashBoard.css';
export default function DashBoard(){
    return(
        <>
        <NavigationBar/>
        <h5 className="Heading">Watch your favourite series:</h5>
        <CustomCard/>
        <Footer/>
        </>
    )
    
    ;
}