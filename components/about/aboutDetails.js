import Image from 'next/image';
import React, { Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import about from "../../public/about/about-me.jpg";

export default function AboutDetails(props) {
   return (
      <Fragment>
         <Container fluid className="marginAndPadding topFixeBannerAbout p-0"> 
            <Row className="p-0">
               <Col lg={12} md={12} sm={12} className="p-0"> </Col>
            </Row>
         </Container>
         <Container className="about-image">
             <Row>
               <Col lg={12} md={12} sm={12}>
                  <Image src={about} alt="snack" />
               </Col>
            </Row>
         </Container>
         <Container className="about">
            <Row>
               <Col>
                 <p className="p-one">Masterchef Shipra Khanna is recognized as one of the top Indian celebrities as well as globally. She has been working extensively in India and across the globe. Her love affair with cooking began at the age of nine.

Winner of Master Chef India 2, Star Plus After winning Master Chef, she began to host her own cooking show “Kitchen Stars ka Safar” on Star Plus

Chef Shipra’s specialty is Global cuisine, Indian, baking, Desserts and fusion food. She is a Restaurateur, Chef, Consultant, Author and an Anchor for T.V. shows. with a huge Social Media following. She has been awarded “Women Chef taking taste beyond borders” by SAARC and SCWEC in Nepal and was representing India. She has been felicitated by the CM of Himachal Pradesh Mr Dhummal and Rotary International. She has also been awarded “Himachali of the Year”. She has inaugurated the Tandoor at Le Cordon Blue, Paris and been honoured!

She is “the Youngest and one of the most Glamorous chefs in the world” according to India Today, Her book”Sinfully Yours” has won the Best Cook Book award at the World Gourmand Awards, in China in May 2017 being the first Indian book to win this award.

Her popular show “Pure Sin” is the first and the only dessert show in India. She has done numerous shows around the world. Masterlcass with Shipra Khanna is also the face of TataSky Cooking in India, Good Food Guide with Star Plus UAE , “Flavours of Ramadan” on Sony, UAE and Desi Gourmet cooking with Chef Shipra on Colors and Colors HD in U.S.A.

She has her digital channel called “Shipra’s Kitchen”.

Travelling the world propagating Indian food across the globe, she has traveled with the ministry of Tourisms of Australia, Singapore, Switzerland, Britain, France and Oman as an ambassador of Masterchef Travel with Cox and kings.

Chef Shipra has consulted for a lot of restaurants in India and Abroad</p>
               </Col>
            </Row>
         </Container>
      </Fragment>
   );
}
