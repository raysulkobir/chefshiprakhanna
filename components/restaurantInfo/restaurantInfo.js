import Image from 'next/image';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Banner from "../../public/restaurant/banner.png";
import b1 from "../../public/restaurant/r1.jpg";

export default function RestaurantInfo(props) {
   return (
      <Fragment>
        <Container className="marginAndPadding recipes">
            <Row>
                <Col lg={12} md={12} sm={12}>
                    <div className="banner">
                        <Image src={Banner} alt="snack" />
                    </div>
                </Col>
            </Row>
        </Container>

         <Container className="restaurant">
            <Row>
                 <h2 className='heading-three text-center marginAndPadding'>Restaurant Consultant</h2>
                <Col lg={4} md={4} sm={12}>
                    <Image src={b1} alt="snack" />
                </Col>
               <Col lg={8} md={8} sm={12}>
                 <p> “ My love affair with cooking began at the age of nine. I’ve been fortunate to have the opportunity to explore my passion in my native country, India and around the world.

I like to share the love of what I do, to celebrate India’s role in the world via “food and culture ” that inspires me to curate, exclusive Signature menus, pop ups with food and wine Pairing and consultation for restaurants across the Globe and an experience to inspire others to realise their own dreams!

Shipra’s Kitchen insists on excellence in all that we offer, integrity in all that we do and all that we are .. and above all we bring people together and aim on bringing happiness to everyone !</p>
               </Col>
            </Row>
         </Container>
      </Fragment>
   );
}
