const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', (req, res) => {
  let company;
  let companies = [];
  for(let i = 0; i < 5; i++) {
    company = {
        suffixes: faker.company.suffixes(),
        companyName: faker.company.companyName(),
        companySuffix: faker.company.companySuffix(),
        catchPhrase: faker.company.catchPhrase(),
        bs: faker.company.bs(),
        created_date: new Date()
    };
    companies.push(company);
  };
  res.json(companies);
});

module.exports = router;
