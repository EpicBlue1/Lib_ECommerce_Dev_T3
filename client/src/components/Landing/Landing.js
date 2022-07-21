import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtSlider from '../subcomponents/BtnSlider';

const Landing = () => {

    const data = [
        {name: "Hello"},
        {name: "Susan"},
        {name: "Tjm"}
    ]

    const [slideIndex, setSlideIndex] = useState(1);

    const Next = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1);
        } else if(slideIndex === data.length){
            setSlideIndex(1)
        }
    }

    const Prev = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex - 1);
        } else if(slideIndex === 1){
            setSlideIndex(data.length)
        }
    }

    const moveDot = i => {
        setSlideIndex(i)
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            Next();        
        }, 8000);
        return () => clearInterval(interval);
    });

    return (
        <Row className="SliderSec">
            <Col className="SliderSubSec" md={{span: 5, offset: 1}}>
                <h1 className="txtGrayLight"><b>Welcome to Life Is Beautiful</b></h1>
                <br></br>
                <p>Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>

            <Col className="SliderSubSec Slider" md={{span: 6}}>
            <div className="ImageCon">            
                {data.map((obj, i) => {
                    return (
                        <div key={i} className={slideIndex === i + 1 ? 'slide active-anim' : 'slide'}>
                            <div className="SliderImage">{obj.name}</div>
                        </div>
                    )
                })}
            <ButtSlider moveSlide = {Next} direction = {"next"}/>
            <ButtSlider moveSlide = {Prev} direction = {"prev"}/>
            </div>

            <div className="ImageConDots">
                {data.map((obj, i) => {
                    return (
                        <div onClick={() => moveDot (i + 1)} className={slideIndex === i + 1 ? "dot active" : "dot"}>
                        </div>
                    )
                })}
            </div>

            </Col>
        </Row>
    );
};

export default Landing;