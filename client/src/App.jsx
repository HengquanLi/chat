import React, { useState } from 'react';
import { StreamChat } from 'stream-chat';
import { Chat } from 'stream-chat-react';
import Cookies from 'universal-cookie';

import { ChannelContainer, ChannelListContainer, Auth } from './components';

import 'stream-chat-react/dist/css/index.css';
import './App.css';

const cookies = new Cookies();

const apiKey = '7my6rdau6ber';
const authToken = cookies.get('token');

const client = StreamChat.getInstance(apiKey);

if (authToken) {
  client.connectUser(
    {
      id: cookies.get('userId'),
      name: cookies.get('userName'),
      fullName: cookies.get('fullName'),
      phoneNumber: cookies.get('phoneNumber'),
      image: cookies.get('avatarURL'),
      hashedPassword: cookies.get('hashedPassword')
    }, authToken
  )
}

const App = () => {

  const [createType, setCreateType] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState(false)


  if (!authToken) return <Auth />
  return (
    <div className="app__wrapper">
      <Chat client={client} theme="team light">
        <ChannelListContainer
          isCreating={isCreating}
          setCreateType={setCreateType}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
        />
        <ChannelContainer 
          isCreating={isCreating}
          isEditing={isEditing}
          setIsCreating={setIsCreating}
          setIsEditing={setIsEditing}
          createType={createType}
        />
      </Chat>
    </div>
  )
}

export default App;
