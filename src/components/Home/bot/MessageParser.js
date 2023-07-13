import React from 'react';

const MessageParser = ({ children, actions }) => {
    const Location = ["location", "place", "where", "which place", "find"];
    const Greet = ["hi", "hello", "good morning", "good evening", "howdy", "hey",];
    const parse = (message) => {
        const lowcapthemessage = message.toLowerCase();
        const LocationResponse = Location.find((word) => lowcapthemessage.includes(word));
        console.log("you asked for location"  + LocationResponse)
        const GreetResponse = Greet.find((word) => lowcapthemessage.includes(word));
        console.log("you just greeted us" + GreetResponse)

        if (lowcapthemessage.includes(GreetResponse)) {
            actions.handleHello();
        } else if (lowcapthemessage.includes(LocationResponse)) {
            actions.handleLocation();
        }
        console.log(lowcapthemessage);
    };

    return (
        <div>
            {React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                    parse: parse,
                    actions: {},
                });
            })}
        </div>
    );
};

export default MessageParser;