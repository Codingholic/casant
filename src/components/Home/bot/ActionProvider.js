import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
    const handleHello = () => {
        const botMessage = createChatBotMessage('Hi, Welcome to Cas Ant Events, How can we help you?');

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage, ],
        }));
      };
      const handleLocation = () => {
        const botMessage = createChatBotMessage('Roulo Bando, St. Agostinho,Santa Cruz, Tiswadi, Goa 403005');

        setState((prev) => ({
          ...prev,
          messages: [...prev.messages, botMessage, ],
        }));
      };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleLocation,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;