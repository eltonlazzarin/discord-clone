import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding: 4px 16px;
  margin-right: 4px;
  background-color: transparent;
  &.mention {
    background-color: var(--mention-message);
    border-left: 2px solid var(--mention-detail);
    padding-left: 14px;
  }
  & + div {
    margin-top: 13px;
  }

  &:hover {
    background-color: var(--quinary);
  }
`;

export const Avatar = styled.div`
  img {
    flex-shrink: 0;
    width: 36px;
    height: 36px;
    background-color: var(--discord-default);
    border-radius: 50%;
  }
`;

export const Message = styled.div`
  min-height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 17px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  > strong a {
    color: var(--white);
    font-size: 16px;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  > span {
    margin-left: 6px;
    background-color: var(--discord);
    color: var(--white);
    border-radius: 4px;
    padding: 4px 5px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }
  > time {
    margin-left: 6px;
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Content = styled.div`
  text-align: left;
  font-size: 16px;
  color: var(--messages-text);

  a {
    color: #00b0f4;
    font-size: 14px;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  section {
    display: flex;
    justify-content: space-between;
    margin-top: 4px;
    border-radius: 4px;

    border-left: 4px solid var(--tertiary);
    padding-left: 14px;

    padding: 16px;

    background-color: var(--secondary);

    header {
      margin: 0 0 8px 0;
      font-size: 11px;
    }

    a {
      color: #00b0f4;
      font-weight: bold;
      font-size: 15px;
      text-decoration: none;
    }

    p {
      font-size: 13px;
      padding-right: 10px;
      margin: 8px 0 0 0;
    }
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 4px;
  }
`;

export const Mention = styled.span`
  background-color: rgba(114, 137, 218, 0.1);
  border-radius: 3px;
  padding: 0 2px 1px 1px;

  color: var(--link);
  cursor: pointer;
  &:hover {
    color: var(--white);
    background-color: var(--discord);
  }
`;
