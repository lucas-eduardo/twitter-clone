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
  CommentIcon,
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
            <time>10 de jul</time>
          </Header>

          <Description>Foquete não tem ré <span role="img" aria-label="rocket">🚀</span></Description>

          <ImageContent />

          <Icons>
            <Status>
              <CommentIcon /> 18
            </Status>
            <Status>
              <RetweetIcon /> 18
            </Status>
            <Status>
              <LikeIcon /> 999
            </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  );
}

export default Tweet;