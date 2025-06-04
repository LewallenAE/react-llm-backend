# 🧠 Eugenius – GPT-4 Chat API Backend

This is the Node.js + Express backend for **Eugenius**, a full-stack AI chatbot that uses OpenAI’s GPT-4 to generate smart, markdown-ready responses.  
Built to power the front-end experience with security, flexibility, and clean architecture.

---

## 📦 Features
- 🔐 CORS-protected API with origin whitelisting
- 🔧 Environment-based configuration using `dotenv`
- 🧠 Chat endpoint powered by `gpt-4o` model
- 🧪 Easy integration with any frontend (React, Vue, etc.)
- 💬 JSON-based POST interface (`/api/chat`)

---

## 🚀 Tech Stack
- **Node.js**
- **Express**
- **OpenAI SDK**
- **dotenv**
- **CORS**

---

## 🔧 Environment Variables

Create a `.env` file in the root of this project and include:

```env
OPENAI_API_KEY=your_openai_key_here
PORT=3001
