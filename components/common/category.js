import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
import lunch from "../../public/recipe/lunch.png"
import snack from "../../public/recipe/snack.png"
import p1 from "../../public/category/p1.jpg";
import p2 from "../../public/category/p2.jpg";
import p3 from "../../public/category/p3.jpg";
import p4 from "../../public/category/p4.jpg";
import p5 from "../../public/category/p5.jpg";
import p6 from "../../public/category/p6.png";
import p7 from "../../public/category/p7.jpg";
import p8 from "../../public/category/p8.jpg";
import p9 from "../../public/category/p9.jpg";

import desserts from "../../public/recipe/desserts.png"
 
 
export default function RecipesAll(){
    return(
        <Fragment>
            <Container fluid className="marginAndPadding topFixeBanner banner p-0">
                <Row>
                   <Col lg={12} md={12} sm={12}>
                        <div className=""></div>
                    </Col>
                </Row>
            </Container>
            <Container className="recipes">
                <Row>
                    <h2 className='heading-three text-center my-5'>Home > Recipes</h2>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={p1} alt="snack" />
                            <Card.Body>
                                <Card.Title>Tangy Thai chicken salad</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={p2} alt="snack" />
                            <Card.Body>
                                <Card.Title>Rajma Chawal Arancini</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={p3} alt="snack" />
                            <Card.Body>
                                <Card.Title>Stuffed Bell Peppers</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={p4} alt="snack" />
                            <Card.Body>
                                <Card.Title>Spinach Risotto</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col lg={4} md={4} sm={6}>
                        <Card>
                            <Image src={p5} alt="snack" />
                            <Card.Body>
                                <Card.Title>Almond Soup</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={p6} alt="snack" />
                            <Card.Body>
                                <Card.Title>Hara Maas</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={p7} alt="snack" />
                            <Card.Body>
                                <Card.Title>Fish Curry</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={p8} alt="snack" />
                            <Card.Body>
                                <Card.Title>Coconut Sticky Rice with Mango</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={p9} alt="snack" />
                            <Card.Body>
                                <Card.Title>Mutton Biryani</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={desserts} alt="snack" />
                            <Card.Body>
                                <Card.Title>Quails</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={snack} alt="snack" />
                            <Card.Body>
                                <Card.Title>Fish Stuffed Prawns</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={lunch} alt="snack" />
                            <Card.Body>
                                <Card.Title>Pork</Card.Title>
                                <Card.Subtitle>LUNCH</Card.Subtitle>
                                <a href="single"><Button className="primary">View Recipe</Button></a> 
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </Fragment>
    )
}
