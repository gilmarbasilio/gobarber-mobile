import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/background/Background';

import { Container, Title } from './styles';

export default function Dashboard() {
  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
