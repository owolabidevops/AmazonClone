const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HQYRhCVWmSReMepzga2D8DubOIJOScfy3U2TJrdHYuBYyq9BQa4PJZmqd6MorZCbHomnAuDP6PaTB31avYyVeFM00VC7Rh1yg"
);

//Api

//-app config
const app = express();

//-middlewares
app.use(cors({ origin: true }));
app.use(express.json());

//-Api routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("payment request received  for this amount ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //sub unit of the currency
    currency: "usd",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//-Listen command

 exports.api = functions.https.onRequest(app);

// example endpoint
// http://localhost:5001/ecloneapp/us-central1/api
