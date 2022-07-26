import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { RenderContext } from "../../Contexts/RenderContext";

const AddProduct = (props) => {
  const prodName = useRef(),
    brand = useRef(),
    category = useRef(),
    description = useRef(),
    totalAvail = useRef(),
    productProperty = useRef(),
    price = useRef(),
    productCode = useRef(),
    discount = useRef(),
    img = useRef(),
    ImgPreview = useRef(),
    form = useRef(),
    [Image, setImage] = useState(),
    { rendered, setRender } = useContext(RenderContext);

  useEffect(() => {}, []);
  const hideModal = (e) => {
    e.preventDefault();
    props.setShow(false);
  };

  const getImage = () => {
    let ImageFile = img.current.files[0];
    setImage(ImageFile);

    let reader = new FileReader();
    reader.onload = () => {
      let output = ImgPreview.current;
      output.src = reader.result;
    };

    reader.readAsDataURL(ImageFile);
  };

  const AddProduct = (e) => {
    e.preventDefault();
    const newProduct = new FormData();
    let product = {
      name: prodName.current.value + " - " + productProperty.current.value,
      brand: brand.current.value,
      category: category.current.value,
      ProductProperties: {
        productProperty: productProperty.current.value,
        totalAvail: +totalAvail.current.value,
        price: +price.current.value,
        discount: +discount.current.value,
        productCode: +productCode.current.value,
      },
      description: description.current.value,
    };

    newProduct.append("prodInfo", JSON.stringify(product));
    newProduct.append("prodImage", Image);

    axios
      .post("http://localhost:2000/api/addproduct", newProduct)
      .then((res) => {
        console.log(res.data);
        form.current.reset();
        setRender((prev) => !prev);
        props.setShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={props.show ? "add-product" : "hide"}>
      <h1>Add Product</h1>
      <br></br>
      <form ref={form} onSubmit={AddProduct}>
        <div className="preview-image">
          <img className="prevImage" ref={ImgPreview} />
        </div>

        <input
          required
          type="file"
          name="uploadedImg"
          ref={img}
          onChange={getImage}
        />
        <input
          required
          ref={prodName}
          className="input-style"
          type="text"
          placeholder="Product Name"
        />
        <input
          required
          ref={description}
          className="input-style"
          type="text"
          placeholder="Description"
        />
        <input
          required
          ref={productProperty}
          className="input-style"
          type="text"
          placeholder="Product Property"
        />
        <input
          required
          ref={productCode}
          className="input-style"
          type="text"
          placeholder="Product Code"
        />
        <input
          required
          ref={totalAvail}
          className="input-style"
          type="number"
          placeholder="Total Available"
        />

        <select ref={brand} className="input-style">
          <option>Canon</option>
          <option>Nikon</option>
          <option>Sony</option>
        </select>
        <select
          ref={category}
          defaultValue={"fixed_Lenses"}
          className="input-style"
        >
          <option value={"zoom_lenses"}>Zoom Lenses</option>
          <option value={"wide_Lenses"}>Wide Lenses</option>
          <option value={"fixed_Lenses"}>Fixed Lenses</option>
          <option value={"Accessories"}>Accessories</option>
        </select>

        <input
          required
          ref={price}
          className="input-style"
          type="text"
          placeholder="Price"
        />
        <input
          required
          ref={discount}
          className="input-style"
          type="number"
          placeholder="Discount"
        />
        <button type="submit" className="add-btn">
          Add Product
        </button>
        <button type="none" onClick={hideModal} className="closeBtn">
          Close
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
