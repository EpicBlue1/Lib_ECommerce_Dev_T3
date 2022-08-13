import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import Lenses from '../Mock/Lenses.json';
import axios from 'axios';
import { useNavigate } from 'react-router';
import AllProdLoading from './AllProdLoading';

const AllProducts = (props) => { 
    
    const data = props.AllProductData;
    const [filterYes, setFilterYes] = useState(true);
    const [filterBy, setFilterBy] = useState();
    
   //data checker
   if(data === undefined || data === ''){
    return(
            <AllProdLoading MainNavBar={props.MainNavBar}/>
        )
    } 

    //clear filter
    const clearFilter = () => {
        let checkBoxes = document.getElementsByTagName('input');
        for(let i = 0; i < checkBoxes.length; i++){
            checkBoxes[i].checked = false;
        }

        setFilterYes(true);
    }

    return (
<>
    {props.MainNavBar}
        <Row className="AllProductSec">
            <Col className="AllProductSubSec" md={{span: 12}}>
                <h1 className="txtGrayDark"><b>Camera Lenses & Accessories</b></h1>
                <br></br>
                <p className="txtGrayDark">Lorem ipsum dolor sit amet. Ea maxime recusandae in voluptatem quia et voluptatibus consequatur qui galisum impedit vel magni illum qui numquam tenetur est ipsam veniam. Vel repellendus molestiae est ipsam consectetur id autem enim ut consequatur fugit est voluptatem impedit.</p>
            </Col>

            <Col className="FilterSec" md={{span: 3}}>
                <div className="FilterBlock">
                    <h3>Filter By Brand</h3>
                        <input onClick={() => {
                            setFilterYes(false);

                            setFilterBy('Canon');

                            }} 
                            type="radio" name="radio" 
                        />
                        <p>Canon</p>

                        <input onClick={() => {
                            setFilterYes(false);

                            setFilterBy('Nikon');

                            }} 
                            type="radio" name="radio" 
                        />
                        <p>Nikon</p>

                        <input onClick={() => {
                            setFilterYes(false);

                            setFilterBy('Canon');

                            }} 
                            type="radio" name="radio" 
                        />
                        <p>Sony</p>

                    <h3 className='marginTop-h3'>Filter By Category</h3>
                        <input type="radio" name="radio" />
                        <p>Lenses</p>
                        <input type="radio" name="radio" />
                        <p>Accessories</p>
                    <div onClick={clearFilter} className='clearFilter-btn'>Clear Filter</div>
                </div>
            </Col>

            <Col className="Products" md={{span: 9}}>
                <Row>
                    <Col className="SortSec" md={6}>
                        <p className="Sort_Num">
                            {filterYes ? data.filter(Product => Product.brand === Product.brand).length : data.filter(Product => Product.brand === filterBy).length} Products
                        </p>
                    </Col>
                    <Col className="SortSec" md={6}>
                    <select className="SortBlock">
                        <option>No Sort</option>
                        <option>Price - Low to High</option>
                        <option>Price - High to Low</option>
                    </select>
                        <p className="Sort_By">Sort by:</p>
                    </Col>
                </Row>
                    {filterYes ?
                        data.filter(Product => Product.brand === Product.brand).map(Lens =>(<ProductCard key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>))
                        : data.filter(Product => Product.brand === filterBy).map(Lens =>(<ProductCard key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>))
                    }
            </Col>
        </Row>
</>
    );
};

export default AllProducts;