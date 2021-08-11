import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Dimensions, Alert } from 'react-native';
import SubBlock from './components/SubBlock';
const windowWidth = Dimensions.get('window').width;

export default function App() {
  const [affirmation, setAffirmation] = useState('');

  useEffect(() => {
    let check = affirmation;
    console.log("checking-->" + check);
  }, [affirmation])
  const FetchAffirmation = () => {
    Alert.alert(
      "FETCH",
      "Are you sure,you want to fetch an affirmation ?",
      [
        {
          text: "No",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Yes", onPress: () => FetchAffirmationAPI() }
      ]
    );


  }
  const FetchAffirmationAPI = () => {
    fetch('https://www.affirmations.dev/', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }

    }).then(function (response) {
      return response.json();
    }).then(async function (response) {
      setAffirmation(response.affirmation);
      console.log("output" + JSON.stringify(affirmation));

    }).catch((error) => {
      console.error(error);
    });
  }

  const DisplayAffirmation = (affirmation) => {
    if (affirmation != '') {
      Alert.alert(
        "AFFIRMATION:",
        "Are you sure,you want to display the last affirmation ?",
        [
          {
            text: "No",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "Yes", onPress: () => console.log("OK Pressed") }
        ]
      );
    }
  }



  return (
    <SafeAreaView >

      <View style={styles.container}>
        <StatusBar style="auto" />
        <View>
          <SubBlock header="Introduction" body="Many swear by the power of affirmations to create positive changes in everything from finances and career to relationships and weight loss to improved self-confidence. These simple statements flood your brain with positive self-talk." />
          <SubBlock header="Step 1: FETCH" body="Click below button to request remote API and fetch Affirmations data" />
        </View>
        <View style={styles.btnContainer}>
          <Button onPress={() => FetchAffirmation()} title="Fetch" />
        </View>
        <SubBlock header="Step 2: Display" body="Click to display most recent fetched affirmation" />
        <View style={styles.btnContainer}>
          <Button disabled={affirmation==''} onPress={() => DisplayAffirmation()} title="Display" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginVertical: 50
  },
  btnContainer: {
    marginHorizontal: 10,
    width: 100
  }
});
