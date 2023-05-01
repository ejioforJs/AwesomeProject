import React from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const CurrentWeather = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
      <Icon name='sun' size={100} color="black" />
        <Text style={styles.temp}>6</Text>
        <Text style={styles.feels}>Feels like 5</Text>
        <View style={styles.highlowwrapper}>
          <Text style={styles.highlow}>High: 8</Text>
          <Text style={styles.highlow}>Low: 6</Text>
        </View>
      </View>
      <View style={styles.bodywrapper}>
        <Text style={styles.description}>Its sunny</Text>
        <Text style={styles.message}>Its perfect t-shirt weather</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'pink'
  },
  temp: {
    color: 'black',
    fontSize: 48,
  },
  feels: {
    fontSize: 30,
    color: 'black',
  },
  highlow: {
    color: 'black',
    fontSize: 20,
  },
  highlowwrapper: {
    flexDirection: 'row',
  },
  bodywrapper: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
});

export default CurrentWeather;
