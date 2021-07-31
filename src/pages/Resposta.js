import React from "react";
import { useLocation } from "react-router-dom";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
} from "mdb-react-ui-kit";

function Answer() {
  const location = useLocation();
  const { title, description, photos, date } = location.state;

  const photoSize = photos.length;

  return (
    <>
      <MDBContainer className="mt-4 ">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <MDBCard
            className="mb-3 text-white"
            background="dark"
            style={{ maxWidth: "18rem", minWidth: "40vw" }}
          >
            <MDBCardBody>
              <MDBCardTitle>
                <p>{title}</p>{" "}
              </MDBCardTitle>
              <MDBCardText>
                <p>{description}</p>
              </MDBCardText>
              <MDBCardText>
                <small className="text-muted">Postado {date} - Hally</small>
              </MDBCardText>
            </MDBCardBody>
            {Array.from({ length: photoSize }, (_, i) => (
              <MDBCardImage position="bottom" src={photos[i]} alt="..." />
            ))}{" "}
          </MDBCard>
        </div>
      </MDBContainer>
    </>
  );
}

export default Answer;
