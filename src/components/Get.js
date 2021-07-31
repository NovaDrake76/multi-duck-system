import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import "moment/locale/pt-br";
import _map from "lodash/map";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

export default class javascriptMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clue: [],
    };
  }

  getData() {
    axios
      .get("https://multi-duck-system-api.herokuapp.com/clues?limit=20")
      .then((res) => {
        var clue = res.data;
        this.setState({ data: clue });
      });
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    const { data } = this.state;
    const dateFormatted = Moment(data?.data.createAt).format("DDMMYYYY");
    const dateFromNow = Moment(dateFormatted, "DDMMYYYY").fromNow();
    console.log(dateFormatted);

    return (
      <>
        {_map(data?.data, (d) => (
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
                  Postado {dateFromNow} - Hally
                </small>
              </MDBCardText>
            </MDBCardBody>

            <MDBCardImage position="bottom" src={d.photos} alt="..." />
          </MDBCard>
        ))}
      </>
    );
  }
}
