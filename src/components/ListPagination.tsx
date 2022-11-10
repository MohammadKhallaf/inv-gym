import React from "react";
import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

type Props = {
  resultLength: number;
};

const ListPagination = (props: Props) => {
  return (
    <Pagination className="text-primary mt-3 justify-content-center">
      <Pagination.First />
      <Pagination.Prev />

      {_.range(props.resultLength / 6).map((item, idx) => (
        <Pagination.Item>{idx + 1}</Pagination.Item>
      ))}
      {/* <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Ellipsis />

      <Pagination.Item>{10}</Pagination.Item>
      <Pagination.Item>{11}</Pagination.Item>
      <Pagination.Item active>{12}</Pagination.Item>
      <Pagination.Item>{13}</Pagination.Item>
      <Pagination.Item disabled>{14}</Pagination.Item>

      <Pagination.Ellipsis />
      <Pagination.Item>{20}</Pagination.Item> */}

      <Pagination.Next />
      <Pagination.Last />
    </Pagination>
  );
};

export default ListPagination;
