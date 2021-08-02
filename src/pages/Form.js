import React from "react";
import axios from "axios";

import {
  MDBContainer,
  MDBCard,
  MDBCardTitle,
  MDBCardBody,
  MDBCardHeader,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photos: [],
      buttonStatus: false,
    };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
    console.log(target.id);
  };

  fileSelectorHandle = (e) => {
    if (e.target.files) {
      this.setState({ photos: [...this.state.photos, ...e.target.files] });
    }
    console.log(e.target.files);
  };

  postContent(e) {
    e.preventDefault();
    this.setState({ buttonStatus: true });
    console.log(1, this.state);
    const form = new FormData();
    this.state.photos.forEach((file) => {
      form.append("photos", file);
      console.log(2, file);
    });
    form.append("title", this.state.title);
    form.append("description", this.state.description);

    axios
      .post("https://multi-duck-system-api.herokuapp.com/clues", form)
      .then((e) => {
        window.alert("Enviado, obrigado!");
        this.setState({ buttonStatus: false });
      })
      .catch((e) => window.alert(e));
  }

  render() {
    return (
      <div className="Form">
        <form action="#" onSubmit={this.postContent.bind(this)}>
          <MDBContainer className="mt-4 d-flex justify-content-center ">
            <MDBCard
              className="fixed"
              shadow="0"
              border="dark"
              background="white"
              style={{ maxWidth: "18rem", minWidth: "30vw" }}
            >
              <MDBCardHeader>Crie um Post para Hally</MDBCardHeader>
              <MDBCardBody className="text-dark">
                <MDBCardTitle>Título*</MDBCardTitle>
                <MDBInput
                  label="Ex: 'lista química'"
                  id="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange.bind(this)}
                  required
                ></MDBInput>
                <MDBCardTitle className="mt-2">Descrição</MDBCardTitle>
                <MDBInput
                  label="Ex: 'conferi tudo, está correta'"
                  id="description"
                  type="text"
                  textarea
                  rows={4}
                  value={this.state.description}
                  onChange={this.handleChange.bind(this)}
                  required
                />
                <MDBCardTitle className="mt-2">Fotos</MDBCardTitle>

                <input
                  type="file"
                  accept="image/*"
                  multiple
                  className="form-control"
                  id="photos"
                  maxfilesize={9400000}
                  onChange={this.fileSelectorHandle.bind(this)}
                />
                <MDBBtn
                  className="btn btn-dark mt-3 float-end"
                  type="submit"
                  disabled={this.state.buttonStatus}
                >
                  Enviar
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </form>
      </div>
    );
  }
}

// https://medium.com/how-to-react/different-ways-to-loop-through-arrays-and-objects-in-react-39bcd870ccf
