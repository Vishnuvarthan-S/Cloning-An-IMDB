import './movie.css';
import { Link } from 'react-router-dom';
function Demon(){
    return(
        <>
        <h4 className="Name">
        Demon Slayer
        </h4>
        <img src="DemonSlayer.jpg" alt="Demonslayer"/>
        <p className="Desc">
        The story takes place in the Taishō era Japan, where a secret organization, known as the Demon Slayer Corps, has waged a longtime war against demons for centuries. These demons are former humans who possess supernatural abilities such as super strength, rapid regeneration, and unique powers referred to as "Blood Demon Art"
        </p>
        <Link to={"/review"}>
        <h5 className='rev'>
            post you're reviews here
        </h5>
        </Link>
        </>
    );

}export default Demon;