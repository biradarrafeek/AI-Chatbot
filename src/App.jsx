import { useState } from "react";

import { Chat } from "./components/Chat/Chat";
import { Controls } from "./components/Controls/Controls"
import styles from "./App.module.css";
import './App.css'

function App() {
  const [messages, setMessages] = useState(MESSAGES);

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <img className={styles.Logo} src="/chat-bot.png" />
        <h2 className={styles.Title}>AI Chatbot</h2>
      </header>
      <div className={styles.ChatContainer}>
        <Chat messages={messages} />
      </div>
      <Controls />
    </div>
  );
}


const MESSAGES = [
  {
    "role": "user",
    "content": "Hello, I’d like to know more about your services."
  },
  {
    "role": "user",
    "content": "Can you explain how the login system works?"
  },
  {
    "role": "user",
    "content": "I’m interested in purchasing the premium plan. Could you share the pricing details?"
  },
  {
    "role": "user",
    "content": "I tried to reset my password but haven’t received the email. Can you help?"
  },
  {
    "role": "user",
    "content": "I really like the new dashboard design, but it would be great if you could add dark mode."
  },
  {
    "role": "user",
    "content": "Can I schedule a demo call for tomorrow at 4 PM?"
  },
  {
    "role": "user",
    "content": "What are the key features of your latest update?"
  }

]

export default App
