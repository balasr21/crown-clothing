const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
// To Fetch Env only if its not production

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const stripe = require("stripe")(functions.config().stripe.key);

exports.payment = functions.https.onRequest((request, response) => {
  cors(request, response, () => {
    console.log("Received payment request to server ", request);
    const body = {
      source: request.body.token.id,
      amount: request.body.amount,
      currency: "usd",
    };

    stripe.charges.create(body, (stripeErr, stripeRes) => {
      if (stripeErr) {
        console.log("Error during processing payment ******* ", stripeErr);
        response.status(500).send({ error: stripeErr });
      }

      if (stripeRes) {
        response.status(200).send({ success: stripeRes });
      }
    });
  });
});

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase");
});
