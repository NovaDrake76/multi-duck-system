import React from 'react';
import {
     MDBContainer,
     MDBCard,
     MDBCardTitle, 
     MDBCardBody, 
     MDBCardHeader, 
     MDBInput,
     MDBBtn
    } from 'mdb-react-ui-kit';

function Form(){
    return(
        <div className="Form">
            <form>
            <MDBContainer className="mt-4 d-flex justify-content-center">
            <MDBCard shadow='0' border='dark' background='white' style={{ maxWidth: '18rem', minWidth: '30vw' }}>
        <MDBCardHeader>Crie um Post para Hally</MDBCardHeader>
        <MDBCardBody className='text-dark'>
          <MDBCardTitle>Título*</MDBCardTitle>
          <MDBInput label="Ex: 'lista química'" id="title" type="text"></MDBInput>
          <MDBCardTitle className="mt-2">Descrição</MDBCardTitle>
          <MDBInput label="Ex: 'conferi tudo, está correta'" id="description" type = "text" textarea rows={4} />
          <MDBCardTitle className="mt-2">Fotos</MDBCardTitle>
          <input type="file" accept="image/*" multiple="multiple" class="form-control" id="customFile" maxFileSize= {9400000}/>

          <MDBBtn className="btn btn-dark mt-3 float-end" type="submit">Enviar</MDBBtn>
        </MDBCardBody>
      </MDBCard>
            </MDBContainer>
            </form>
        </div>
    )
}

export default Form;