const functions = require("firebase-functions");
const express = require('express')
const cors = require('cors')
const { v4: uuidv4 } = require("uuid")
const stripe = require('stripe')
    ('sk_test_51I7ZySCRuEIFioynDVNdNe3KJFMSCjmCbSWHfgv8zP8pjC721hjcOgnjmvhOda6eK57iU6kxpYxrJ3TAsiWwH11300kq9pKbcC')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

// API

// Configure app

const app = express();

// Middlewears
app.use(cors({ origin: true }))
app.use(express.json())

// - API routes
app.get('/', (request, response) => response.status(200).send('Hello World'))
app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('payment Request Recieved BOOM!! for this amount >>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //submit of the currency
        currency: "usd",
        description: 'Software development services',
        shipping: {
            name: 'Jenny Rosen',
            address: {
                line1: '510 Townsend St',
                postal_code: '98140',
                city: 'San Francisco',
                state: 'CA',
                country: 'US',
            },
        },

    })

    // ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// app.get('/A', (request, response) => response.status(200).send('Whats Up Atiurrahman'))
// app.post('/payments/create', async (req, res) => {

//     const { basket, token } = req.body
//     console.log("PRODUCTS:", basket)

//     let amount = 0;
//     basket.map(p => {
//         amount = amount + p.price
//     })

//     const idempotencyKey = uuidv4()
//     return stripe.customers.create({
//         email: token.email,
//         source: token.id,

//     }).then(customer => {
//         stripe.charges.create({
//             amount: amount* 100,
//             currency: 'usd',
//             customer: customer.id,
//             receipt_email: token.email,
//             description: "a test amount",
//             shipping: {
//                 name: token.card.name,
//                 address: {
//                     line1: token.card.address_line1,
//                     line2: token.card.address_line2,
//                     city: token.card.address_city,
//                     country: token.card.address_country,
//                     postal_code: token.card.address_zip

//                 }
//             }
//         }, { idempotencyKey })
//             .then(result => res.status(200).json(result))
//             .catch(err => console.log(err))
//     })
// } )

// Optional


// - Listen command
exports.api = functions.https.onRequest(app)

// Exmapleend point
// http://localhost:5001/my-3507b/us-central1/api