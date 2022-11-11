import React, { Dispatch, SetStateAction } from "react";
import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

type Props = {
  currentPage: number;
  resultLength: number;
  changePage: Dispatch<SetStateAction<number>>;
};

const ListPagination = (props: Props) => {
  return (
    <Pagination className="text-primary mt-3 justify-content-center">
      <Pagination.First
        onClick={() => props.changePage(0)}
        disabled={props.currentPage === 0}
      />
      <Pagination.Prev
        onClick={() =>
          props.changePage((state) => (state > 0 ? state - 1 : state))
        }
        disabled={props.currentPage === 0}
      />

      {_.range(props.resultLength / 6).map((item, idx) => (
        <Pagination.Item
          onClick={() => props.changePage(idx)}
          disabled={props.currentPage === idx}
        >
          {idx + 1}
        </Pagination.Item>
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

      <Pagination.Next
        onClick={() =>
          props.changePage((state) =>
            state < props.resultLength / 6 - 1 ? state + 1 : state
          )
        }
        disabled={props.currentPage === props.resultLength / 6 - 1}
      />
      <Pagination.Last
        onClick={() => props.changePage(props.resultLength / 6 - 1)}
        disabled={props.currentPage === props.resultLength / 6 - 1}
      />
    </Pagination>
  );
};

export default ListPagination;
