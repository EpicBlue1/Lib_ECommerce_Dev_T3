const express = require('express');
const productSchema = require('./models/products');
const ordersSchema = require('./models/orders');
const usersSchema = require('./models/users')

const router = express()

//add products
router.post('/api/addproduct', (req, res) => {
    const newProduct = new productSchema(
        {
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            ProductProperties: req.body.ProductProperties,
            ProductProperty: req.body.ProductProperties.ProductProperty,
            totalAvail: req.body.ProductProperties.totalAvail,
            price: req.body.ProductProperties.price,
            discount: req.body.discount,
            description: req.body.description,
            images: req.body.images
        }
    );

    newProduct.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json(
            {
                Message: "There was an error",
                err: err
            }
        );
    });
});

//add order
router.post('/api/addorder', (req, res) => {
    const newOrder = new ordersSchema(
        {
            orderNo: req.body.orderNo,
            customer: req.body.customer,
            DeliveryInfo: req.body.DeliveryInfo,
            OrderDone: req.body.OrderDone,
            products: req.body.products,
            productId: req.body.products.productId,
            qty: req.body.products.qty
        }
    );

    newOrder.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json(
            {
                Message: "There was an error",
                err: err
            }
        );
    });
});

//add user
router.post('/api/adduser', (req, res) => {
    const newUser = new usersSchema(
        {
            userName: req.body.userName,
            userEmail: req.body.userEmail,
            ShippingAddress: req.body.ShippingAddress,
            stAddress: req.body.ShippingAddress.stAddress,
            city: req.body.ShippingAddress.city,
            province: req.body.ShippingAddress.province,
            postalCode: req.body.ShippingAddress.postalCode,
            userPassword: req.body.userPassword,
            admin: req.body.admin
        }
    );

    newUser.save()
    .then(item => {
        res.json(item);
    })
    .catch(err => {
        res.status(400).json(
            {
                Message: "There was an error",
                err: err
            }
        );
    });
});

router.get('/api/allproducts', async (req, res) => {
    const findProducts = await productSchema.find()
    res.json(findProducts);
});

module.exports = router;