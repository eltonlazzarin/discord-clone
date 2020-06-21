import React from 'react';

import { FiPlus, FiCompass, FiDownload } from 'react-icons/fi';

import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  add?: boolean;
  explore?: boolean;
  download?: boolean;
  server?: boolean;
  hasNotifications?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  server,
  add,
  explore,
  download,
  hasNotifications,
  mentions,
}) => {
  return (
    <Button
      isHome={isHome}
      server={server}
      add={add}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
    >
      {isHome && (
        <img src={require('../../assets/discord.svg')} alt="Discord" />
      )}

      {server && (
        <img src={require('../../assets/logo.svg')} alt="Rocketseat" />
      )}

      {add && <FiPlus size={24} color="#43B581" />}

      {explore && <FiCompass size={24} color="#43B581" />}

      {download && <FiDownload color="#43B581" size={22} />}
    </Button>
  );
};

export default ServerButton;
