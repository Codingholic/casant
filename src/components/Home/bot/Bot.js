import config from './Config';
import MessageParser from './MessageParser';
import ActionProvider from '../bot/ActionProvider.js';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import "./Bot.css"
export const Bot = () => {
  return (
    <div className='botanimate'>
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};