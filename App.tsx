import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loader} from './Components/Loader';
import {Tinder} from './Components/Tinder';
import GestureEvent from './Components/GestureEvent';
import BlocksTransition from './Components/BlocksTransition';

const Stack = createNativeStackNavigator();

const HomeScreen = ({navigation}: any) => {
  const titles: string[] = [
    'Loader',
    'Tinder',
    'Gesture Handler',
    'Blocks Transition',
  ];
  return (
    <View style={styles.wrapper}>
      {titles.map(i => (
        <Text
          onPress={() => navigation.navigate(i)}
          key={i + 9009}
          style={styles.wrapperItem}>
          {i}
        </Text>
      ))}
    </View>
  );
};

const App = (): JSX.Element => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="Tinder" component={Tinder} />
        <Stack.Screen name="Gesture Handler" component={GestureEvent} />
        <Stack.Screen name="Blocks Transition" component={BlocksTransition} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '70%',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  wrapperItem: {
    fontSize: 20,
    padding: 10,
    borderColor: '#000',
    borderWidth: 1,
    margin: 10,
  },
});

export default App;
