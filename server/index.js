import express, { json } from "express";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const PORT = process.env.PORT || 8000;
app.use(json());

app.listen(PORT, () => {
  console.log(`app is running fine ${PORT}`);
});

app.get("/", (req, res) => {
  res.status(200).json({ status: "Hello from /" });
});

app.post("/gemini", async (req, res) => {
  const { message } = req.body;
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const prompt = message;
  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    return res.status(200).json({ response: text });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
});
