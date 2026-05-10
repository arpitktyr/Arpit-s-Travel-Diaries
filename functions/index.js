/* eslint-disable object-curly-spacing */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });

const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

exports.askArpit = functions.https.onRequest(async (req, res) => {
  cors(req, res, async () => {
    try {
      const { question } = req.body;

      const blogContext = ` 
      Rajasthan Ride:
      I explored Jaisalmer, Sam dunes, long highways and desert roads.

      Valley of Flowers:
      Trek experience with rain, mountains, rivers and emotional moments.

      I create cinematic bike travel content using DJI Action camera.
      `;

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `
            You are Arpit, a travel biker and storyteller.

            Answer casually, emotionally and realistically.

            Use these experiences:
            ${blogContext}
            `,
          },
          {
            role: "user",
            content: question,
          },
        ],
      });

      res.send({
        answer: response.choices[0].message.content,
      });
    } catch (error) {
      console.error(error);
      res.status(500).send(error);
    }
  });
});
