import styled from 'styled-components';
import { AddCircle } from 'styled-icons/material';

export const Container = styled.div`
  grid-area: CD;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: var(--primary);
`;

export const Messages = styled.div`
  padding: 20px 0;

  display: flex;
  flex-direction: column;

  max-height: calc(100vh - 46px - 68px);
  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--tertiary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background-color: var(--secondary);
  }
`;

export const InputWrapper = styled.div`
  width: 100%;

  padding: 0 16px;

  input {
    width: 100%;
    height: 44px;

    padding: 0 10px 0 57px;
    border-radius: 7px;

    color: var(--gray);
    background-color: var(--chat-input);

    position: relative;

    &::placeholder {
      color: var(--gray);
      font-size: 15px;
    }

    ~ svg {
      position: relative;
      cursor: pointer;
      top: -35px;
      left: 14px;
      transition: 180ms ease-in-out;

      &:hover {
        fill: #dcdcdc;
      }
    }
  }
`;

export const InputIcon = styled(AddCircle)`
  width: 26px;
  height: 26px;

  color: var(--gray);
`;
