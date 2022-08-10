import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import ButtSlider from '../subcomponents/BtnSlider';
import Onsale from './OnSale';
import NewProds from './NewProds';
import Brands from './Brands';
import Lenses from '../Mock/Lenses.json';
import axios from 'axios';

const Landing = (props) => {

    const [productImages, setproductImages] = useState();
    const [productCards, setProductCards] = useState();
    const [dots, setDots] = useState();

    const [slideIndex, setSlideIndex] = useState(1);

    const Next = () => {
        if(slideIndex !== productImages.length){
            setSlideIndex(slideIndex + 1);
        } else if(slideIndex === productImages.length){
            setSlideIndex(1);
        }
    }

    const Prev = () => {
        if(slideIndex !== productImages.length){
            setSlideIndex(slideIndex - 1);
            console.log(slideIndex);
        } else if(slideIndex === 1){
            setSlideIndex(productImages.length - 1);
            console.log(slideIndex);
        }
    }

    const moveDot = i => {
        setSlideIndex(i);
    }

    useEffect(() =>{

        axios.get('http://localhost:2000/api/allproducts')
        .then((res) => {
            console.log(res.data)
            let data = res.data;
            data = data.filter(Lens => Lens.ProductProperties[0].discount > 0);

            setproductImages(data.map((obj, i) => {
                return (
                    <div key={obj.id} className={slideIndex === i + 1 ? 'slide active-anim' : 'slide'}>
                        <div className="SliderImage txtGrayDark" style={{ backgroundImage: `url(${obj.images[0]})`}}><b>{obj.name}</b></div>
                    </div>
                )
            }))

            setDots(data.map((obj, i) => {
                return (
                    <div key={obj.id} onClick={() => moveDot (i + 1)} className={slideIndex === i + 1 ? "dot active" : "dot"}>
                    </div>
                )
            }))
        })

    }, []);

    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log(slideIndex)
            Next();        
        }, 3000);
        return () => clearInterval(interval);
    });

    return (
    <>
        {props.MainNavBar}
        <Row className="SliderSec">
            <Col className="SliderSubSec" md={{span: 6, offset: 1}}>
                <h1 className="txtGrayDark"><b>Welcome to Life Is Beautiful</b></h1>
                <br></br>
                <p className="SliderSubSecPar txtGrayDark">Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>

            <Col className="SliderSubSecRight Slider" md={{span: 5}}>
            <div className="ImageCon">            
                {productImages}
            <ButtSlider moveSlide = {Next} direction = {"next"}/>
            <ButtSlider moveSlide = {Prev} direction = {"prev"}/>
            </div>

            <div className="ImageConDots">
                {dots}
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