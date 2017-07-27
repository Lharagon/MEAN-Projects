var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path')
var session = require('express-session');

var sessionConfig = {
  secret: 'CookieMonster',
  resave: false,
  saveUninitialized: true,
  name: 'myCookie',
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 3600000
  }
}

app.use(session(sessionConfig));
app.use(express.static(path.join(__dirname, 'miniStoreApp', 'dist')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ extended: true }));

mongoose.connect('mongodb://localhost/miniMart');
var Schema = mongoose.Schema;

// Customer Model
var CustomerSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2},
  orders: [{type: Schema.Types.ObjectId, ref: "Order"}]
  }, { timestamps: true })
mongoose.model('Customer', CustomerSchema);
var Customer = mongoose.model('Customer')

// Order Model
var OrderSchema = new mongoose.Schema({
  _customer: { type: Schema.Types.ObjectId, ref: 'Customer'},
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  quantity: {type: Number, required: true}
}, { timestamps: true })
mongoose.model('Order', OrderSchema);
var Order = mongoose.model('Order')

// Product Model
var ProductSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 1 },
  img: { type: String, default: '' },
  description: { type: String, required: true, minlength: 1 },
  quantity: { type: Number, required: true, default: 0 }});
mongoose.model('Product', ProductSchema);
var Product = mongoose.model('Product');

//      ROUTES

app.post('/api/addCustomer', function(req, res) {
  Customer.findOne(req.body, function(err, custFound) {
    if (custFound == null) {
      var newCustomer = new Customer(req.body);
      newCustomer.save(function(err, newCust) {
        if (err) {
          console.log(err);
        } else {
          console.log('new user was created!')
          res.json(newCust)
        }
      })
    } else {
      console.log('existing customer was inputed')
      res.sendStatus(500);
    }
  })
})

app.get('/api/getCustomers', function (req, res) {
  Customer.find({}, function(err, custList) {
    if (err) {
      console.log('error at getCustomers ', err)
    } else {
      res.json(custList)
    }
  })
})

app.get('/api/delCustomer/:id', function(req, res) {
  Customer.remove({_id: req.params.id}, function(err, newCustom) {
    if (err) {
      console.log('This did not work, deleting a customer')
    } else {
      Customer.find({}, function(err, custList) {
        if (err) {
          console.log('error at getCustomers ', err)
        } else {
          res.json(custList)
        }
      })
    }
  })
})

app.post('/api/addProduct', function(req, res) {
      var newProduct = new Product(req.body);
      newProduct.save(function(err, newProd) {
        if (err) {
          console.log(err);
        } else {
          console.log('new product was created :] !');
          Product.find({}, function(err, prodList) {
            if (err) {
              console.log('error at prodList ', err)
            } else {
              res.json(prodList)
            }
          })
        }
    })
})

app.get('/api/getProductList', function(req, res) {
  Product.find({}, function(err, prodList) {
    if (err) {
      console.log('error at prodList ', err)
    } else {
      res.json(prodList)
    }
  })
})

app.get('/api/getOrders', function(req, res) {
  console.log('Came into server.js file')
  Order.find({})
  .populate('_customer')
  .populate('_product')
  .exec(function (err, orderssss) {
    if (err) {
      console.log("There was an error getting all of the orders")
    } else {
      res.json(orderssss)
    }
  })
})

app.post('/api/addOrder', function (req, res){
  var order = new Order({_customer: req.body.exCustomer, _product: req.body.product, quantity: req.body.quantity})
  order.save(function (err) {
    if (err) {
      console.log('This is what happened when I tried to save the order',err)
    } else {
      Customer.findOne({_id: req.body.exCustomer}, function (err, cust) {
        if (err) {
          console.log("Didn't find anyone in /api/addOrder")
        } else {
          cust.orders.push(order._id);
          cust.save(function(err) {
            if (err) {console.log("Could not save order to customer")}
            else { res.json(order)}
          })
        }
      })
    }
  })
})

app.all('*', (req, res, next) => {
  res.sendfile(path.resolve('./miniStoreApp/dist/index.html'))
})

app.listen(8000, function() {
  console.log("Running on localhost: 8000")
})
