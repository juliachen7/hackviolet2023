import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Name.css"
import {Card} from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {image:"https://i.pinimg.com/736x/a7/5d/9a/a75d9a79054de1f58cc2bdb27da5128a--pretty-kids-cute-kids.jpg", title: "Darren Zheng", text: "Major: CMDA"},
    {image:"https://i.pinimg.com/originals/4b/d8/f5/4bd8f596f0deec1dde697982d0c98282.jpg", title: "Julia Chen", text: "Major: CS"},
    {image:"https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg", title: "Alex Wallace", text: "Major: CS"},
    {image:"https://pbs.twimg.com/profile_images/550172568918188032/CudjFm9U.jpeg", title: "Gawain Zhang", text: "Major: CMDA"},
  ]
  const renderCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index} className= "box">
        <Card.Img variant="top" src="holder.js/100px180" src={card.image}/>
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }

  return <div className="grid">{cardInfo.map(renderCard)}</div>
     
}

export default MoreDeets;