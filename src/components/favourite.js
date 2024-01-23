import Card from 'react-bootstrap/Card';
import './favourite.css';
import NavigationBar from './navBar';
import { Link } from 'react-router-dom';
function FavouriteMovie(){
    function handleWatch(){
        alert("Item added to watch Later");
      }  
      function handleFavourite(){
        alert("Item added to Favourites");
      }
return(
    <div className='Back'>
    <NavigationBar/>
    <div className='WL'>
    <Card className="custom-card">
      <Card.Img variant="top" src="freedom.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      <Link to={"/movie"}>
        <Card.Title className="custom-card-title">Attack On Titan</Card.Title>
        </Link>
        <Card.Text className="custom-card-text">
        shingeki no kyojin
        </Card.Text>
        <button className="btn custom-btn" onClick={handleWatch}>Add to WatchLater</button>
        <button className="btn custom-btn" onClick={handleFavourite}>Set as Favourite</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="DemonSlayer.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      <Link to={"/movie"}>
        <Card.Title className="custom-card-title">Demon Slayer</Card.Title>
        </Link>
        <Card.Text className="custom-card-text">
        kimetsu no yaiba
        </Card.Text>
        <button className="btn custom-btn" onClick={handleWatch}>Add to WatchLater</button>
        <button className="btn custom-btn" onClick={handleFavourite}>Set as Favourite</button>
      </Card.Body>
    </Card>
    </div>
    </div>
);
}export default FavouriteMovie;