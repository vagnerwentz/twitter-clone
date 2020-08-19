import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';

import List from '../List';
import News from '../News';
import FollowSuggestion from '../FollowSuggestion';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <StickyBox>
        <Body>
          <List title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Bruna Eloisa"
                nickname="@brunaeloisa"
              />,
              <FollowSuggestion
                name="Médicos Sem Fronteiras"
                nickname="@medicossemfronteira"
              />,
              <FollowSuggestion
                name="DifioreAromas"
                nickname="@difiorearomas"
              />
            ]}
          />

          <List title="Talvez você curta"
            elements={[
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;
