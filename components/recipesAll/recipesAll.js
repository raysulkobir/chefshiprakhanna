import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
import breakfast from "../../public/recipe/breakfast.png"
import lunch from "../../public/recipe/lunch.png"
import snack from "../../public/recipe/snack.png"
import dinner from "../../public/recipe/dinner.png"
import all_time_meal from "../../public/recipe/all-time-meal.png"
import desserts from "../../public/recipe/desserts.png"
 
export default function RecipesAll(){
    return(
        <Fragment>
            <Container className="marginAndPadding recipes">
                <Row>
                    <h2 className='heading-three text-center mt-5 marginAndPadding'>Recipes</h2>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={breakfast} alt="snack" />
                            <Card.Body>
                                <Card.Title>BREAKFAST</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={lunch} alt="snack" />
                            <Card.Body>
                                <Card.Title>LUNCH</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={snack} alt="snack" />
                            <Card.Body>
                                <Card.Title>SNACKS</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={dinner} alt="snack" />
                            <Card.Body>
                                <Card.Title>DINNER</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                     <Col lg={4} md={4} sm={6}>
                        <Card>
                            <Image src={all_time_meal} alt="snack" />
                            <Card.Body>
                                <Card.Title>ALL TIME MEALS</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                             <Image src={desserts} alt="snack" />
                            <Card.Body>
                                <Card.Title>DESSERTS</Card.Title>
                                <a href="recipe-category"> <Button className="primary">View Recipe</Button></a>
                            </Card.Body>
                        </Card>
                    </Col>
                    
                </Row>
            </Container>
        </Fragment>
    )
}
