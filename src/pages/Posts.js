import { Link } from 'react-router-dom'
// import Pagination from '../components/Pagination';
// https://www.digitalocean.com/community/tutorials/how-to-build-custom-pagination-with-react-pt
import {
   MDBContainer,
   MDBCard,
   MDBCardBody,
   MDBCardTitle, 
   MDBCardText, 
   MDBCardImage,
  } from 'mdb-react-ui-kit'

function Posts() {

  return (
    <div className="Posts" >      
      <MDBContainer className="mt-4 ">

        <div className="d-flex flex-column align-items-center justify-content-center">
            <Link to = "/resposta">
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
      </MDBCard>
      </Link>

        <MDBCard className='mb-3 text-white' background="dark" style={{ maxWidth: '18rem', minWidth: '40vw' }}>
        <MDBCardBody>
          <MDBCardTitle>Química - Estudo dos Gases</MDBCardTitle>
          <MDBCardText>
            Tudo certo.
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Postado há 19 minutos - Expedito</small>
          </MDBCardText>
        </MDBCardBody>
        <MDBCardImage position='bottom' src='https://scontent.fjdo10-2.fna.fbcdn.net/v/t1.6435-9/s720x720/115728668_1636576559849959_7193242077596647879_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=730e14&_nc_ohc=PwuXK_kXCvQAX9RG3O2&_nc_ht=scontent.fjdo10-2.fna&oh=61b2864ccf43ff928bdafa1d2e3002a5&oe=61240EA3' alt='...' />
      </MDBCard>
  
      <MDBCard background='dark' className='text-white mb-3' style={{ maxWidth: '18rem', minWidth: '40vw' }}>
        <MDBCardBody>
          <MDBCardTitle>Química - Estequiometria</MDBCardTitle>
          <MDBCardText>
          1 - <br />
          a) 16 mol<br />
          b) 43,75 mol/O2(g)<br />
          2 - <br />
          a) 308g<br />
          b) 108g  <br />
          3 - <br />
          a) 8,5g<br />
          b) H2 está em excesso por 1,5g<br />
          4 - D<br />
          5 - D<br />
          </MDBCardText>
          <small className='text-muted'>Postado há 5 horas - Hally</small>

        </MDBCardBody>
      </MDBCard>
      </div>  
      </MDBContainer>
    </div>
  );
}

export default Posts;