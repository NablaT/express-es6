var customer = require('./customer-model')
var log = require('bole')('customers/router')
var router = require('express').Router()

/**
 * This function retrive the list of user from the model and send it in JSON to the user
 * 
 * @param {express.Request}   req   Express HTTP request      
 * @param {express.Response}  res   Express HTTP response
 */
const getCustomers = async (req, res) => {
  var customers = await customer.findAll();
  res.json(customers)
}

/**
 * This function create a customer on what the user send in the body of the request
 * 
 * @param {express.Request}   req   Express HTTP request 
 * @param {express.Response}  res   Express HTTP response 
 */
const createCustomer = (req, res) => {
  customer.addCustomer(req.body)
  res.status(201).send()
}

/**
 * Routes handle in the file
 */
router.post('/customers', createCustomer)
router.get('/customers', getCustomers)

module.exports = router
