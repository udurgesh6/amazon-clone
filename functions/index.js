const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");

const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51HZGkVILo0GchJRsBso1YLxNFghqLwMp98OlmANlnQ47zxIntt6LQ4hFXkGlQmPeAhKdZslDGlr0cUo4txvE40st00Q3JAxO0e"
);
//Api

//App config
const app = express();
//MiddleWares
app.use(cors({ origin: true }));
app.use(express.json());
//Api routes
app.get("/", (request, response) => response.status(200).send("hello World"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  console.log("Payment Request Recieved BOOM!!! for this amount", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency   
    currency: "inr",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//Listen Command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-df4c3/us-central1/api
