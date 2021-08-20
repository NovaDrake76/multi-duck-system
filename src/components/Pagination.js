import React from "react";
import {
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
} from "mdb-react-ui-kit";

export default function Pagination() {
  return (
    <nav aria-label="Page navigation example ">
      <MDBPagination className="mb-0 ">
        <MDBPaginationItem>
          <MDBPaginationLink href="#">
            <p className="text-white">Previous</p>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#">
            {" "}
            <p className="text-white">1</p>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#">
            {" "}
            <p className="text-white">2</p>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#">
            {" "}
            <p className="text-white">3</p>
          </MDBPaginationLink>
        </MDBPaginationItem>
        <MDBPaginationItem>
          <MDBPaginationLink href="#">
            {" "}
            <p className="text-white">Next</p>
          </MDBPaginationLink>
        </MDBPaginationItem>
      </MDBPagination>
    </nav>
  );
}
