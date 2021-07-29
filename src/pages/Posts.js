import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import api from "../api"
import Moment from 'moment'
import 'moment/locale/pt-br'

// import Pagination from '../components/Pagination';
import {
   MDBContainer,
   MDBCard,
   MDBCardBody,
   MDBCardTitle, 
   MDBCardText, 
   MDBCardImage,
  } from 'mdb-react-ui-kit'

function Posts() {

  const [clue, setClue] = useState();


  useEffect(() => {
    api
      .get("https://multi-duck-system-api.herokuapp.com/clues?limit=20")
      .then((response) => {
        setClue(response.data)
      })
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  function dateForm(){

    const dateFormatted = Moment(clue?.data[0].createdAt).format('DDMMYYYY')
    const dateFromNow = Moment(dateFormatted, "DDMMYYYY").fromNow()
  
    return dateFromNow
  }

  return (
    <div className="Posts" >      
      <MDBContainer className="mt-4 ">
     
        <div className="d-flex flex-column align-items-center justify-content-center">
            <Link to = "/resposta">
        <MDBCard className='mb-3 text-white' background="dark"  style={{ maxWidth: '18rem', minWidth: '40vw' }}>
        <MDBCardBody>
          <MDBCardTitle>{clue?.data[0].title}</MDBCardTitle>
          <MDBCardText>
            {clue?.data[0].description}
           </MDBCardText>
          <MDBCardText>
              <small className='text-muted'>Postado {dateForm()} - Hally</small>
          </MDBCardText>
        </MDBCardBody>
        
        <MDBCardImage position='bottom' src={clue?.data[0].photos[1]}  alt='...' />
      </MDBCard>
      </Link>

      </div>  
      </MDBContainer>
    </div>
  );
}

export default Posts;