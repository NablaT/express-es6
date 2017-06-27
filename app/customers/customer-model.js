"use strict";
/**
 * Hard coded list of user to mock a DB
 */
let customers = [
  { "id": 1, "name": "Jane Doe" },
  { "id": 2, "name": "John Doe" }
];

/**
 * This function simulate the fact we use a DB by being asynchronous. Should be replace by a real call to a DB.
 */
const findAll = () =>  {
  return new Promise(resolve => {
    setImmediate(() => {
      resolve(customers)
    })
  })
}

/**
 * This function add the customer to the hard coded list of customers
 * 
 * @param {json} customer JSON sent to add to the list of user
 */
const addCustomer = customer => {
  customers.push(customer)
}

exports.findAll = findAll
exports.addCustomer = addCustomer
