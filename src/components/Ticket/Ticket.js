import React from "react";
import './style.scss';
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle} from "reactstrap";

const ticket = props => {
  const {summary, description, id } = props;
  return  (
    <Card className="card-wrapper">
      <CardBody>
        <CardTitle>{summary}</CardTitle>
        <CardText>{description}</CardText>
        <CardSubtitle>{id}</CardSubtitle>
        
      </CardBody>
    </Card>
 )
};

export default ticket;
