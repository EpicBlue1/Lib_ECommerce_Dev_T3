import axios from "axios";
import React from "react";

const AdminItems = (props) => {
  console.log(props.allData);
  const dispatch = () => {
    console.log("clicked");

    let payload = {
      ProductProperty: "red",
      totalAvail: props.allData.avail - props.allData.qty,
      price: props.allData.price,
      discount: props.allData.discount,
      productCode: 11,
      qty: props.allData.qty,
    };
    //edit product
    axios
      .patch(
        "http://localhost:2000/api/editDispatch/" + props.allData.id,
        payload
      )
      .then((res) => {
        axios
          .delete("http://localhost:2000/api/removeOrder/" + props.id)
          .then((res) => {
            console.log(res);
            if (res) {
              props.setUpdate(!props.update);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    //delete order
  };

  return (
    <div key={props.allData.id} className="ProductPen">
      <div
        className="inv-img"
        style={{
          backgroundImage: `url("http://localhost:2000/images/" + ${props.allData.image})`,
        }}
      ></div>
      <div className="pad-proName">{props.allData.name}</div>
      <div className="inv-icon"></div>
      <div className="pad-price">Price: R{props.allData.price}</div>
      <div className="pad-price"> R{props.allData.discount}</div>
      <div className={props.allData.discount ? "discoount_yes" : ""}>{""}</div>
      <div onClick={dispatch} className="pen-edit">
        Dispatch
      </div>
    </div>
  );
};

export default AdminItems;
