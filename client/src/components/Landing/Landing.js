import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ButtSlider from '../subcomponents/BtnSlider';
import Onsale from './OnSale';
import NewProds from './NewProds';
import Brands from './Brands'

const Landing = () => {

    const data = [
        {id: 0, name: "Hello"},
        {id: 1, name: "Susan"},
        {id: 2, name: "Tjm"}
    ]

    const [slideIndex, setSlideIndex] = useState(1);

    const Next = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex + 1);
        } else if(slideIndex === data.length){
            setSlideIndex(1);
        }
    }

    const Prev = () => {
        if(slideIndex !== data.length){
            setSlideIndex(slideIndex - 1);
            console.log(slideIndex);
        } else if(slideIndex === 1){
            setSlideIndex(data.length - 1);
            console.log(slideIndex);
        }
    }

    const moveDot = i => {
        setSlideIndex(i);
    }

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log(slideIndex)
            Next();        
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
    <>
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
                        <div key={obj.id} className={slideIndex === i + 1 ? 'slide active-anim' : 'slide'}>
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
                        <div key={obj.id} onClick={() => moveDot (i + 1)} className={slideIndex === i + 1 ? "dot active" : "dot"}>
                        </div>
                    )
                })}
            </div>

            </Col>
        </Row>
        <Onsale/>
        <NewProds/>
        <Brands/>
    </>
    );
};

export default Landing;