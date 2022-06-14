import react, { Fragment } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image"
import kitchen from "../../public/menu/kitchen.png";
import books  from "../../public/menu/books.png";
import restaurant   from "../../public/menu/restaurant.png";
import television   from "../../public/menu/television.png";
import calendars   from "../../public/menu/calendars.jpg";
import about   from "../../public/menu/about-me.jpg";

 

const Home = () => {
    return(
        <Fragment>
            <Container className="header-logo">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <img src="https://chefshiprakhanna.com/wp-content/uploads/2020/07/head-logo.png" alt="me" width="64" height="64" />
                    </Col>
                </Row>
            </Container>

            <Container className="marginAndPadding img-menu">
                <Row>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={kitchen} alt="me" width="64" height="64" />
                         <br/>
                        <Link href="/recipes"> 
                            <a>Kitchen</a> 
                        </Link>
                    </Col>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={books } alt="me" width="64" height="64" />
                        <br/>
                        <Link href="/books"> 
                            <a>books</a> 
                        </Link>
                    </Col>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={restaurant } alt="me" width="64" height="64" />
                         <br/>
                        <Link href="/restaurant"> 
                            <a>Restaurant</a> 
                        </Link>
                    </Col>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={television } alt="me" width="64" height="64" />
                         <br/>
                        <Link href="/about"> 
                            <a>Relevision</a> 
                        </Link>
                    </Col>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={calendars } alt="me" width="64" height="64" />
                         <br/>
                        <Link href="/about"> 
                            <a>Calendars</a> 
                        </Link>
                    </Col>
                    <Col lg={2} md={2} sm={6}>
                        <Image src={about } alt="me" width="64" height="64" />
                         <br/>
                        <Link href="/about"> 
                            <a>About me</a> 
                        </Link>
                    </Col>
                </Row>
            </Container>
            {/* footer section */}
            <Container className="marginAndPadding">
                <Row className="website-link">
                    <Col lg={12} md={12} sm={12}>
                        <Link href="">
                            <a>www.cv.havingmart.com</a>
                        </Link>
                    </Col>
                </Row>
            </Container>
            
         </Fragment>
    )
}

export default Home;

