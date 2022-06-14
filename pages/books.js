import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import Footer from '../components/footer/footer'
import Book from '../components/book/book'
 

export default function Books() {
  return (
    <div>
        <TopNavbar/>
        <Book/>
        <Footer/>
    </div>
  )
}
