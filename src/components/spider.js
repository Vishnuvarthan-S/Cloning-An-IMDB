import './movie.css'
import { Link } from 'react-router-dom';
function Spider(){
    return(
        <>
        <h4 className="Name">
            Spiderman-NoWay Home
        </h4>
        <img src="spiderman.jpg" alt="Spiderman"/>
        <p className="Desc">
            Spider Man: No Way Home is an upcoming superhero film in the Marvel Cinematic Universe (MCU). It is scheduled to be released on December 17, 2021. The film follows the story of Peter Parker/Spider-Man as he deals with the aftermath of the events of Spider-Man: Far From Home (2019) and encounters new villains. The title of the movie refers to a line from the song "With Great Power Comes Great Responsibility," which has been a central theme of the Spider-Man franchise. The film is expected to be a part of the MCU's Phase 4 and will be the second film to feature Tom
        </p>
        <Link to={"/review"}>
        <h5 className='rev'>
            post you're reviews here
        </h5>
        </Link>
        <h4>
            Watch Trailer
        </h4>
        <iframe width="420" height="315"
            src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1">
                
        </iframe>
        </>
    );

}export default Spider;