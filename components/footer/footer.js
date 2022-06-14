import React, {Fragment} from "react";
import {Container, Row, Col} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faYoutube, faInstagram, faGooglePlus} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Footer(){
   return(
      <Fragment>
         <Container className="marginAndPadding footerSection">
            <Row className="footer-menu text-center">
               <Col lg={12} md={12} sm={12}>
                  <div className="d-flex">
                        <ul className="list-inline mx-auto justify-content-center">
                           <li><Link href="/">Privacy Policy</Link></li> 
                           <li><Link href="/about">Terms and Conditions Policy</Link></li> 
                           <li><Link href="/contact">Return, Refund and Cancellation Policy</Link></li>
                        </ul>
                  </div>
               </Col>
            </Row>
         </Container>
      </Fragment>
   )
}