import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Landing = () => {

    const data = [
        {name: "Hello"},
        {name: "Hello"},
        {name: "Hello"}
    ]

    return (
        <Row className="SliderSec">
            <Col className="SliderSubSec" md={{span: 5, offset: 1}}>
                <h1 className="txtGrayLight"><b>Welcome to Life Is Beautiful</b></h1>
                <br></br>
                <p>Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>
            <Col className="SliderSubSec Slider" md={{span: 6}}><div className="ImageCon">            
            {data.map((obj, i) => {
                return (
                    <div>
                        lol
                    </div>
                )
            })}</div><div className="ImageConDots"></div></Col>
        </Row>
    );
};

export default Landing;