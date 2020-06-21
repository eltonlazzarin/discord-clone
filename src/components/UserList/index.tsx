import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import data from '../../users.json';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  isOnline?: boolean;
  isOffline?: boolean;
}

const UserRow: React.FC<UserProps> = ({
  nickname,
  isBot,
  isOnline,
  isOffline,
}) => {
  return (
    <User>
      <Avatar
        className={
          isBot
            ? 'bot'
            : '' || isOnline
            ? 'online'
            : '' || isOffline
            ? 'offline'
            : ''
        }
      >
        <img src={require('../../assets/discord.svg')} alt="User Thumbnail" />
      </Avatar>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Moderadores—1</Role>
      <UserRow nickname="Elton Lazzarin" isOnline />
      <UserRow nickname="!دا سايي3والر 2" isOnline />

      <Role>Online—18</Role>
      {data.map((user, index) => (
        <UserRow
          key={index}
          nickname={user.nickname}
          isBot={user.isBot}
          isOnline={user.isOnline}
          isOffline={user.isOffline}
        />
      ))}
    </Container>
  );
};

export default UserList;
