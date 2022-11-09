import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "./Modals/CartModal";

const NavigationBar = (props) => {
  const [Show, setShow] = useState(false),
    [logPop, setLogPop] = useState(false),
    email = useRef(),
    password = useRef(),
    form = useRef(),
    [logedIn, setLogedIn] = useState(),
    [Username, setUsername] = useState(""),
    [Log, setLog] = useState(false),
    [count, setCount] = useState(0),
    [update, setUpdate] = useState(true),
    [validatePass, setValidatePass] = useState(false),
    Navigate = useNavigate();

  let cart = JSON.parse(sessionStorage.getItem("cart"));
  let user = sessionStorage.getItem("user");

  useEffect(() => {
    if (cart === undefined || cart === null) {
      setCount(0);
    } else {
      console.log(cart.length);
      for (let i = 0; i < cart.length; i++) {
        setCount(i + 1);
      }
      setUpdate(!update);
    }
  }, [props.Render]);

  useEffect(() => {
    if (user === "" || user === null || user === undefined) {
      setLogedIn("Log In");
      setLog(false);
    } else {
      for (let i = 0; i < user.length; i++) {
        setLogedIn("Log Out");
        setLog(true);
      }
    }
  }, [user, logedIn]);

  const hidePop = () => {
    setLogPop(!logPop);
  };

  const logIn = (e) => {
    e.preventDefault();

    let credentials = {
      email: email.current.value,
      password: password.current.value,
    };

    console.log(credentials);

    axios
      .post("http://localhost:2000/api/login/", credentials)
      .then((res) => {
        console.log(res.data);
        sessionStorage.setItem("user", res.data.email);
        sessionStorage.setItem("admin", res.data.admin);
        sessionStorage.setItem("username", res.data.userName);
        sessionStorage.setItem("details", JSON.stringify(res.data.details));
        sessionStorage.setItem("id", res.data.id);

        if (res.data.user) {
          if (res.data.admin) {
            Navigate("/Inventory");
            setLogPop(!logPop);
            form.current.reset();
          } else {
            setLogPop(!logPop);
            setValidatePass(false);
            setUsername(res.data.userName);
            setLogedIn("Log out");
            setLog(true);
            form.current.reset();
          }
        } else {
          setValidatePass(true);
          sessionStorage.clear();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Row className="Navigation">
      <div className={logPop ? "log_pop_con" : "hide"}>
        <div className={Log ? "hide" : "log_pop"}>
          <h1>Welcome</h1>
          <form ref={form} onSubmit={logIn}>
            <input
              required
              ref={email}
              className="login-Input"
              placeholder="email"
              type="email"
            />
            <input
              required
              ref={password}
              className="login-Input"
              placeholder="password"
              type={password}
            />
            <div className={validatePass ? "Incorrect-Log" : "hide"}>
              Email or Password Incorrect
            </div>
            <button type="submit" className="login-btn">
              Log In
            </button>
            <div
              onClick={() => (setLogPop(!logPop), setValidatePass(false))}
              className="login-btn"
            >
              Cancel
            </div>
          </form>
        </div>
        <div className={Log ? "log_pop_out" : "hide"}>
          <h1>Log Out?</h1>
          <form onSubmit={logIn}>
            <div
              onClick={() => (
                setLogPop(!logPop),
                setLogedIn("Log In"),
                setUsername(""),
                sessionStorage.removeItem("user"),
                sessionStorage.removeItem("admin"),
                sessionStorage.removeItem("username"),
                sessionStorage.removeItem("details"),
                sessionStorage.removeItem("id"),
                setLog(false)
              )}
              className="login-btn"
            >
              Confirm
            </div>
            <div onClick={() => setLogPop(!logPop)} className="login-btn">
              Cancel
            </div>
          </form>
        </div>
      </div>
      <Col className="NavObject Logo" md={{ span: 2, offset: 1 }}>
        LIB
      </Col>
      <Col className="NavObject Item" md={{ span: 1 }}>
        <Link to="/">Home</Link>
      </Col>
      <Col className="NavObject Item" md={{ span: 1 }}>
        <Link to="/AllProducts">Products</Link>
      </Col>
      <Col className="NavObject Item" md={{ span: 1 }}></Col>
      <Col
        onClick={hidePop}
        className="NavObject Item Log-In"
        md={{ span: 1, offset: 2 }}
      >
        {logedIn}
      </Col>
      <Col className="NavObject Item" md={{ span: 1 }}>
        {Username}
      </Col>
      <Col
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        className="NavObject"
        md={{ span: 1, offset: 1 }}
      >
        <div className={Show ? "cartIcon cartHover" : "cartIcon"}></div>
        <div className="cartNum">{count}</div>
        <CartModal
          setRender={props.setRender}
          Rerender={props.Render}
          Show={Show}
          update={update}
          setShow={setShow}
        />
      </Col>
    </Row>
  );
};

export default NavigationBar;
