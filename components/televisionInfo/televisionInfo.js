import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
import breakfast from "../../public/recipe/breakfast.png"
import t1 from "../../public/television/t1.jpg"
import t2 from "../../public/television/t2.png"
import t3 from "../../public/television/t3.png"
import t4 from "../../public/television/t4.png"
import t5 from "../../public/television/t5.png"
import t6 from "../../public/television/t6.png"
import t7 from "../../public/television/t7.jpg"
import t8 from "../../public/television/t8.png"
import t9 from "../../public/television/t9.png"
import t10 from "../../public/television/t10.jpg"
import t11 from "../../public/television/t11.jpg"
import t12 from "../../public/television/t12.jpg"

export default function TelevisionInfo(){
    return(
        <Fragment>
            <Container className="marginAndPadding recipes">
                <Row>
                    <h2 className='heading-three text-center mt-5 marginAndPadding'>Home > Television</h2>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t1} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t2} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">K for Kids</Card.Title>
                                <Card.Text>Exclusive Show of Desi Cooking with Master Chef Shipra Khanna.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t3} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t4} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t5} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t6} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t7} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t8} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t9} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t10} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t11} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={t12} alt="snack" />
                            <Card.Body>
                                <Card.Title className="text-center mb-3">Britannia Star Chef</Card.Title>
                                <Card.Text>Teaming up with Britannia, Shipra teaches Saif Ali Khan some easy ways to cook cheesy delicacies.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    )
}
