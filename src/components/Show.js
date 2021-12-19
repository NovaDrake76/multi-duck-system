import React, { Component } from "react";
import axios from "axios";
import "moment/locale/pt-br";
import Loader from "react-loader-spinner";

// import Pagination from "./Pagination";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBContainer,
  // MDBBtn,
} from "mdb-react-ui-kit";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clue: undefined,
      id: props.id,
      loading: true,
    };
  }

  getData() {
    axios
      .get(`https://multi-duck-system-api.herokuapp.com/clues/${this.state.id}`)
      .then((res) => {
        var clue = res.data;
        this.setState({ clue, loading: false });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    console.log(this.state);

    if (this.state.loading) {
      return <Loader type="TailSpin" color="white" height={140} width={140} />;
    }
    const { data } = this.state.clue;

    const { title, description, photos, date } = data;
    const photoSize = photos.length;

    return (
      <>
        {
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
        }
      </>
    );
  }
}

//https://www.pluralsight.com/guides/all-need-to-know-about-axios
