import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = ({ route }) => {
    const { donationRequest } = route.params;

    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: 'Hello! How can I help you?',
            createdAt: new Date(),
            user: {
                _id: 2, // You can customize user IDs as needed
                name: 'Chat Bot', // Name of the user or bot
            },
        },
    ]);

    const handleSend = (newMessages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <Text>Chat with {donationRequest.name}</Text>
            <GiftedChat
                messages={messages}
                onSend={(newMessages) => handleSend(newMessages)}
                user={{ _id: 1 }} // Customize this based on your user's structure
            />
        </View>
    );
};

export default ChatScreen;
