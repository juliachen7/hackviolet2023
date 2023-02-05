import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Name.css"
import {Card} from "react-bootstrap";

const MoreDeets = () => {
  const cardInfo = [
    {image:"https://content.thriveglobal.com/wp-content/uploads/2020/06/07-Kid-Asian-Alamy-XDKY6P.jpg", title: "Darren Zheng", text: "Major: CMDA"},
    {image:"", title: "Julia Chen", text: "Major: CS"},
    {image:"", title: "Alex Wallace", text: "Major: CS"},
    {image:"", title: "Gawain Zhang", text: "Major: CMDA"},
  ]
  const renderCard = (card, index) => {
    return(
      <Card style={{ width: '18rem' }} key={index}>
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

  return <div className="App">{cardInfo.map(renderCard)}</div>
     
}

export default MoreDeets;