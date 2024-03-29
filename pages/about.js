import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import PageTop from '../components/pageTop/pageTop'
import AboutDetails from '../components/about/aboutDetails'
import Footer from '../components/footer/footer'
 

export default function about() {
  return (
    <div>
        <TopNavbar/>
        <AboutDetails/>
        <Footer/>
    </div>
  )
}
