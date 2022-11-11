import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Button } from "react-bootstrap";
import chunk from "lodash/chunk";
import GymSearch from "../components/GymSearch";
import ListPagination from "../components/ListPagination";
import ListResults from "../components/ListResults";

type Props = {};

const ListPage = (props: Props) => {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(0);
  const [resultChunk, setResultChunk] = useState<Array<Gym>>([]);
  useEffect(() => {
    axios
      .get(
        "https://staging.algym.com/api/v1/gyms?lat=31.2475504&long=29.963676&page_number=1&page_size=1000&search_diameter=1000"
      )
      .then((result) => result.data)
      .then((res) => {
        setResults(res.data);
      });
  }, []);
  useEffect(() => {
    changeResultChunk();
  }, [page, results]);
  const changeResultChunk = () => {
    const newArr = chunk(results, 6);
    setResultChunk(newArr[page]);
  };
  return (
    <Container className="bg-light">
      <Row>
        <GymSearch />
        <Button className="col-3 fs-6 text-uppercase ms-auto" size="sm">
          switch to map view
        </Button>
      </Row>
      <ListResults results={resultChunk} />
      <ListPagination
        resultLength={results.length | 0}
        changePage={setPage}
        currentPage={page}
      />
    </Container>
  );
};

export default ListPage;
