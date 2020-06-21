import React from 'react';

import { Container, Avatar, Message, Header, Content } from './styles';

export { Mention } from './styles';

export interface Props {
  author: string;
  date: string;
  content: string | React.ReactElement | React.ReactNode;
  hasMention?: boolean;
  isBot?: boolean;
  url?: string;
  repo?: string;
  description?: string;
}

const ChannelMessage: React.FC<Props> = ({
  author,
  date,
  content,
  hasMention,
  isBot,
  url,
  repo,
  description,
}) => {
  return (
    <Container className={hasMention ? 'mention' : ''}>
      <Avatar className={isBot ? 'bot' : ''}>
        <img src={require('../../assets/discord.svg')} alt="User Thumbnail" />
      </Avatar>

      <Message>
        <Header>
          <strong>
            <a
              href="https://github.com/eltonlazzarin/discord-ui-clone"
              target="_blank"
              rel="noopener noreferrer"
            >
              {author}
            </a>
          </strong>

          {isBot && <span>Bot</span>}

          <time>{date}</time>
        </Header>
        <Content>
          <p>{content}</p>

          {url && (
            <>
              <br />
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
              <section>
                <div>
                  <header>GitHub</header>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {repo}
                  </a>
                  <p>{description}</p>
                </div>
                <div>
                  <img
                    src="https://avatars1.githubusercontent.com/u/53025782?s=75&u=f1ffa8eaccb8545222b7c642532161f11e74a03d&v=4"
                    alt="User Thumbnail"
                  />
                </div>
              </section>
            </>
          )}
        </Content>
      </Message>
    </Container>
  );
};

export default ChannelMessage;
