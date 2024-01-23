import './movie.css';
import { Link } from 'react-router-dom';
function Aot(){
    return(
        <>
        <h4 className="Name">
        Demon Slayer
        </h4>
        <img src="freedom.jpg" alt="AoT"/>
        <p className="Desc">
        The story of Attack on Titan centers on a civilization inside three circular walls. According to the knowledge propagated locally, it is the last surviving vestige of human civilization. Its inhabitants, known as Eldians, have been led to believe that over one hundred years ago, humanity was driven to the brink of extinction after the emergence of humanoid giants called Titans, who attack and eat humans on sight. The last remnants of humanity retreated behind three concentric walls and enjoyed roughly a century of peace. Within the walls, the thought of venturing outside is strongly frowned upon and discouraged. To combat Titans, the country's military employs Vertical Maneuvering Equipment (VME), also called Omni-Directional Maneuvering Gear (ODM Gear): a set of waist-mounted grappling hooks and gas-powered propulsion enabling immense mobility in three dimensions. Swords made of ultrahard steel are used in conjunction with the gear, and eventually rocket launcher-like weapons called Thunder Spears are also developed.
        </p>
        <Link to={"/review"}>
        <h5 className='rev'>
            post you're reviews here
        </h5>
        </Link>
        </>
    );

}export default Aot;