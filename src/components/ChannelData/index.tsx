import React, { useState, useRef, useEffect, FormEvent } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, InputIcon } from './styles';

import data from '../../messages.json';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [inputValue, setInputValue] = useState('');
  const [newData, setNewData] = useState(data);

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef, newData]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const currentDay = new Date().toLocaleDateString('pt-BR');

    const users = [
      'Elton Lazzarin',
      'Coherent Deranged',
      'Derplo Oped',
      'Mammothsama__)',
      '!والرآ دا سايي32',
      '_)(Валераи да саи',
      '&(83Jazzy Misty',
      '*!|Ludicrousson',
      '_&m157ylud1cr0u5',
    ];

    const authorName = users[Math.floor(Math.random() * users.length)];

    const defaultMessageData = [
      {
        author: authorName,
        date: currentDay,
        content: inputValue,
        hasMention: false,
        isBot: false,
      },
    ];

    const newMessage = newData.concat(defaultMessageData);

    setNewData(newMessage);
    setInputValue('');
  }

  return (
    <Container>
      <Messages ref={messagesRef}>
        {newData.map((message, index) => (
          <ChannelMessage
            key={index}
            author={message.author}
            date={message.date}
            content={
              message.hasMention ? (
                <>
                  <Mention>@{message.mention}</Mention>, {message.content}
                </>
              ) : (
                message.content
              )
            }
            hasMention={message.hasMention}
            isBot={message.isBot}
            url={message.url}
            repo={message.repo}
            description={message.description}
          />
        ))}
      </Messages>

      <InputWrapper>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            placeholder="Message #chat-livre"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <InputIcon />
        </form>
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
