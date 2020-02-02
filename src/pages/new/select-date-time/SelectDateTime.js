import React, { useState, useEffect } from 'react';
import { Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '~/components/background/Background';

import { Container, HourList, Hour, Title } from './styles';

import DateInputIOS from '~/components/date-input/DateInput.ios';
import DateInputAndroid from '~/components/date-input/Datenput.android';
import api from '~/services/api';

const DateInput = Platform.select({
  ios: () => DateInputIOS,
  android: () => DateInputAndroid,
})();

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', { provider, time });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => item.time}
          renderItem={({ item }) => (
            <Hour
              onPress={() => handleSelectHour(item.value)}
              enabled={item.available}
            >
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
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
