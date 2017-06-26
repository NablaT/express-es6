let customers =  [
      {id: 1, name: 'Jane Doe'},
      {id: 2, name: 'John Doe'}
    ];

function findAll (callback) {
  // Query DB for a page of customers
  // Mocked out here as out of scope
  setImmediate(function () {
    callback(null, customers)
  })
}

const addCustomer = customer => {
  customers.push(customer)
}

exports.findAll = findAll
exports.addCustomer = addCustomer
