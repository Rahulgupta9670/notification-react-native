import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';
import MyNotif from './src/screen/LocalNotification';


export default function App() {


  const handleSubmit = () => {
    MyNotif.configure();
    // MyNotif.showNotif();
    MyNotif.SendMessage();
    // console.log("jskksks")
  };
  return (
    <View style={{
      flex:1, justifyContent:"center"
    }}>
      <Text>items</Text>
     
      <Button title="Notification" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    height: 60,
  },
});
