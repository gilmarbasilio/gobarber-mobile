import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container } from './styles';
import Background from '~/components/background/Background';

export default function Confirm() {
  return (
    <Background>
      <Container />
    </Background>
  );
}

Confirm.navigationOptions = ({ navigation }) => ({
  title: 'Confirme o agendamento',
  headerLeft: () => (
    <TouchableOpacity
      onPress={() => {
        navigation.goBack();
      }}
    >
      <Icon name="chevron-left" size={20} color="#fff" />
    </TouchableOpacity>
  ),
});
