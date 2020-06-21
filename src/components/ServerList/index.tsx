import React from 'react';

import ServerButton from '../ServerButton';

import ReactTooltip from 'react-tooltip';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <a data-for="home" data-tip="Home">
        <ServerButton isHome />
      </a>
      <ReactTooltip
        id="home"
        place="right"
        type="dark"
        effect="solid"
        offset={{ top: 4, left: -12 }}
        className="custom"
      />

      <Separator />

      <a data-for="server" data-tip="Rocketseat">
        <ServerButton hasNotifications server mentions={9} />
      </a>
      <ReactTooltip
        id="server"
        place="right"
        type="dark"
        effect="solid"
        offset={{ top: 4, left: -12 }}
        className="custom"
      />

      <a data-for="add" data-tip="Add a Server">
        <ServerButton add />
      </a>
      <ReactTooltip
        id="add"
        place="right"
        type="dark"
        effect="solid"
        offset={{ top: 4, left: -12 }}
        className="custom"
      />

      <a data-for="explore" data-tip="Explore Public Servers">
        <ServerButton explore />
      </a>
      <ReactTooltip
        id="explore"
        place="right"
        type="dark"
        effect="solid"
        offset={{ top: 4, left: -12 }}
        className="custom"
      />

      <Separator />

      <a data-for="download" data-tip="Download Apps">
        <ServerButton download />
      </a>
      <ReactTooltip
        id="download"
        place="right"
        type="dark"
        effect="solid"
        offset={{ top: 4, left: -12 }}
        className="custom"
      />
    </Container>
  );
};

export default ServerList;
