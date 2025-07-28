# 🧠 OpenAI In-Class Exercise – Mini GPT Chatbot

This is a simple chatbot web app that connects to OpenAI’s GPT API using Node.js and JavaScript. It demonstrates how to send a prompt to OpenAI and display the response on a web page.

---

## 🚀 What You’ll Build

A small app where users can type a question and get an AI-generated answer from OpenAI's `gpt-4.1` model.

---

## 📁 Project Structure

```
openai-inclass-exercise/
├── index.html        # Frontend interface
├── script.js         # Sends user input to backend and displays reply
├── server.js         # Node.js Express server handling OpenAI requests
├── .env.example      # Sample for your API key
├── .gitignore        # Keeps secrets and node_modules out of Git
└── package.json      # Project dependencies and start script
```

---

## ⚙️ Prerequisites

- Node.js v18 or newer: [Download Node.js](https://nodejs.org/)
- A free OpenAI API key from: [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys)

---

## 🛠️ Setup Instructions

1. **Clone this repository**
```bash
git clone https://github.com/Johanp78/openaichatbot.git
cd openaichatbot
```

2. **Install dependencies**
```bash
npm install
```

3. **Add your OpenAI API key**
- Create a `.env` file based on `.env.example`
- Paste your key:
```
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxx
```

4. **Start the app**
```bash
npm start
```

5. **Visit the app**
Go to: [http://localhost:3000](http://localhost:3000)

---

## ✨ How It Works

- User enters a question in the input field.
- `script.js` sends that input to the backend via `/ask`.
- `server.js` forwards the prompt to OpenAI and returns the GPT-generated reply.
- The response is shown on the page.

---

## 🧪 Test Prompt

Try typing:
```
What are 3 cool facts about space?
```

---

## 💻 Recommended VS Code Extensions

- [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)
- [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
- `.env` Extension for syntax highlighting

---

## ❗Troubleshooting

- If you see `undefined` as a response:
  - Your API key may be missing or incorrect
  - You may have run out of quota on OpenAI
- Check logs in your terminal for error messages

---

## 📄 License

MIT — for educational use only.
