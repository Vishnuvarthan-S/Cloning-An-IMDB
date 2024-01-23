import React from 'react';                                                                               
import Card from 'react-bootstrap/Card';                
import './card1.css';                                       
import { Link } from 'react-router-dom';                                
//import { useState } from 'react';                                           
// const[index,setIndex]=useState(0);                             
// index=0;                                      
// const[arr,setArr]=useState([]);                                   
// const CardObj=[{name:"Attack On Titan",text:"shingeki no kyojin",image:"freedom.png"},                                                                          
// {name:"Demon Slayer",text:"kimetsu no yaiba",image:"DemonSlayer.png"}];                              
                                 
const CustomCard = () => {           
  function handleWatch(){                                                                             
    alert("Item added to watch Later");                                                   
  }                                   
  function handleFavourite(){                                                                              
    alert("Item added to Favourites");                              
  }                                         
  return (                                                                                           
    <div className='naane'>                                           
    <Card className="custom-card">                                                           
      <Card.Img variant="top" src="freedom.jpg" className="custom-card-img" />                                                                      
      <Card.Body className="custom-card-body">                                                                        
      <Link to={"/aot"}>                                           
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
      <Link to={"/Demon"}>
        <Card.Title className="custom-card-title">Demon Slayer</Card.Title>
        </Link>
        <Card.Text className="custom-card-text">
        kimetsu no yaiba
        </Card.Text>
        <button className="btn custom-btn" onClick={handleWatch}>Add to WatchLater</button>
        <button className="btn custom-btn" onClick={handleFavourite}>Set as Favourite</button>
      </Card.Body>
    </Card>
    <Card className="custom-card">
      <Card.Img variant="top" src="spiderman.jpg" className="custom-card-img" />
      <Card.Body className="custom-card-body">
      <Link to={"/spider"}>
        <Card.Title className="custom-card-title">SpiderMan No-Way Home</Card.Title>
        </Link>
        <Card.Text className="custom-card-text">
        Tom Holland's exclusive
        </Card.Text>
        <button className="btn custom-btn" onClick={handleWatch}>Add to WatchLater</button>
        <button className="btn custom-btn" onClick={handleFavourite}>Set as Favourite</button>
      </Card.Body>
      
    </Card>
    </div>
  );
};
export default CustomCard;