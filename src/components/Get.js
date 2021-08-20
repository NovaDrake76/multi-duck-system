import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import "moment/locale/pt-br";
import _map from "lodash/map";
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner";

// import Pagination from "./Pagination";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";

export default class javascriptMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clue: [],
      set: 0,
      limit: 20,
      loading: true,
    };
  }

  getData() {
    axios
      .get("https://multi-duck-system-api.herokuapp.com/clues", {
        params: {
          limit: this.state.limit,
          offset: this.state.set,
        },
      })
      .then((res) => {
        var clue = res.data;
        this.setState({ data: clue, loading: false });
      });
  }
  componentDidMount() {
    this.getData();
  }

  render() {
    const { data } = this.state;

    if (this.state.loading) {
      return <Loader type="TailSpin" color="white" height={140} width={140} />;
    }

    return (
      <>
        {_map(data?.data, (d) => (
          <Link
            to={{
              pathname: "/resposta",
              state: {
                title: d.title,
                description: d.description,
                photos: d.photos,
                date: Moment(d.createdAt, "YYYY-MM-DDTHH:mm:ssZ").fromNow(),
              },
            }}
          >
            <MDBCard
              className="mb-3 text-white"
              background="dark"
              style={{ maxWidth: "18rem", minWidth: "40vw" }}
            >
              <MDBCardBody>
                <MDBCardTitle>
                  <p>{d.title}</p>{" "}
                </MDBCardTitle>
                <MDBCardText>
                  <p>{d.description}</p>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">
                    Postado{" "}
                    {Moment(d.createdAt, "YYYY-MM-DDTHH:mm:ssZ").fromNow()} -
                    Hally
                  </small>
                </MDBCardText>
              </MDBCardBody>

              <MDBCardImage position="bottom" src={d.photos} />
            </MDBCard>
          </Link>
        ))}
        {/* <div className="d-flex justify-content-between">
          <MDBBtn
            className="btn btn-primary me-5"
            id="previousButton"
            onClick={() => {
              this.setState({ set: this.state.set - this.state.limit });
              this.getData();
            }}
          >
            Anterior
          </MDBBtn>
          <MDBBtn
            className="btn btn-primary"
            id="nextButton"
            onClick={() => {
              this.setState({ set: this.state.set + this.state.limit });
              this.getData();
            }}
          >
            Próximo
          </MDBBtn>
        </div> */}
      </>
    );
  }
}

//https://www.pluralsight.com/guides/all-need-to-know-about-axios
