import {
   MDBContainer,
   MDBCard,
   MDBCardBody,
   MDBCardTitle, 
   MDBCardText, 
   MDBCardImage,
  } from 'mdb-react-ui-kit';

function Resposta() {

  return (
  <div className="Resposta" >
  <MDBContainer className="mt-4">
    <div className="d-flex flex-column align-items-center justify-content-center">
    <MDBCard className='mb-3 text-white' background="dark"  style={{ maxWidth: '18rem', minWidth: '40vw' }}>
    <MDBCardBody>
      <MDBCardTitle>Biologia - Sistema Nervoso e Endócrino</MDBCardTitle>
      <MDBCardText>
        Tarefa completa, não sei se a 6 tá correta.
      </MDBCardText>
      <MDBCardText>
        <small className='text-muted'>Postado há 3 minutos - Hally</small>
      </MDBCardText>
    </MDBCardBody>
    
    <MDBCardImage position='bottom' src='https://media.discordapp.net/attachments/777255861160640512/864978433506410566/unknown.png' alt='...' />
    <MDBCardImage position='bottom' src='https://i.imgur.com/m25E5t3.png' alt='...' />
    <MDBCardImage position='bottom' src='https://i.imgur.com/REJrS4t.png' alt='...' />
    <MDBCardImage position='bottom' src='https://i.imgur.com/mYe8KJp.png' alt='...' />
  </MDBCard>

  </div>  
  </MDBContainer>
</div>
);
}

export default Resposta;
