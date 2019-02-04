import React from 'react'
import './github.png'
import {Col, Row, Container} from 'reactstrap'
import './kontak.css'

export default function Kontak(){
  return (
    <div className="foot">
      <Container>
      <Row>
      <Col>
        <a href="https://github.com/malicha"><img src ={require('./github.png')} alt="github" width="25%"/></a>
      </Col>
      <Col>
      <a href="https://www.instagram.com/malichalaera_/"><img src ={require('./ig.png')} alt="instagram" width="25%"/></a>
      </Col>
      </Row>
      </Container>
    </div>
  )
}
