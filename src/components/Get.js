import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'moment'
import 'moment/locale/pt-br'
import _map from 'lodash/map'

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle, 
  MDBCardText, 
  MDBCardImage,
 } from 'mdb-react-ui-kit'

export default class javascriptMap extends Component {
    constructor(props){
        super(props)
        this.state = {
          clue: []
        }
      }
    
      getData(){
        axios.get('https://multi-duck-system-api.herokuapp.com/clues?limit=20').then(res => {
          var clue = res.data
            this.setState({data : clue})
        })
      }
      componentDidMount(){
        this.getData()
      }
    render() {
      const {data} = this.state
      return (
        <>
     {_map(data?.data, d => (
    <MDBCard className='mb-3 text-white' background="dark"  style={{ maxWidth: '18rem', minWidth: '40vw' }}>
      <MDBCardBody>
        <MDBCardTitle><p key={d.title}>{d.title}</p> </MDBCardTitle>
        <MDBCardText><p key={d.description}>{d.description}</p></MDBCardText>
        <MDBCardText>   
            <small className='text-muted'>Postado - Hally</small>
        </MDBCardText>
      </MDBCardBody>
      
      <MDBCardImage position='bottom' src={d.photos}  alt='...' />
    </MDBCard>
    ))}
              </>
    )
    }}

// {_map(data?.data, d => (<li key={d.title}>{d.title}</li>))} 


// import React, { Component } from 'react'
// import axios from 'axios'
// import Moment from 'moment'
// import 'moment/locale/pt-br'

// import {
//   MDBCard,
//   MDBCardBody,
//   MDBCardTitle, 
//   MDBCardText, 
//   MDBCardImage,
//  } from 'mdb-react-ui-kit'

// export default class javascriptForEachLoop extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//           title: '',
//           description:'',
//           image:'',
//           createAt: null
//         }
//       }
    
      // getData(){
      //   axios.get('https://multi-duck-system-api.herokuapp.com/clues?limit=20').then(res => {
      //     var clue = res.data
      //     var titleData = ''
      //     var descriptionData = ''
      //     var imageData = ''
      //     var createAtData = null
      //     clue?.data.forEach(d=> titleData += `${d.title}`)
      //     clue?.data.forEach(d=> descriptionData += `${d.description}`)
      //     clue?.data.forEach(d=> imageData += `${d.photos}`)
      //     clue?.data.forEach(d=> createAtData += `${d.createAt}`)

      //     this.setState({title: titleData, description: descriptionData, image: imageData, createAt: createAtData.toISOString})
          
      //   })
      // }

    //   componentDidMount(){
    //     this.getData()
    //   }
    // render() {
    //   const {title, description, image, createAt} = this.state
      
//       const dateFormatted = Moment(createAt).format('DDMMYYYY')
//       const dateFromNow = Moment(dateFormatted, "DDMMYYYY").fromNow()
//       console.log(dateFormatted)
//         return (
//             <>
//         <MDBCard className='mb-3 text-white' background="dark"  style={{ maxWidth: '18rem', minWidth: '40vw' }}>
//           <MDBCardBody>
//             <MDBCardTitle dangerouslySetInnerHTML={  {__html: title}}/>
//             <MDBCardText dangerouslySetInnerHTML={  {__html: description}}/>
//             <MDBCardText>   
//                 <small className='text-muted'>Postado {dateFromNow} - Hally</small>
//             </MDBCardText>
//           </MDBCardBody>
          
//           <MDBCardImage position='bottom' src={image}  alt='...' />
//         </MDBCard>
//                   </>
//         )
//     }
// }