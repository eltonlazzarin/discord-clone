import styled from 'styled-components';

import { Props } from '.';

export const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  width: 48px;
  height: 48px;
  border-radius: ${(props) => (props.server ? '16px' : '50%')};

  margin-bottom: 8px;

  background-color: ${(props) =>
    props.isHome
      ? 'var(--primary)'
      : 'var(--primary)' && props.server
      ? 'var(--rocketseat)'
      : 'var(--primary)'};

  position: relative;
  cursor: pointer;

  > img {
    width: ${(props) => (props.isHome ? '34px' : '24px')};
    height: ${(props) => (props.isHome ? '32px' : '24px')};
  }

  &::before {
    width: 9px;
    height: 40px;

    position: absolute;
    left: -17px;
    top: calc(50% - 20px);

    background-color: var(--white);
    border-radius: 12px;

    content: '';
    display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
  }

  &::after {
    background-color: var(--notification);
    width: auto;
    height: 16px;

    padding: 0 4px;

    position: absolute;
    bottom: -4px;
    right: -4px;

    border-radius: 12px;
    border: 4px solid var(--quaternary);

    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: var(--white);

    content: '${(props) => props.mentions && props.mentions}';
    display: ${(props) =>
      props.mentions && props.mentions > 0 ? 'inline' : 'none'}
  }

  transition: border-radius 0.2s, background-color 0.2s;

  &.active,
  &:hover {
    border-radius: 16px;
    background-color: ${(props) =>
      props.isHome
        ? 'var(--discord)'
        : 'var(--discord-default)' && props.server
        ? 'var(--rocketseat)'
        : 'var(--discord-default)'};
  }

  &.active,
  &:hover svg {
    stroke: var(--white);
  }
`;
