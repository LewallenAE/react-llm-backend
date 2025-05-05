require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const OpenAI = require('openai');


const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});



app.post('/api/chat', async (req, res) => {
    const prompt = req.body.prompt;


    if (!prompt) {
        return res.status(400).json({error: 'Prompt is required'});
    }

    try {
        const completion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{role: 'user', content: prompt}],
        });

        const reply = completion.choices[0].message.content;
        res.json({reply});
    } catch (error) {
        console.error('OpenAI API error:', error.message);
        res.status(500).json({error: 'Failed to generate response from OpenAI' });
        }
    });

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });