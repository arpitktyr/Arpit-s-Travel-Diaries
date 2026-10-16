/* eslint-disable object-curly-spacing */
const functions = require("firebase-functions");
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: functions.config().openai.key,
});

exports.askArpit = functions.https.onRequest(async (req, res) => {
  // ===== MANUAL CORS =====
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.set("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(204).send("");
  }

  try {
    if (req.method !== "POST") {
      return res.status(405).json({
        error: "Method not allowed",
      });
    }

    const { question } = req.body;

    if (!question) {
      return res.status(400).json({
        error: "Question is required",
      });
    }

    const blogContext = `
      Rajasthan Ride:
      Explored Jaisalmer, Sam dunes and desert highways.

      Valley of Flowers:
      Trekking experience with rain and mountains.

      I create cinematic bike travel content.
    `;

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: `
            You are Arpit,
            a travel biker and storyteller.

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

    return res.status(200).json({
      answer: response.choices[0].message.content,
    });
  } catch (error) {
    console.error("FUNCTION ERROR:", error);

    return res.status(500).json({
      error: error.message || "Internal server error",
    });
  }
});
