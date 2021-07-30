import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/pt-br'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle, 
  MDBCardText, 
  MDBCardImage,
 } from 'mdb-react-ui-kit'

export default class javascriptForEachLoop extends Component {
    constructor(props){
        super(props)
        this.state = {
          title: '',
          description:'',
          image:'',
          createAt: new Date()
        }
      }
    
      getData(){
        axios.get('https://multi-duck-system-api.herokuapp.com/clues').then(res => {
          var clue = res.data
          var titleData = ''
          var descriptionData = ''
          var imageData = ''
          var createAtData = new Date()
          clue?.data.forEach(d => titleData += `${d.title}`)
          clue?.data.forEach(d=> descriptionData += `${d.description}`)
          clue?.data.forEach(d=> imageData += `${d.photos}`)
          clue?.data.forEach(d=> createAtData += `${d.createAt}`)

          this.setState({title: titleData, description: descriptionData, image: imageData, createAt: createAtData})
          
        })
      }

      componentDidMount(){
        this.getData()
      }
    render() {
      const {title, description, image, createAt} = this.state
      
      const dateFormatted = Moment(createAt).format('DDMMYYYY')
      const dateFromNow = Moment(dateFormatted, "DDMMYYYY").fromNow()
      console.log(createAt)
        return (
            <>
        <MDBCard className='mb-3 text-white' background="dark"  style={{ maxWidth: '18rem', minWidth: '40vw' }}>
          <MDBCardBody>
            <MDBCardTitle dangerouslySetInnerHTML={  {__html: title}}/>
            <MDBCardText dangerouslySetInnerHTML={  {__html: description}}/>
            <MDBCardText>   
                <small className='text-muted'>Postado a {dateFormatted} - Hally</small>
            </MDBCardText>
          </MDBCardBody>
          
          <MDBCardImage position='bottom' src={image}  alt='...' />
        </MDBCard>
                  </>
        )
    }
}