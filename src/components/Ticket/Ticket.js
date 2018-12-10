import React from "react";
import './style.scss';
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Fade} from "reactstrap";

const ticket = props => {
  const {summary, description, id} = props;
  return (
    <Fade className="card-wrapper">
      <Card>
        <CardBody>
          <CardTitle>{summary}</CardTitle>
          <CardText>{description}</CardText>
          <CardSubtitle><span>ID</span>{id}</CardSubtitle>
        </CardBody>
      </Card>
    </Fade>
  )
};

export default ticket;
