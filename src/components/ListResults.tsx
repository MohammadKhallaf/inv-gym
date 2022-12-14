import axios from "axios";
import React, { useEffect, useState } from "react";

import { Row, Col } from "react-bootstrap";
import GymCard from "./GymCard";
type Props = {
  results: Gym[];
};
const ListResults = (props: Props) => {
  return (
    <Row className="row-cols-auto mt-5 gap-3 justify-content-center">
      {props.results?.length &&
        props.results.map((item, idx) => <GymCard key={idx} gym={item} />)}
    </Row>
  );
};

export default ListResults;
