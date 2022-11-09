const express = require("express");
const router = express();
const productSchema = require("./models/products");
const ordersSchema = require("./models/orders");
const addOrder = require("./models/order");
const multer = require("multer");
const path = require("path");

//multer
const productImage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    console.log(file);
    //credit: Mike :)
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const uploadProductImage = multer({ storage: productImage });

//add products
router.post(
  "/api/addproduct",
  uploadProductImage.single("prodImage"),
  (req, res) => {
    let data = JSON.parse(req.body.prodInfo);

    const newProduct = new productSchema({
      name: data.name,
      brand: data.brand,
      category: data.category,
      ProductProperties: {
        productProperty: data.ProductProperties.productProperty,
        totalAvail: data.ProductProperties.totalAvail,
        price: data.ProductProperties.price,
        productCode: data.ProductProperties.productCode,
        discount: data.ProductProperties.discount,
      },
      description: data.description,
      image: req.file.filename,
    });

    newProduct
      .save()
      .then((item) => {
        res.json(item);
      })
      .catch((err) => {
        res.status(400).json({
          Message: "There was an error",
          err: err,
        });
      });
  }
);

//add orders
router.post("/api/addorder", (req, res) => {
  const newOrder = new addOrder({
    orders: req.body.orders,
    userId: req.body.userId,
  });
  newOrder
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({
        Message: "There was an error",
        err: err,
      });
    });
});

router.get("/api/allorders", async (req, res) => {
  const findProducts = await addOrder.find();
  res.json(findProducts);
});

router.patch("/api/editDispatch/:id", async (req, res) => {
  const upProduct = await productSchema.updateOne(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        brand: req.body.brand,
        category: req.body.category,
        ProductProperties: {
          ProductProperty: req.body.ProductProperty,
          totalAvail: req.body.totalAvail,
          price: req.body.price,
          discount: req.body.discount,
          productCode: req.body.productCode,
        },
        description: req.body.description,
        image: req.body.image,
      },
    }
  );
});

//add order
router.post("/api/addorders", (req, res) => {
  const newOrder = new ordersSchema({
    orderNo: req.body.orderNo,
    customer: req.body.customer,
    DeliveryInfo: req.body.DeliveryInfo,
    OrderDone: req.body.OrderDone,
    products: req.body.products,
    productId: req.body.products.productId,
    qty: req.body.products.qty,
  });
  newOrder
    .save()
    .then((item) => {
      res.json(item);
    })
    .catch((err) => {
      res.status(400).json({
        Message: "There was an error",
        err: err,
      });
    });
});

router.get("/api/allproducts", async (req, res) => {
  const findProducts = await productSchema.find();
  res.json(findProducts);
});

router.patch("/api/updateProduct/:id", async (req, res) => {
  const upProduct = await productSchema.updateOne(
    { _id: req.params.id },
    {
      $set: {
        ProductProperties: {
          ProductProperty: req.body.ProductProperty,
          totalAvail: req.body.totalAvail,
          price: req.body.price,
          discount: req.body.discount,
          productCode: req.body.productCode,
        },
      },
    }
  );
  res.json("What even");
});

router.delete("/api/removeOrder/:id", async (req, res) => {
  console.log(req.params.id);
  const deleteProduct = await addOrder.deleteOne({ _id: req.params.id });
  res.json(deleteProduct);
});

router.delete("/api/deleteProduct/:id", async (req, res) => {
  console.log(req.params.id);
  const deleteProduct = await productSchema.deleteOne({ _id: req.params.id });
  res.json(deleteProduct);
});

module.exports = router;
