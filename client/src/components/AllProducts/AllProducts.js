import React, {useState, useEffect, useRef} from 'react';
import { Container, Row, Col, Dropdown } from 'react-bootstrap';
import ProductCard from '../subcomponents/ProductCard';
import AllProdLoading from './AllProdLoading';

const AllProducts = (props) => { 
    
    const [data, setData] = useState(props.AllProductData.sort((a, b) => a.name.localeCompare(b.name))),
    untouchedData = props.AllProductData.sort((a, b) => a.name.localeCompare(b.name)),
    [filterYes, setFilterYes] = useState(true),
    [filterBy, setFilterBy] = useState(),
    [card, setCard] = useState(data.map(Lens =>(<ProductCard key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>))),
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

        setCard(prod.map(Lens =>(<ProductCard key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>)));

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
        setCard(props.AllProductData.filter(Product => Product.brand === Product.brand).map(Lens =>(<ProductCard key={Lens._id} img = {Lens.images[0]} name = {Lens.name} price = {Lens.ProductProperties[0].price} discount={Lens.ProductProperties[0].discount} id={Lens._id}/>)))

        setFilterYes(true);
    }

    //data checker
    if(data === undefined || data === ''){
        return(<AllProdLoading MainNavBar={props.MainNavBar}/>)
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

                            setFilterBy('Sony');

                            }} 
                            type="radio" name="radio" 
                        />
                        <p>Sony</p>

                    <h3 className='marginTop-h3'>Filter By Category</h3>
                        <input type="radio" name="radio" />
                        <p>Lenses</p>
                        <input type="radio" name="radio" />
                        <p>Accessories</p>
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