const express = require('express');
const db = require('../services/firestore');

const router = express.Router();

router.get('/', async (req, res) => {});

router.post('/order', async (req, res) => {
  try {
    console.log(req.body, '---DATA');
    // Add a new document with a generated id.
    const res1 = await db.collection('order').add({
      customer: {
        name: 'test name',
        phone: '234',
      },
      order: [
        {
          quantity: 23,
          price: 23,
        },
      ],
    });

    console.log('Added document with ID: ', res1.id);

    res.send(res1.id);
  } catch (err) {
    console.log(err);
    res.send('fail');
  }
});

module.exports = router;
