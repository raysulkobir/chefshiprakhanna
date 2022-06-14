import Image from 'next/image'
import React from 'react'
import { Fragment } from 'react'
import { Col, Card, Button, Container, Row } from 'react-bootstrap'
import breakfast from "../../public/recipe/breakfast.png"
import n1 from "../../public/news-events/n1.jpg";
import n2 from "../../public/news-events/n2.jpg";
import n3 from "../../public/news-events/n3.jpg";
import n4 from "../../public/news-events/n4.jpg";
import n5 from "../../public/news-events/n5.jpg";
import n6 from "../../public/news-events/n6.jpg";
import n7 from "../../public/news-events/n7.jpg";
import n8 from "../../public/news-events/n8.jpg";
import n9 from "../../public/news-events/n9.jpg";
import n10 from "../../public/news-events/n10.jpg";
import n11 from "../../public/news-events/n11.jpg";
import n12 from "../../public/news-events/n12.jpg";
import n13 from "../../public/news-events/n13.jpg";
import n14 from "../../public/news-events/n14.jpg";
import n15 from "../../public/news-events/n15.jpg";
 

export default function newsEvents(){
    return(
        <Fragment>
            <Container className="marginAndPadding news">
                <Row>
                    <h2 className='heading-three text-center mt-5 marginAndPadding'>Home > news-events</h2>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n1} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n2} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n3} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n4} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n5} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n6} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n7} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n8} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n9} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n10} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n12} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n13} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n14} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n15} alt="snack" />
                        </Card>
                    </Col>
                    <Col lg={4} md={4} sm={6}>
                         <Card>
                            <Image src={n1} alt="snack" />
                        </Card>
                    </Col>
                     
                </Row>
            </Container>
        </Fragment>
    )
}
