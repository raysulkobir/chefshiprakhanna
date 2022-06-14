import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import Footer from '../components/footer/footer'
import Category from "../components/common/category"
 

export default function Recipes() {
  return (
    <div>
        <TopNavbar/>
        <Category/>
        <Footer/>
    </div>
  )
}
