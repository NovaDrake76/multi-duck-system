import React from "react";
import Get from "../components/Get";
import { MDBContainer } from "mdb-react-ui-kit";

function Posts() {
  return (
    <div className="Posts">
      <MDBContainer className="mt-4 ">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <Get />
        </div>
      </MDBContainer>
    </div>
  );
}

export default Posts;

//TO-DO
//search
//pagination
//delete post (password)
