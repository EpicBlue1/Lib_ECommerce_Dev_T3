import React, {useState, useEffect, useRef} from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import AllProdLoading from './AllProdLoading';

const AllProducts = (props) => { 

    const [data, setData] = useState(props.AllProductData.sort((a, b) => a.name.localeCompare(b.name)))
    
    const [filterYes, setFilterYes] = useState(true),
    [filterBy, setFilterBy] = useState(),
    [card, setCard] = useState(data.map(Lens =>(<ProductCard brand={Lens.brand} prodCode={Lens.ProductProperties[0].productCode} description={Lens.description} key={Lens._id} img = {Lens.image} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>))),
    [dropDownMode, setDropDownMode] = useState("No Sort"),
    dropDown = useRef()
        
    const Sort_By = () =>{
        let dropDownVal = dropDown.current.value;
        setDropDownMode(dropDownVal);
    }

    useEffect(() => {
        console.log("Updated")
        let prod = data;

        //sorting function
        if(dropDownMode === "No Sort"){
            let filter = data;

            //check if filter
            if(filterYes){
                console.log("not filtering")
            } else {
                console.log("filtering")
                console.log(filterBy)
                filter = prod.filter(Product => Product.brand === filterBy);
            }

            prod = filter;

        } else if (dropDownMode === "Price - Low to High"){
            let filter = data;

            //check if filter
            if(filterYes){
                console.log("not filtering")
            } else {
                console.log("filtering")
                console.log(filterBy)
                filter = prod.filter(Product => Product.brand === filterBy);
            }

            prod = filter.sort((a, b) => a.ProductProperties[0].price - b.ProductProperties[0].price);

        } else if (dropDownMode === "Price - High to Low"){
            let filter = data;

            //check if filter
            if(filterYes){
                console.log("not filtering")
            } else {
                console.log("filtering")
                console.log(filterBy)
                filter = prod.filter(Product => Product.brand === filterBy);
            }

            prod = filter.sort((a, b) => b.ProductProperties[0].price - a.ProductProperties[0].price);
        }

        setCard(prod.map(Lens =>(<ProductCard prodCode={Lens.ProductProperties[0].productCode} setRender={props.setRender} description={Lens.description} key={Lens._id} img = {Lens.image} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} brand={Lens.brand} id={Lens._id}/>)));

        console.log(data);

    }, [dropDownMode], [filterBy], [filterYes]);

    //clear filter
    const clearFilter = () => {
        let checkBoxes = document.getElementsByTagName('input');
        let dropdown = document.getElementsByTagName('select');
        console.log(dropDown);
        for(let i = 0; i < checkBoxes.length; i++){
            checkBoxes[i].checked = false;
        }
        for(let i = 0; i < dropdown.length; i++){
            dropdown[i].selectedIndex = 0;
        }
        setData(props.AllProductData.sort((a, b) => a.name.localeCompare(b.name)))
        setCard(props.AllProductData.filter(Product => Product.brand === Product.brand).map(Lens =>(<ProductCard setRender={props.setRender} description={Lens.description} key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} brand={Lens.brand} id={Lens._id}/>)))

        setFilterYes(true);
    }

    return (
<>
    {props.MainNavBar}
        <Row className="AllProductConSec">
            <Col className="AllProductSubSec" md={{span: 12}}>
                <h1 className="txtGrayDark"><b>Camera Lenses & Accessories</b></h1>
                <br></br>
                <p className="txtGrayDark">Browse our vast assortment of camera lenses, or indulge yourself and make your picture game easier with our exclusive range of accessories.</p>
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

                            setFilterBy('Sony');

                            }} 
                            type="radio" name="radio" 
                        />
                        <p>Sony</p>

                    <div onClick={clearFilter} className='clearFilter-btn'>Clear Filters</div>
                </div>
            </Col>

            <Col className="Products" md={{span: 9}}>
                <Row>
                    <Col className="SortSec" md={6}>
                        <p className="Sort_Num">
                {/* check if any filters are active */}
                            {filterYes ? data.filter(Product => Product.brand === Product.brand).length : data.filter(Product => Product.brand === filterBy).length} Products
                        </p>
                    </Col>
                    <Col className="SortSec" md={6}>
                    <select onChange={Sort_By} ref={dropDown} className="SortBlock">
                        <option>No Sort</option>
                        <option>Price - Low to High</option>
                        <option>Price - High to Low</option>
                    </select>
                        <p className="Sort_By">Sort by:</p>
                    </Col>
                </Row>
                    {card}
            </Col>
        </Row>
</>
    );
};

export default AllProducts;