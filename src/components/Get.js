import React, { Component } from "react";
import axios from "axios";
import Moment from "moment";
import "moment/locale/pt-br";
import _map from "lodash/map";
import { Link } from "react-router-dom";

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
    const { buttonStatus } = this.state;

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
      </>
    );
  }
}
