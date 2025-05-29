require('dotenv').config();
const express = require('express');
const cors = require('cors');
const OpenAI = require('openai');
const app = express();
const port = process.env.PORT || 3001;
const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5173',
    'https://react-llm-chat.vercel.app', // Add your production frontend URL here
]

app.use(
    cors({
    origin: (origin, cb) => {
        if (!origin) return cb(null, true);
        return cb(null, allowedOrigins.includes(origin));
    }, // Replace with your frontend URL
  })
);

app.use(express.json());


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



app.post('/api/chat', async (req, res) => {
  const prompt = req.body.prompt;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o', // Make sure this model is available on your account
      messages: [{ role: 'user', content: prompt }],
      stream: false, // Change to true if you're streaming responses properly
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });

  } catch (error) {
    console.error('OpenAI API error:', error); // Full error object for debugging
    res.status(500).json({ error: 'Failed to generate response from OpenAI' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
