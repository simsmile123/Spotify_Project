import React, { useState, useEffect } from 'react';
import InboxSearch from '../components/InboxSearch';
import InboxCard from '../components/InboxCard';
import Navbar from '../components/Navbar';
import axios from 'axios';

const Inbox = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const id = localStorage.getItem("id");
    const [chat, setChats] = useState([]);
    const [chatLog, setChatLog] = useState([]);

    const fetchChats = async () => {
      try {
          const response = await axios.get(`http://localhost:5001/inbox/${id}`)
          console.log(response, " -> API Response")
          setChats(response);
      } catch (e) {
          console.error(e)
      }
    }

    const handleChatLog = async (chat) => {
      let chats = []
      for (const chatId of chat) {
        try {
          const response = await axios.get(`http://localhost:5001/inbox/${id}/${chatId}`)
          const history = response.history;
          const user = reponse.user2;
          const last_message = history[history.length - 1];
          const message = last_message[message];
          const time = last_message[time];
          const chatData = {
            'id': chatId,
            'user': user,
            'lastMessage': message,
            'timestamp': time,
          }
          chats.push(chatData)
        } catch (e) {
            console.error(e)
        }
      }
      setChatLog(chats);
    }

    useEffect(() => {
      fetchChats();
      handleChatLog(chat);
    }, [])

    // const chats = [
    //     {
    //       id: 1,
    //       user: 'Alice',
    //       lastMessage: 'Hey there!',
    //       timestamp: '2024-05-30T14:48:00.000Z',
    //     },
    //     {
    //       id: 2,
    //       user: 'Bob',
    //       lastMessage: 'How are you?',
    //       timestamp: '2024-05-29T10:23:00.000Z',
    //     },
    //   ];

    const filteredChats = chatLog.filter(chat =>
      chat.user.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
        <div className='inbox-wrapper'>
            <Navbar/>
            <div className='chatbox-wrapper'>
                <InboxSearch searchTerm={searchTerm} onSearch={setSearchTerm} />
                {filteredChats.map(chat => (
                <InboxCard key={chat.id} chat={chat} />
                ))}
            </div>
        </div>
    );
  };
  
  export default Inbox;