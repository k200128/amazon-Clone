const functions = require("firebase-functions");
const express = require ("express");
const cors = require ("cors");
const stripe = require("stripe") ('sk_test_51LgIbVHsaGqn51NeI72YNIU4W6Wjn8wRpz9vCugpTWb54rgdCkQ8bJ6Yz64et15VpbpJ5gynLs7QVO8GryA4dvtO0031Z8geKW')
// API

// app config
const app = express();
// Middlewares
app.use(cors({origin:true}));
app.use(express.json());
//API routes 
app.get('/', (request, response) => response.status(200).send('hello Parth '));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log("Payment amount Received  ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "aus",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// Listen Command 

exports.api = functions.https.onRequest(app);

//example endpooint

//http://localhost:5001/clone-1c1c2/us-central1/api