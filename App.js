import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

import Loading from './js/components/Loading';
import Quote from './js/components/Quote';
import ShareButton from './js/components/ShareButton';
import SettingsButton from './js/components/SettingsButton';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  useEffect(() => {
    _loadingApp();
  })

  async function _loadingApp() {
    let response = [];
    response = await _retrieveData();

    setAuthor(response.author);
    setText(response.quote);
    setIsLoading(false);
  }

  async function _retrieveData() {

    try {
      let response = await fetch('https://quotes.rest/qod');
      let json = await response.json();
      return json.contents.quotes[0];
    } catch (error) {
      console.error(error);
    }
  }


  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>

        <View style={styles.headerView}>
          <Text style={styles.header}>A quote every day ...</Text>
        </View>

        <Quote text={text} author={author} />
        <View style={styles.button}>
          <ShareButton text={text} author={author} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  settings:{
    position: 'absolute',
    right: 10,
    top: 10
  },
  headerView: {
    position: 'absolute',
    top: 60,
  },
  header: {
    fontSize: 15,
    fontStyle: 'italic'
  },
  loadingStyle: {
    alignContent: 'center'
  },
  button: {
    position: 'absolute',
    bottom: 10
  }
});
