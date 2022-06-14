import React from 'react'
import { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import TopNavbar from '../components/topNavbar/topNavbar'
import Footer from '../components/footer/footer'
import RecipesAll from '../components/recipesAll/recipesAll'
 

export default function Recipes() {
  return (
    <div>
        <TopNavbar/>
        <RecipesAll/>
        <Footer/>
    </div>
  )
}
