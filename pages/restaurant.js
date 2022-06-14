import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import PageTop from '../components/pageTop/pageTop'
import AboutDetails from '../components/about/aboutDetails'
import Footer from '../components/footer/footer'
import Details from '../components/common/details'
import RestaurantInfo from '../components/restaurantInfo/restaurantInfo'
 
 

export default function Restaurant() {
  return (
    <div>
        <TopNavbar/>
         <RestaurantInfo/>
        <Footer/>
    </div>
  )
}
