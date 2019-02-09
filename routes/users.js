const express = require('express');
const router = express.Router();
const faker = require('faker');

/* GET users listing. */
router.get('/', (req, res) => {
  let user;
  let users = [];
  for(let i = 0; i < 5; i++) {
    user = {
        title: faker.lorem.words(),
        author: faker.name.findName(),
        author_image: faker.image.avatar(),
        image: faker.image.abstract(),
        price: faker.commerce.price(),
        short_description: faker.lorem.sentence(),
        long_description: faker.lorem.paragraph(),
        created_date: new Date()
    };
    users.push(user);
  };
  res.json(users);
});

module.exports = router;
