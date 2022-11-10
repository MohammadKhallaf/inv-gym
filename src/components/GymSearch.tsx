import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

type Props = {};

const GymSearch = (props: Props) => {
  return (
    <Form className="col-6 ">
      <InputGroup className="">
        <Form.Control
          type="search"
          placeholder="Serach by gym name, facilities"
          aria-label="Serach by gym name, facilities"
          className="py-3 col-6"
        />
        <Button
          id="button-search"
          className="bg-transparent text-primary fw-bolder text-uppercase col-3"
        >
          filter
        </Button>
        <Button
          id="button-search"
          className="bg-secondary text-uppercase col-3"
        >
          find gyms
        </Button>
      </InputGroup>
    </Form>
  );
};

export default GymSearch;
