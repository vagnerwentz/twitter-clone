import React from 'react';

import {
  Container,
  Retweeted,
  RocketseatIcon,
  Body,
  Avatar,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  ComentIcon,
  RetweetIcon,
  LikeIcon,
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <Retweeted>
        <RocketseatIcon />
        Você retweetou
      </Retweeted>

    <Body>
      <Avatar />

      <Content>
        <Header>
          <strong>Rocketseat</strong>
          <span>@rocketseat</span>
          <Dot />
          <time>27 de jul</time>
        </Header>

        <Description>Foguete não tem ré</Description>

        <ImageContent />

        <Icons>
          <Status>
            <ComentIcon />
            500K
          </Status>
          <Status>
            <RetweetIcon />
            5.3M
          </Status>
          <Status>
            <LikeIcon />
            2M
          </Status>
        </Icons>

      </Content>
    </Body>
    </Container>
  );
}

export default Tweet;
