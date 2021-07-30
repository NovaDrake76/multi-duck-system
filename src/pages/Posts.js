import React from "react";
import { Link } from 'react-router-dom'
import Get from '../components/Get'

// import Pagination from '../components/Pagination';
import {
   MDBContainer,

  } from 'mdb-react-ui-kit'

function Posts() {

  return (
    <div className="Posts" >      
      <MDBContainer className="mt-4 ">
                 {/* {renderPosts()} */}
        <div className="d-flex flex-column align-items-center justify-content-center">
        <Link to = "/resposta">
        <Get />

  </Link>

  </div>
      </MDBContainer>
    </div>
  );
}

export default Posts;