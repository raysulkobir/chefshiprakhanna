import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import Footer from '../components/footer/footer'
import NewsEvents from "../components/newsEvents/newsEvents"
 
 

export default function Television() {
  return (
    <div>
        <TopNavbar/>
         <NewsEvents/>
        <Footer/>
    </div>
  )
}
