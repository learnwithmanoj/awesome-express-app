const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', (req, res) => {
  let address;
  let addresses = [];
  for(let i = 0; i < 5; i++) {
    address = {
        zipCode: faker.address.zipCode(),
        city: faker.address.city(),
        streetName: faker.address.streetName(),
        streetAddress: faker.address.streetAddress(),
        county: faker.address.county(),
        country: faker.address.country(),
        countryCode: faker.address.countryCode(),
        state: faker.address.state(),
        created_date: new Date()
    };
    addresses.push(address);
  };
  res.json(addresses);
});

module.exports = router;
