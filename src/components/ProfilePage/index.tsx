import React from 'react';

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

import Feed from '../Feed';


const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>
          Editar perfil
        </EditButton>

        <h1>Vagner Wentz</h1>
        <h2>@vagnerwentz</h2>

        <p>
          Junior Software Engineer apaixonado por programação e desafios
        </p>

        <ul>
          <li>
            <LocationIcon />
            Foz do Iguaçu, Brasil
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 12 de março de 1998
          </li>
        </ul>

        <Followage>
          <span>
            seguindo <strong>50</strong>
          </span>
          <span>
            <strong>1M </strong> seguidores
          </span>
        </Followage>
      </ProfileData>

      <Feed />
    </Container>
  );
}

export default ProfilePage;
