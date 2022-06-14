import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import Footer from '../components/footer/footer'
import TelevisionInfo from "../components/televisionInfo/televisionInfo"
 
 

export default function Television() {
  return (
    <div>
        <TopNavbar/>
         <TelevisionInfo/>
        <Footer/>
    </div>
  )
}
