import React, { useState } from 'react';
import axios from 'axios';

function Chatbot() {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
  
    const apiUrl = 'https://api.openai.com/v1/completions';
    const apiKey = '';
  
    const askQuestion = async () => {
      try {
        const response = await axios.post(apiUrl, {
          prompt: question,
          max_tokens: 50,
        }, {
          headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json',
          },
        });
  
        setAnswer(response.data.choices[0].text.trim());
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <div>
        <h1>Chatbot Page</h1>
        <input
          type="text"
          placeholder="Enter your question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={askQuestion}>Ask</button>
        <p>{answer}</p>
      </div>
    );
  }
  
  export default Chatbot;
  