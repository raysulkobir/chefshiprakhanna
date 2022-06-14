import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
 
import b1 from "../../public/books/b1.jpg";
import b2 from "../../public/books/b2.jpeg";
import b3 from "../../public/books/b3.jpeg";
import b4 from "../../public/books/b4.jpg";
import b5 from "../../public/books/b5.jpg";
import b6 from "../../public/books/b6.jpg";
import Banner from "../../public/books/book_banner.jpg";
 
 
export default function RecipesAll(){
    return(
        <Fragment>
            <Container fluid className="marginAndPadding recipes">
                <Row>
                    <Col lg={12} md={12} sm={12}>
                        <div className="banner">
                            <Image src={Banner} alt="snack" />
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="recipes">
                <Row>
                    <h2 className='heading-three text-center my-5'>Home > Books</h2>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b1} alt="snack" />
                            <Card.Body>
                                <Card.Title>The Spice Route: 1 Paperback</Card.Title>
                                <Card.Subtitle>₹ 400</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b2} alt="snack" />
                            <Card.Body>
                                <Card.Title>Sinfully Yours Paperback</Card.Title>
                                <Card.Subtitle>₹ 269</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b3} alt="snack" />
                            <Card.Body>
                                <Card.Title>Super Foods for Awesome Memory Paperback</Card.Title>
                                <Card.Subtitle>₹ 269</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b4} alt="snack" />
                            <Card.Body>
                                <Card.Title>Simply Gujarati Paperback</Card.Title>
                                <Card.Subtitle>₹ 269</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b5} alt="snack" />
                            <Card.Body>
                                <Card.Title>Simply Maharashrian Paperback</Card.Title>
                                <Card.Subtitle>₹ 269</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={b6} alt="snack" />
                            <Card.Body>
                                <Card.Title>Simply Rajasthani Paperback</Card.Title>
                                <Card.Subtitle>₹ 269</Card.Subtitle>
                            </Card.Body>
                        </Card>
                    </Col>
                    <p className='p-one'>
                        Books are an essential when it comes to widening your horizons. When it comes to cooking up new dishes, sometimes all you want to do is pick up a book and follow the step by step process to a delicious result. Here are some of the books I have authored in the past few years to bring foodgasm to your table!
                    </p>
                </Row>
            </Container>
        </Fragment>
    )
}
