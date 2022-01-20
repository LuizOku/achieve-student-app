import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { FontAwesome } from '@expo/vector-icons';

import { resetApp } from '../../../../actions/appActions';
import { ScreenContainer, Button } from '../../../../components';
import colors from '../../../../utils/colors';
import {
  Container,
  Content,
  WhiteSection,
  GraySection,
  Subtitle,
  CardText,
  Header,
  Title,
} from './styles.css';

function Profile() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.student);

  const handleLogout = () => {
    dispatch(resetApp());
  };

  return (
    <ScreenContainer
      backgroundColor={colors.WHITE}
      backgroundMode="stretch"
      noPadding
    >
      <Container>
        <Header>
          <FontAwesome name="user-circle-o" color={colors.WHITE} size={100} />
          <Title>Hello {me?.firstName}</Title>
        </Header>
        <Content>
          <WhiteSection>
            <Subtitle>First name</Subtitle>
            <CardText>{me?.firstName}</CardText>
          </WhiteSection>
          <GraySection>
            <Subtitle>Last name</Subtitle>
            <CardText>{me?.lastName}</CardText>
          </GraySection>
          <WhiteSection>
            <Subtitle>Email</Subtitle>
            <CardText>{me?.email}</CardText>
          </WhiteSection>
          <GraySection>
            <Subtitle>School</Subtitle>
            <CardText>{me?.school}</CardText>
          </GraySection>
          <WhiteSection>
            <Button background={colors.ERROR} onPress={handleLogout} fullWidth>
              Logout
            </Button>
          </WhiteSection>
        </Content>
      </Container>
    </ScreenContainer>
  );
}

export default Profile;
