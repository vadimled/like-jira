import React, {Fragment} from "react";
import './style.scss';
import {Card, CardBody, CardSubtitle, CardText, CardTitle, Fade} from "reactstrap";

const ticket = props => {
  const {summary, description, id, onClickHandler} = props;

  return (
    <Fragment>
      <Fade className="card-wrapper" onClick={(e) => onClickHandler(e, id)}>
        <Card>
          <CardBody>
            <CardTitle>{summary}</CardTitle>
            <CardText>{description}</CardText>
            <CardSubtitle><span>ID</span>{id}</CardSubtitle>
          </CardBody>
        </Card>
      </Fade>
    </Fragment>
  )
};

export default ticket;
