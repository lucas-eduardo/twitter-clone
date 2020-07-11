import React from 'react';

import Feed from '../Feed';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  Followage,
  EditButton
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Lucas Eduardo</h1>
        <h2>@lucas-eduardo</h2>

        <p>
          Web Developer at <a href="https://lucaseduardo.netlify.com/">@Lucas Eduardo</a>
        </p>

        <ul>
          <li>
            <LocationIcon /> São Paulo, Brasil
          </li>
          <li>
            <CakeIcon /> Nascido(a) em 30 de Junho de 1997
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>94</strong>
          </span>
          <span>
            <strong>672 </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;