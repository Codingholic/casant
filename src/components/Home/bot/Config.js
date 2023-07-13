import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Cas Ant Bot';

const Config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#4169E1	',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default Config;