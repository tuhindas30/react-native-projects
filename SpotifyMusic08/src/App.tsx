import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {addTracks, setupPlayer} from '../musicPlayerServices';
import MusicPlayer from './screens/MusicPlayer';

const App = (): JSX.Element => {
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    (async () => {
      const isSetupDone = await setupPlayer();

      if (isSetupDone) {
        await addTracks();
      }

      setIsPlayerReady(true);
    })();
  }, []);

  if (!isPlayerReady) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <MusicPlayer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
